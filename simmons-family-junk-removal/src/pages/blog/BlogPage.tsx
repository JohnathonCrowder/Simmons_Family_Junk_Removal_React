import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { getPosts, Post } from "../../api/posts";

// Lazy load components
const BlogHero = React.lazy(() => import("./components/BlogHero"));
const SearchAndFilters = React.lazy(
  () => import("./components/SearchAndFilters")
);
const FeaturedPost = React.lazy(() => import("./components/FeaturedPost"));
const BlogGrid = React.lazy(() => import("./components/BlogGrid"));
const NewsletterSection = React.lazy(
  () => import("./components/NewsletterSection")
);

// Skeleton components
const HeroSkeleton: React.FC = () => (
  <div className="max-w-4xl mx-auto text-center mb-16">
    <div className="animate-pulse">
      <div className="h-14 bg-white/20 rounded-lg w-3/4 mx-auto mb-6"></div>
      <div className="h-6 bg-white/20 rounded-lg w-1/2 mx-auto"></div>
    </div>
  </div>
);

const SearchFiltersSkeleton: React.FC = () => (
  <div className="max-w-6xl mx-auto mb-12">
    <div className="animate-pulse">
      <div className="h-14 bg-white/20 rounded-lg mb-8"></div>
      <div className="flex flex-wrap justify-center gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-white/20 rounded-full"></div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedPostSkeleton: React.FC = () => (
  <div className="animate-pulse mb-12">
    <div className="bg-white/10 rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="h-72 bg-white/20"></div>
        <div className="p-8">
          <div className="h-6 bg-white/20 rounded w-1/4 mb-6"></div>
          <div className="h-10 bg-white/20 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-full mb-3"></div>
          <div className="h-4 bg-white/20 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const BlogGridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="animate-pulse h-full">
        <div className="bg-white/10 rounded-xl h-full flex flex-col">
          <div className="h-48 bg-white/20"></div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-auto">
              <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-2/3"></div>
            </div>
            <div className="h-4 bg-white/20 rounded w-full mt-4 pt-4"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const NewsletterSkeleton: React.FC = () => (
  <div className="animate-pulse max-w-4xl mx-auto mt-20">
    <div className="bg-white/10 rounded-2xl p-8 md:p-12">
      <div className="h-8 bg-white/20 rounded w-1/2 mx-auto mb-4"></div>
      <div className="h-4 bg-white/20 rounded w-2/3 mx-auto mb-8"></div>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <div className="h-12 bg-white/20 rounded-lg flex-grow"></div>
        <div className="h-12 bg-white/20 rounded-lg w-32"></div>
      </div>
    </div>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
      <i className="fas fa-exclamation-circle text-4xl text-yellow-400 mb-4"></i>
      <h2 className="text-2xl font-bold mb-4">Oops!</h2>
      <p>{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
    <div className="relative w-20 h-20">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-white/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories
  const categories = [
    "all",
    ...new Set(posts.map((post) => post.category || "uncategorized")),
  ];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  const [featuredPost, ...regularPosts] = filteredPosts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Suspense fallback={<HeroSkeleton />}>
          <BlogHero />
        </Suspense>

        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchAndFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </Suspense>

        {loading ? (
          <>
            <FeaturedPostSkeleton />
            <BlogGridSkeleton />
          </>
        ) : (
          <>
            {featuredPost && (
              <Suspense fallback={<FeaturedPostSkeleton />}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FeaturedPost post={featuredPost} />
                </motion.div>
              </Suspense>
            )}

            <Suspense fallback={<BlogGridSkeleton />}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <BlogGrid posts={regularPosts} />
              </motion.div>
            </Suspense>
          </>
        )}

        <Suspense fallback={<NewsletterSkeleton />}>
          <NewsletterSection />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPage;
