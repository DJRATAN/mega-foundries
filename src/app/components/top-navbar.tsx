'use client'

import { DropdownMenuDemo } from '@/components/dropdownMenu';
import { NavigationMenuDemo } from '@/components/navigationMenu';
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const topMenuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Products', href: '#' },
  { label: 'Contact Us', href: '/contact-us' },
];
const TopNavbar = () => {
  return (
    <div className='w-full '>
      <nav className="bg-neutral-800 text-neutral-200 w-full mx-auto  shadow-md">

        <div className="mx-auto px-4 sm:px-6 lg:px-30">
          <div className="flex justify-between items-stretch h-9">

            <div className="flex space-x-1 gap-6 hover: sm:space-x-4 items-center">
              {topMenuItems.map((item) => (
                <Link className='text-[11px] hover:text-[#cc2221] transition-colors' key={item.label} href={item.href}>{item.label}</Link>))}
            </div>
            {/* <Link className='text-[11px] hover:text-[#cc2221] transition-colors' href={'#'}  > <DropdownMenuDemo /></Link> */}
            {/* <Link className='text-[11px] hover:text-[#cc2221] transition-colors' href={'#'}  > <NavigationMenuDemo /></Link> */}
            <div className="flex items-center space-x-1 sm:space-x-4">

              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>English-USD  <ChevronDown className="w-3 h-3" /></Link>
              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>Country  <ChevronDown className="w-3 h-3" /></Link>

              <div className="flex space-x-0.5 ml-2 gap-2">
                <Link href={'/'} className='p-1 border rounded-2xl'><Linkedin className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl'><Facebook className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl'><Instagram className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl'><Twitter className='w-3 h-3' /></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar
