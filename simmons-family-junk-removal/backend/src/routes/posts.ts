import express, { Request, Response, Router } from 'express';
import multer from 'multer';
import Post from '../models/Post';
import { authMiddleware } from '../middleware/auth';
import archiver from 'archiver';
import extract from 'extract-zip';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

const router: Router = express.Router();

// Configure multer for memory storage
const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Get all posts
router.get('/', async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts.map(post => ({
      ...post.toObject(),
      image: post.image ? `/api/posts/${post._id}/image` : null
    })));
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Get single post
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    
    const postObject = post.toObject();
    res.json({
      ...postObject,
      image: post.image ? `/api/posts/${post._id}/image` : null
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// Get post image
router.get('/:id/image', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post || !post.image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    
    res.set('Content-Type', post.image.contentType);
    res.send(post.image.data);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});


// Protect the delete route with authentication
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post' });
  }
});
// Create post
router.post('/', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const postData: any = {
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content,
      category: req.body.category || '',  // Handle category
    };

    // Handle tags
    if (req.body.tags) {
      try {
        postData.tags = JSON.parse(req.body.tags);
      } catch (e) {
        console.error('Error parsing tags:', e);
        postData.tags = [];
      }
    }

    if (req.file) {
      postData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
    }

    const post = new Post(postData);
    const savedPost = await post.save();
    
    res.status(201).json({
      ...savedPost.toObject(),
      image: savedPost.image ? `/api/posts/${savedPost._id}/image` : null
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

// Update in the UPDATE post route (PUT /:id)
router.put('/:id', authMiddleware, upload.single('image'), async (req: Request, res: Response) => {
  try {
    const postData: any = {
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content,
      category: req.body.category || '',  // Handle category
    };

    // Handle tags
    if (req.body.tags) {
      try {
        postData.tags = JSON.parse(req.body.tags);
      } catch (e) {
        console.error('Error parsing tags:', e);
        postData.tags = [];
      }
    }

    // If a new image is uploaded, update the image data
    if (req.file) {
      postData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
    } else if (req.body.keepOldImage !== 'true') {
      // If no new image and not keeping old image, remove the image
      postData.image = null;
    }

    // Use $set to explicitly set or unset the image field
    const updateOperation = req.file || req.body.keepOldImage !== 'true'
      ? { $set: postData }
      : { $set: { ...postData }, $unset: { image: "" } };

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      updateOperation,
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({
      ...post.toObject(),
      image: post.image ? `/api/posts/${post._id}/image` : null
    });
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Error updating post' });
  }
});


// Exporting a post
router.get('/:id/export', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Create a zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Compression level
    });

    // Set the content disposition and type
    res.attachment(`post-${post._id}.zip`);
    res.setHeader('Content-Type', 'application/zip');

    // Pipe the archive to the response
    archive.pipe(res);

    // Add post data as JSON
    const postData = {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags,
      date: post.date
    };
    archive.append(JSON.stringify(postData, null, 2), { name: 'post.json' });

    // If there's an image, add it to the archive
    if (post.image && post.image.data) {
      const imageExtension = post.image.contentType.split('/')[1] || 'jpg';
      archive.append(post.image.data, { name: `image.${imageExtension}` });
    }

    archive.finalize();

  } catch (err) {
    console.error('Export error:', err);
    res.status(500).json({ message: 'Error exporting post' });
  }
});

// Add a new route for importing posts
router.post('/import', upload.single('zipFile'), async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const tempDir = path.join(os.tmpdir(), `import-${Date.now()}`);
  try {
    // Save the uploaded zip file
    const zipPath = path.join(tempDir, 'import.zip');
    await fs.mkdir(tempDir, { recursive: true });
    await fs.writeFile(zipPath, req.file.buffer);

    // Extract the zip file
    await extract(zipPath, { dir: tempDir });

    // Read the post data
    const postDataRaw = await fs.readFile(path.join(tempDir, 'post.json'), 'utf8');
    const postData = JSON.parse(postDataRaw);

    // Create new post data
    const newPostData: any = {
      title: postData.title,
      excerpt: postData.excerpt,
      content: postData.content,
      category: postData.category,
      tags: postData.tags || []
    };

    // Check if there's an image
    try {
      const imageFiles = await fs.readdir(tempDir);
      const imageFile = imageFiles.find(f => f.startsWith('image.'));
      if (imageFile) {
        const imageBuffer = await fs.readFile(path.join(tempDir, imageFile));
        const contentType = `image/${path.extname(imageFile).substring(1)}`;
        newPostData.image = {
          data: imageBuffer,
          contentType: contentType
        };
      }
    } catch (err) {
      console.error('Error processing image:', err);
    }

    // Create the new post
    const post = new Post(newPostData);
    const savedPost = await post.save();

    // Clean up
    await fs.rm(tempDir, { recursive: true });

    res.status(201).json({
      ...savedPost.toObject(),
      image: savedPost.image ? `/api/posts/${savedPost._id}/image` : null
    });

  } catch (err) {
    console.error('Import error:', err);
    // Clean up on error
    try {
      await fs.rm(tempDir, { recursive: true });
    } catch (cleanupErr) {
      console.error('Cleanup error:', cleanupErr);
    }
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred during import' });
    }
  }
});

export default router;