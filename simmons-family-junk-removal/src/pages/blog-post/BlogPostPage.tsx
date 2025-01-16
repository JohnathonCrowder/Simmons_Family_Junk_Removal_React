import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { getPostById, getPosts, Post } from "../../api/posts";
import { BASE_URL } from "@/utils/config";
import AuthorBio from "./components/AuthorBio";

// Author information
const AUTHOR = {
  name: "Juan Simmons",
  role: "Owner & Lead Expert",
  image: "/images/juan-profile.jpg",
  bio: "With over 15 years of experience in professional junk removal and property cleanouts, I'm passionate about helping people reclaim their spaces. My approach combines practical expertise with a deep understanding of the emotional aspects of decluttering and organizing.",
  credentials: [
    "Licensed & Insured Professional",
    "Certified in Eco-Friendly Disposal Methods",
    "Specialized in Estate and Hoarding Cleanouts",
    "500+ Successful Projects Completed",
    "Member of the National Association of Professional Organizers",
  ],
  social: {
    facebook: "https://facebook.com/simmonsjunkremoval",
    instagram: "https://instagram.com/simmonsjunkremoval",
    linkedin: "https://linkedin.com/in/juansimmons",
  },
};

// Custom components for markdown rendering
const MarkdownComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mb-6 text-blue-900" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-blue-800" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold mb-3 mt-6 text-blue-700" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-bold mb-2 mt-4 text-blue-600" {...props} />
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
    <strong className="font-bold text-blue-900" {...props} />
  ),
  em: (props: any) => <em className="italic text-blue-800" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-yellow-400 pl-4 my-4 bg-yellow-50 py-2 text-gray-700 italic"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-blue-50 rounded px-2 py-1 text-sm text-blue-800"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-blue-900 text-white rounded-lg p-4 overflow-x-auto mb-4"
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
  img: (props: any) => (
    <img className="rounded-lg shadow-lg my-8 max-w-full mx-auto" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="px-6 py-3 bg-blue-50 text-left text-xs font-medium text-blue-800 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
      {...props}
    />
  ),
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [fetchedPost, fetchedPosts] = await Promise.all([
          getPostById(id!),
          getPosts(),
        ]);
        setPost(fetchedPost);
        setAllPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch post");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error || "Post not found"}</p>
          <Link
            to="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = allPosts
    .filter((p) => p._id !== post._id)
    .filter((p) => p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Post Header */}
          <div className="relative">
            {post.image && (
              <div className="relative h-[500px]">
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
            )}
            <div className="relative p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                {post.category && (
                  <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <i className="far fa-calendar mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <i className="far fa-clock mr-2" />5 min read
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={MarkdownComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-12">
                <AuthorBio author={AUTHOR} />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  to={`/post/${relatedPost._id}`}
                  className="group block bg-blue-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {relatedPost.image && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={`${BASE_URL}${relatedPost.image}`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-between max-w-6xl mx-auto"
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2" />
            Back to Blog
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;
