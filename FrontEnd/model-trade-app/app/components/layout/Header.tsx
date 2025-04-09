// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryMenu from './navigation/CategoryMenu';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý tìm kiếm
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="border-b border-gray-200 w-full ">
      {/* Top Bar */}
      <div className="bg-white py-2 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="flex items-start pl-0">
            <div className="relative h-8 w-32">
            <Image 
            src="https://d1gt5dppxgb6oq.cloudfront.net/topimg/New_Toppage_Com/hljLogo.png" 
            alt="Logo" 
            width={128} 
            height={32} 
            className="h-8 w-auto "
            />
            </div>
          </Link>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mr-22">
              <input
                type="text"
                placeholder="search entire store here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-900 rounded px-3  text-sm w-150 h-10"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-1 rounded"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Login Link */}
            <Link href="/login" className="text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </Link>

            {/* Cart Link */}
            <Link href="/cart" className="text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-700 text-white">
        <div className="container h-8  flex justify-between items-center ">
            <CategoryMenu/>
          <div className="container mx-auto px-4 flex  space-x-6 ">
            {/* <button className="text-sm font-medium flex items-center whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Category Menu
            </button> */}
            <Link href="/newsletter" className="text-sm font-medium whitespace-nowrap ">Join Our Newsletter</Link>
            <Link href="/how-to" className="text-sm font-medium whitespace-nowrap">How to Use It</Link>
            <Link href="/warehouse" className="text-sm font-medium whitespace-nowrap">What's Private Warehouse?</Link>
            <Link href="/help" className="text-sm font-medium whitespace-nowrap">Help Center</Link>
            <Link href="/wishlist" className="text-sm font-medium whitespace-nowrap">
              Wish List
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
// components/layout/Header.tsx
