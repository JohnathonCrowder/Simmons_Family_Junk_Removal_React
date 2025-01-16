import React, { useState, useEffect, Suspense } from "react";
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

// Skeleton components for loading states
const HeroSkeleton: React.FC = () => (
  <div className="max-w-4xl mx-auto text-center mb-16">
    <div className="animate-pulse">
      <div className="h-12 bg-white/20 rounded-lg w-3/4 mx-auto mb-4"></div>
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
    <div className="bg-white/10 rounded-xl h-96"></div>
  </div>
);

const BlogGridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-white/10 rounded-xl">
          <div className="h-48 bg-white/20 rounded-t-xl"></div>
          <div className="p-6">
            <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-white/20 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-2/3"></div>
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
      <div className="h-12 bg-white/20 rounded-lg max-w-md mx-auto"></div>
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
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch posts");
      setLoading(false);
    }
  };

  const categories = [
    "all",
    ...new Set(posts.map((post) => post.category || "uncategorized")),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
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
                <FeaturedPost post={featuredPost} />
              </Suspense>
            )}

            <Suspense fallback={<BlogGridSkeleton />}>
              <BlogGrid posts={regularPosts} />
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
