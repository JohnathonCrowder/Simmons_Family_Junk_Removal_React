import React from "react";
import ReactMarkdown from "react-markdown";
import { Post } from "../../../api/posts";

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="p-6 md:p-8">
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostContent;
