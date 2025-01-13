import React from "react";

interface ShareButtonsProps {
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const shareUrl = window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      platform: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877f2]",
    },
    {
      platform: "twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#1da1f2]",
    },
    {
      platform: "linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0a66c2]",
    },
  ];

  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-gray-600 font-medium">Share this article:</span>
      <div className="flex gap-2">
        {shareLinks.map(({ platform, url, color }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 ${color} text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`}
          >
            <i className={`fab fa-${platform}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareButtons;
