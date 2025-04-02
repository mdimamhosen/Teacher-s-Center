"use client";

import Image from "next/image";
import { useState } from "react";
import { GiClassicalKnowledge } from "react-icons/gi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0   bg-opacity-20 backdrop-blur-md flex justify-center items-center p-4 z-50">
      <div className="bg-gray-400 text-gray-950 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-100 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// ✅ Updated function to close the modal after submission
const handleSubmit = (e: React.FormEvent, closeModal: () => void) => {
  e.preventDefault();
  console.log("Form submitted");
  closeModal(); // Close the modal after submission
};

const CourseActions = () => {
  const [isAddTAModalOpen, setAddTAModalOpen] = useState(false);
  const [isTakeClassModalOpen, setTakeClassModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        {/* Take Class Button */}
        <button
          className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={() => setTakeClassModalOpen(true)}
        >
          <GiClassicalKnowledge /> Take Class
        </button>

        {/* Add TA Button */}
        <button
          className="bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={() => setAddTAModalOpen(true)}
        >
          <Image
            width={24}
            height={24}
            src="https://i.postimg.cc/Kv7pntC9/icons8-person-80.png"
            alt="TA"
            className="w-6 h-6 rounded-full"
          />
          Add TA
        </button>

        {/* Add TA Modal */}
        <Modal
          isOpen={isAddTAModalOpen}
          onClose={() => setAddTAModalOpen(false)}
          title="Add Teaching Assistant"
        >
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e, () => setAddTAModalOpen(false))}
          >
            <input
              type="text"
              placeholder="TA Name"
              className="border border-gray-200 p-2 rounded-md w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="TA Email"
              className="border border-gray-200 p-2 rounded-md w-full focus:outline-none"
            />
            <select className="border border-gray-200 p-2 rounded-md w-full focus:outline-none">
              <option value="">Select Role</option>
              <option value="assistant">Assistant</option>
              <option value="moderator">Moderator</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                type="submit"
                className="bg-gray-950 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>

        {/* Take Class Modal */}
        <Modal
          isOpen={isTakeClassModalOpen}
          onClose={() => setTakeClassModalOpen(false)}
          title="Schedule a Class"
        >
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) =>
              handleSubmit(e, () => setTakeClassModalOpen(false))
            }
          >
            <input
              type="text"
              placeholder="Class Title"
              className="border border-gray-200 p-2 rounded-md w-full focus:outline-none"
            />
            <input
              type="date"
              className="border border-gray-200 p-2 rounded-md w-full focus:outline-none"
            />
            <textarea
              placeholder="Class Description"
              className="border border-gray-200 p-2 rounded-md w-full h-24 focus:outline-none"
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>{" "}
    </>
  );
};

export default CourseActions;
