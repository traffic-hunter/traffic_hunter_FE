'use client';

import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1 group"
      >
        <div
          className={`h-1 w-8 bg-black rounded transform transition duration-300`}
        ></div>
        <div
          className={`h-1 w-8 bg-black rounded transition duration-300`}
        ></div>
        <div
          className={`h-1 w-8 bg-black rounded transform transition duration-300`}
        ></div>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Menu 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Menu 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Menu 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
