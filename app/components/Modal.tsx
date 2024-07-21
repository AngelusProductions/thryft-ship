import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, onSubmit, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] max-w-full text-center">
        {children}
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#565BD7] rounded mr-2 border-[2px] border-[#565BD7]"
          >
            Cancel and Edit
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 text-white rounded bg-[#565BD7]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
