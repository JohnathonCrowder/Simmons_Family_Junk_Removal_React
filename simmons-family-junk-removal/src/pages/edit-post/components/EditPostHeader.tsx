import React from "react";

const EditPostHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
        Edit Post
      </h1>
    </div>
  );
};

export default EditPostHeader;
