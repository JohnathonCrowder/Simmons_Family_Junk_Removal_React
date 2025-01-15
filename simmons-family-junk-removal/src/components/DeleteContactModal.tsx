import React from "react";

interface DeleteContactModalProps {
  isOpen: boolean;
  name: string;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteContactModal: React.FC<DeleteContactModalProps> = ({
  isOpen,
  name,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
        <p className="text-gray-300 mb-6">
          Are you sure you want to delete the message from {name}? This action
          cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContactModal;
