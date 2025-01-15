import React from "react";

interface ImageUploadProps {
  imagePreview: string | null;
  onImageClick: () => void;
  onRemoveImage: (e: React.MouseEvent) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  imagePreview,
  onImageClick,
  onRemoveImage,
}) => {
  return (
    <div
      className="image-drop-zone rounded-lg p-4 text-center cursor-pointer"
      onClick={onImageClick}
    >
      {imagePreview ? (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-h-48 mx-auto rounded"
          />
          <button
            type="button"
            onClick={onRemoveImage}
            className="absolute top-2 right-2 bg-red-500/80 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="text-gray-400">
          <i className="fas fa-cloud-upload-alt text-3xl mb-2"></i>
          <p>Click to upload image</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
