import React from "react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-800">{excerpt}</p>
      <a
        href="#"
        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
      >
        Read more →
      </a>
    </article>
  );
};

export default BlogPost;
