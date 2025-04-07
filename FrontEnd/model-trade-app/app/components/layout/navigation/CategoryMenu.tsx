// components/navigation/CategoryMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Định nghĩa cấu trúc dữ liệu cho các mục menu
interface SubCategory {
  name: string;
  url: string;
}

interface Category {
  name: string;
  url: string;
  subCategories?: SubCategory[];
  isAdult?: boolean;
}

// Dữ liệu menu
const categories: Category[] = [
  {
    name: 'Gundam',
    url: '/gundam',
    subCategories: [
      { name: 'Gundam Specialty Page', url: '/gundam/specialty' },
    ],
  },
  {
    name: 'Sci-fi',
    url: '/sci-fi',
    subCategories: [
      { name: 'High Grade Kits', url: '/sci-fi/high-grade-kits' },
    ],
  },
  {
    name: 'Action Figures',
    url: '/action-figures',
    subCategories: [
      { name: 'Entry Grade Kits', url: '/action-figures/entry-grade-kits' },
    ],
  },
  {
    name: 'Anime',
    url: '/anime',
    subCategories: [
      { name: 'Real Grade Kits', url: '/anime/real-grade-kits' },
    ],
  },
  {
    name: 'Scale Models',
    url: '/scale-models',
    subCategories: [
      { name: 'Master Grade Kits', url: '/scale-models/master-grade-kits' },
    ],
  },
  {
    name: 'More',
    url: '/more',
    subCategories: [
      { name: 'Perfect Grade Kits', url: '/more/perfect-grade-kits' },
    ],
  },
  {
    name: '18+',
    url: '/adult',
    isAdult: true,
    subCategories: [
      { name: 'SD, BB, & CS Kits', url: '/adult/sd-bb-cs-kits' },
    ],
  },
];

// Danh sách các mục bên phải
const rightCategories: SubCategory[] = [
  { name: 'Other Kits & Accessories', url: '/other-kits' },
  { name: 'Figures', url: '/figures' },
  { name: 'Collectibles', url: '/collectibles' },
  { name: 'All Preorders', url: '/preorders' },
];

export default function CategoryMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Category Menu Button */}
      <button 
        onClick={toggleMenu}
        className="flex items-center text-white text-sm font-medium whitespace-nowrap focus:outline-none mr-24"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 ml-2 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Category Menu
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen  && (
        <div className=" absolute left-0  w-screen z-50  mt-1 animate-slide-in-left" style={{ maxWidth: '500px' }}>
          <div className="flex">
            {/* Left Column - Main Categories */}
            <div className="w-1/2 bg-white border border-gray-700 rounded-lg">
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className={`border-b ${category.isAdult ? 'text-red-500' : 'text-gray-700'}`}>
                    <Link 
                      href={category.url}
                      className="flex justify-between items-center px-4 py-3 hover:bg-gray-100"
                    >
                      <span>{category.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${category.isAdult ? 'text-red-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
                <li className="bg-red-500 text-white">
                  <Link 
                    href="/categories"
                    className="block px-4 py-3"
                  >
                    Browse All Categories
                  </Link>
                </li>
                {/* <li className="bg-gray-900 text-white py-10 px-4">
                  <Link href="/gundam" className="text-blue-300 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                    </svg>
                    https://www.hlj.com/gundam
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Right Column - Subcategories */}
            {/* <div className="w-1/2 bg-gray-800">
              <ul>
                {categories.map((category, index) => (
                  category.subCategories && category.subCategories.map((subCategory, subIndex) => (
                    <li key={`${index}-${subIndex}`} className="border-b border-gray-700">
                      <Link 
                        href={subCategory.url}
                        className="block px-4 py-3 text-white hover:bg-gray-700"
                      >
                        {subCategory.name}
                      </Link>
                    </li>
                  ))
                ))}
                {rightCategories.map((category, index) => (
                  <li key={`right-${index}`} className="border-b border-gray-700">
                    <Link 
                      href={category.url}
                      className="block px-4 py-3 text-white hover:bg-gray-700"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}