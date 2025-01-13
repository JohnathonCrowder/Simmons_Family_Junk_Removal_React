import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import blogData from "../data/blogPosts.json";
import RelatedPosts from "../components/Blog/RelatedPosts";
import AuthorBio from "../components/Blog/AuthorBio";
import ShareButtons from "../components/Blog/ShareButtons";

// Custom components for markdown rendering
const MarkdownComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mb-6 text-gray-900" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-bold mb-2 mt-4 text-gray-900" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 ml-4 list-disc list-outside text-gray-700" {...props} />
  ),
  ol: (props: any) => (
    <ol
      className="mb-4 ml-4 list-decimal list-outside text-gray-700"
      {...props}
    />
  ),
  li: (props: any) => <li className="mb-2 leading-relaxed" {...props} />,
  strong: (props: any) => (
    <strong className="font-bold text-gray-900" {...props} />
  ),
  em: (props: any) => <em className="italic" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 rounded px-2 py-1 text-sm text-gray-800"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="my-8 border-gray-200" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      {...props}
    />
  ),
};

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the current post
  const post = blogData.posts.find((post) => post.slug === slug);

  // Get related posts (same category, excluding current post)
  const relatedPosts = post
    ? blogData.posts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];

  // If post not found, redirect to blog page
  React.useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6"
            >
              <i className="fas fa-arrow-left mr-2" />
              Back to Blog
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-300 gap-6">
                <div className="flex items-center">
                  <img
                    src={blogData.author.image}
                    alt={blogData.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-white">{post.author}</div>
                    <div className="text-sm">{post.authorRole}</div>
                  </div>
                </div>
                <div className="text-sm">
                  <i className="far fa-calendar mr-2" />
                  {post.date}
                </div>
                <div className="text-sm">
                  <i className="far fa-clock mr-2" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Lead Paragraph */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Markdown Content */}
              <div className="prose prose-lg prose-blue max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={MarkdownComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <ShareButtons title={post.title} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Author Bio */}
            <AuthorBio author={blogData.author} />

            {/* Table of Contents could go here */}
          </motion.div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
