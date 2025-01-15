import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById, getPosts, Post } from "../../api/posts";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostNavigation from "./components/PostNavigation";
import RelatedPosts from "./components/RelatedPosts";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

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
    return <LoadingSpinner />;
  }

  if (error || !post) {
    return <ErrorMessage error={error || "Post not found"} />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <style>
        {`
          .glass {
            background: rgba(26, 26, 47, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(33, 150, 243, 0.1);
          }

          .prose p {
            margin-bottom: 1.5rem;
          }

          .prose h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: theme('colors.neon.blue');
          }

          .prose h3 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: theme('colors.neon.purple');
          }

          .prose code {
            background: rgba(33, 150, 243, 0.1);
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
            font-family: monospace;
            color: theme('colors.neon.blue');
          }

          .prose pre {
            background: rgba(26, 26, 47, 0.7);
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-bottom: 1.5rem;
          }

          .prose blockquote {
            border-left: 4px solid theme('colors.neon.blue');
            padding-left: 1rem;
            margin-left: 0;
            margin-right: 0;
            font-style: italic;
            color: theme('colors.gray.400');
          }

          .prose ul, .prose ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }

          .prose li {
            margin-bottom: 0.5rem;
          }

          .prose img {
            border-radius: 0.5rem;
            margin: 2rem auto;
          }

          .prose a {
            color: theme('colors.neon.blue');
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .prose a:hover {
            color: theme('colors.neon.purple');
          }
        `}
      </style>

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto glass rounded-xl overflow-hidden">
          <PostHeader post={post} />
          <div className="px-4 md:px-8">
            <PostContent post={post} />
            {post.tags && post.tags.length > 0 && (
              <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full text-sm border border-neon-blue/30 hover:bg-neon-blue/20 transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <RelatedPosts currentPost={post} posts={allPosts} />
            <PostNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
