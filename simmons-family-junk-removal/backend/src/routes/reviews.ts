import express from 'express';
import Review from '../models/Review'; // Make sure this exists
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Create a new review (protected route)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, review, city, reviewSite } = req.body;
    const newReview = new Review({
      name,
      review,
      city,
      reviewSite
    });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: 'Error creating review' });
  }
});

// Delete all reviews (protected route)
router.delete('/all', authMiddleware, async (req, res) => {
  try {
    await Review.deleteMany({});
    res.json({ message: 'All reviews deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting reviews' });
  }
});

export default router;