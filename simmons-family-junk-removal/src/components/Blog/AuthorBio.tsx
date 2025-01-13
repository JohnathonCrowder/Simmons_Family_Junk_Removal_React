import React from "react";
import { motion } from "framer-motion";
import { Author } from "../../types/blog";

interface AuthorBioProps {
  author: Author;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-6">
        <img
          src={author.image}
          alt={author.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
        <p className="text-blue-600">{author.role}</p>
      </div>

      <p className="text-gray-600 mb-6">{author.bio}</p>

      <div className="space-y-3 mb-6">
        {author.credentials.map((credential, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <i className="fas fa-check text-blue-600 mr-2" />
            <span className="text-sm">{credential}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        {Object.entries(author.social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            <i className={`fab fa-${platform}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorBio;
