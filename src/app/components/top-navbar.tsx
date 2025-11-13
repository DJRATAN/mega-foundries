
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const topMenuItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Our Products', href: '#' },
  { label: 'Contact Us', href: '#' },
];
const TopNavbar = () => {
  return (
    <div>
      <nav className="bg-neutral-800 text-neutral-200 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex justify-between items-stretch h-[36px]">

            <div className="flex space-x-1 gap-6 hover: sm:space-x-4 items-center">
              {topMenuItems.map((item) => (
                <Link className='text-[11px] hover:text-[#cc2221] transition-colors'
                  key={item.label} href={item.href}>{item.label}</Link>))}
            </div>

            <div className="flex items-center space-x-1 sm:space-x-4">

              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>English-USD  <ChevronDown className="w-3 h-3" /></Link>
              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>Country  <ChevronDown className="w-3 h-3" /></Link>

              <div className="flex space-x-0.5 ml-2 gap-2">
                <Link href={'/'} className='p-1 border-1 rounded-2xl'><Linkedin className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border-1 rounded-2xl'><Facebook className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border-1 rounded-2xl'><Instagram className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border-1 rounded-2xl'><Twitter className='w-3 h-3' /></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar
