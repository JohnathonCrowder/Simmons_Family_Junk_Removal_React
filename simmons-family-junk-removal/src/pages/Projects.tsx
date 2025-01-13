import React, { Suspense } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

// Lazy load components
const ProjectShowcase = React.lazy(
  () => import("../components/Projects/ProjectShowcase")
);
const ProjectCategories = React.lazy(
  () => import("../components/Projects/ProjectCategories")
);
const ProjectsGrid = React.lazy(
  () => import("../components/Projects/ProjectsGrid")
);
const CTASection = React.lazy(() => import("../components/CTASection"));

// Loading fallback components
const ShowcaseSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl" />
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl" />
        </div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategoriesSkeleton: React.FC = () => (
  <div className="w-full bg-white py-8">
    <div className="container mx-auto px-4">
      <div className="animate-pulse">
        <div className="grid grid-cols-4 lg:grid-cols-7 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProjectsGridSkeleton: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-12">
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl" />
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CTASkeleton: React.FC = () => (
  <div className="w-full bg-gray-50 py-16">
    <div className="animate-pulse">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8" />
        <div className="h-12 bg-gray-200 rounded-xl w-48 mx-auto" />
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  return (
    <div className="projects-page">
      <PageHero
        title={
          <>
            Our Transformation <br />
            <span className="text-blue-300">Gallery</span>
          </>
        }
        subtitle="See the difference we make with our before and after transformations"
        primaryButtonText="Get a Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<ShowcaseSkeleton />}>
          <ProjectShowcase />
        </Suspense>

        <Suspense fallback={<CategoriesSkeleton />}>
          <ProjectCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </Suspense>

        <Suspense fallback={<ProjectsGridSkeleton />}>
          <ProjectsGrid selectedCategory={selectedCategory} />
        </Suspense>

        <Suspense fallback={<CTASkeleton />}>
          <CTASection
            title="Ready to Transform Your Space?"
            description="Let us help you clear the clutter and create a clean, organized environment."
            primaryButtonText="Get Your Free Quote"
            primaryButtonLink="/contact"
          />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default Projects;
