import React from "react";
import ReactMarkdown from "react-markdown";
import { Post } from "../../../api/posts";

const PostContent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="prose max-w-none prose-blue">
      <style jsx>{`
        .prose h2 {
          color: theme("colors.blue.900");
        }
        .prose h3 {
          color: theme("colors.blue.800");
        }
        .prose a {
          color: theme("colors.blue.600");
        }
        .prose blockquote {
          border-left-color: theme("colors.yellow.400");
          background-color: theme("colors.yellow.50");
        }
      `}</style>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default PostContent;
