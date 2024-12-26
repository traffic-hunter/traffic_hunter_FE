'use client';

import React, { useEffect, useRef, useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null); // 메뉴 컨테이너에 대한 ref

  // 외부 클릭 감지 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // 외부 클릭 시 메뉴 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div
          className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md"
          ref={menuRef}
        >
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
