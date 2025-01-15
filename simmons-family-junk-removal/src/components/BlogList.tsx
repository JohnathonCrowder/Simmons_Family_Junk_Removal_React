import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts, Post } from "../api/posts";
import { BASE_URL } from "@/utils/config";

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center py-10">{error}</div>;

  if (posts.length === 0)
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 mb-4">No posts found.</p>
        <Link
          to="/create"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Your First Post
        </Link>
      </div>
    );

  const [featuredPost, ...regularPosts] = posts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Post
          </h2>
          <Link to={`/post/${featuredPost._id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              {featuredPost.image && (
                <div className="h-72 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {new Date(featuredPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">{featuredPost.excerpt}</p>
                <div className="mt-4 text-blue-600 hover:text-blue-800">
                  Read more →
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Regular Posts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <Link key={post._id} to={`/post/${post._id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105">
              {post.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${BASE_URL}${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 hover:text-blue-800">
                  Read more →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Create Post CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/create"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
