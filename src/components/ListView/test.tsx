import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="block bg-gray-300 text-gray-700 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
