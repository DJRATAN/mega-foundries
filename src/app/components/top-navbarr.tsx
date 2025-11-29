'use client'

import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const topMenuItems = [
  { label: 'Government Affairs', href: '/government-affairs' },
  { label: 'Acquisitions', href: '/acquisitions' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'HR', href: '/hr' },
  { label: 'Mega Foundation', href: '/mega-foundation' },
  { label: 'Metal Price Index', href: '/materials' },
];

const TopNavbarr = () => {
  return (
    <div className='w-full border-t border-gray-100'>
      <nav className="bg-neutral-800 text-neutral-200 w-full shadow-md">
         
        <div className="w-full px-4 sm:px-6 lg:px-10">
           
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center min-h-9 py-2 sm:py-0">
            
            {/* Left Side (Currently empty/commented out in your code) */}
            {/* Keeping this div ensures 'justify-between' pushes the links to the right on desktop */}
            <div className="hidden sm:flex items-center space-x-4">
               {/* Uncomment here if you ever need the left icons back */}
            </div>

            {/* Right Side Links */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 gap-y-2 sm:gap-6">
              {topMenuItems.map((item) => (
                <Link 
                  className='text-[11px] hover:text-[#cc2221] transition-colors whitespace-nowrap'
                  key={item.label} 
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbarr