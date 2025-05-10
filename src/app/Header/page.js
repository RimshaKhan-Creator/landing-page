'use client';
import { useState } from 'react';
import { FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={120} height={40} priority />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-black font-medium">
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-red-500">Discover</a>

            {/* Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center space-x-1 hover:text-red-500">
                <span>Sounds</span>
                <MdKeyboardArrowDown />
              </div>
              {showDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sample Packs</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Genres</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-red-500">Auction Beats</a>
          </nav>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300" />

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FiUser className="text-xl cursor-pointer" />
            <FiSearch className="text-xl cursor-pointer" />
          </div>

          {/* CTA */}
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-black font-medium">
          <a href="#" className="block hover:text-red-500">Discover</a>

          {/* Dropdown inside mobile menu */}
          <div>
            <div className="flex items-center space-x-1">
              <span className="hover:text-red-500">Sounds</span>
              <MdKeyboardArrowDown />
            </div>
            <div className="ml-4 mt-1 space-y-1 text-sm text-gray-700">
              <a href="#" className="block hover:text-red-500">Sample Packs</a>
              <a href="#" className="block hover:text-red-500">Genres</a>
            </div>
          </div>

          <a href="#" className="block hover:text-red-500">Auction Beats</a>

          {/* Icons */}
          <div className="flex items-center space-x-4 pt-2">
            <FiUser className="text-xl cursor-pointer" />
            <FiSearch className="text-xl cursor-pointer" />
          </div>

          {/* CTA */}
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
