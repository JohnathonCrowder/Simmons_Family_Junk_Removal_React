import React, { useState, useEffect } from "react";
import { getPosts, Post } from "../../api/posts";
import BlogHero from "./components/BlogHero";
import SearchAndFilters from "./components/SearchAndFilters";
import FeaturedArticle from "./components/FeaturedArticle";
import ArticleGrid from "./components/ArticleGrid";
import NewsletterSection from "./components/NewsletterSection";

// Extending the Post interface to include tags
interface ExtendedPost extends Post {
  tags?: string[];
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<ExtendedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "featured" | "latest" | "popular"
  >("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Safely collect all tags
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (post.tags || []).includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const [featuredPost, ...remainingPosts] = filteredPosts;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 relative">
          <div className="w-full h-full border-4 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neon-blue">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <BlogHero />
      <div className="container mx-auto px-4">
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          allTags={allTags}
        />

        {featuredPost && <FeaturedArticle post={featuredPost} />}

        <ArticleGrid posts={remainingPosts} />

        <NewsletterSection />
      </div>
    </div>
  );
};

export default BlogPage;
