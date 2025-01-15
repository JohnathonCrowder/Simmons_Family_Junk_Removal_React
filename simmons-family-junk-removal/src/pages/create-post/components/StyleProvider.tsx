import React from "react";

const StyleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <style>
        {`
          .glass {
            background: rgba(26, 26, 47, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(33, 150, 243, 0.1);
          }

          .glass-input {
            background: rgba(26, 26, 47, 0.3);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(33, 150, 243, 0.2);
            transition: all 0.3s ease;
          }

          .glass-input:focus {
            background: rgba(26, 26, 47, 0.5);
            border-color: rgba(33, 150, 243, 0.5);
            box-shadow: 0 0 15px rgba(33, 150, 243, 0.2);
          }

          .image-drop-zone {
            border: 2px dashed rgba(33, 150, 243, 0.3);
            transition: all 0.3s ease;
          }

          .image-drop-zone:hover {
            border-color: rgba(33, 150, 243, 0.5);
            background: rgba(33, 150, 243, 0.1);
          }

          .tag {
            animation: tagPop 0.3s ease-out;
          }

          @keyframes tagPop {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      {children}
    </>
  );
};

export default StyleProvider;
