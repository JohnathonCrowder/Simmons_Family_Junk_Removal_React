import React from "react";

interface Author {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

interface AuthorBioProps {
  author: Author;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={author.image}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-1">
            {author.name}
          </h3>
          <p className="text-blue-600 mb-4">{author.role}</p>
          <p className="text-gray-700 mb-4">{author.bio}</p>

          <div className="space-y-2 mb-4">
            {author.credentials.map((credential, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <i className="fas fa-check text-blue-500 mr-2" />
                <span className="text-sm">{credential}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {Object.entries(author.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <i className={`fab fa-${platform} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
