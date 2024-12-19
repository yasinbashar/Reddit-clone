"use client";

import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import { FaUser, FaBullhorn, FaShoppingCart, FaEllipsisH } from "react-icons/fa";
import MainFeed from "./MainFeed";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 flex items-center">
            <div className="flex items-center">
              <button
                className="p-1 hover:bg-gray-100 rounded-md md:hidden mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo */}
              <div className="flex items-start pl-0">
                <img
                  src="https://logos-world.net/wp-content/uploads/2023/12/Reddit-Logo.png"
                  alt="Reddit Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>

            <div
              className={`flex-1 mx-4 relative ${isSearchFocused ? "bg-white shadow-md" : ""} flex justify-center`}
            >
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search Reddit"
                  className="w-full max-w-md px-8 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-10 py-2 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 hidden sm:block">
                Get App
              </button>

              <button className="px-6 py-2 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600">
                Log In
              </button>

              <div className="relative">
                <button
                  className="p-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200"
                  onClick={toggleDropdown}
                >
                  <FaEllipsisH size={18} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaUser className="mr-3 text-blue-500" />
                        <span>Login</span>
                      </li>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaBullhorn className="mr-3 text-green-500" />
                        <span>Advertise on Reddit</span>
                      </li>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaShoppingCart className="mr-3 text-yellow-500" />
                        <span>Shop Collectible Avatars</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex pt-12 w-full">
        {/* Sidebar */}
        <div className="w-full md:w-3/12 bg-white border-r border-gray-200 p-4 hidden md:block">
          <SidebarContent />
        </div>

        {/* Main Feed */}
        <div className="w-full md:w-6/12 bg-gray-100 p-4">
          <h2>Main Feed</h2>
          <MainFeed post={undefined}/>
        </div>

        {/* Right Section (Popular Communities) */}
        <div className="w-full md:w-3/12 bg-white border-l border-gray-200 p-4 hidden md:block">
          <h2>Popular Communities</h2>
          {/* Your right section content goes here */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="w-64 h-full bg-white overflow-y-auto p-4 z-50">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
