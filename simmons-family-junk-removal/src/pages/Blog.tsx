import React, { useState } from "react";
import blogData from "../data/blogPosts.json";
import BlogHero from "../components/Blog/BlogHero";
import FeaturedPost from "../components/Blog/FeaturedPost";
import BlogGrid from "../components/Blog/BlogGrid";
import CategoryFilter from "../components/Blog/CategoryFilter";
import NewsletterSignup from "../components/Blog/NewsletterSignup";

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { posts, categories } = blogData;

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = posts[0]; // First post is featured

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />

      <div className="container mx-auto px-4 py-16">
        <FeaturedPost post={featuredPost} />

        <div className="my-16">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <BlogGrid posts={filteredPosts} />

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
};

export default Blog;
