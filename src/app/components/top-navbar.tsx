'use client'

import { useState } from 'react';
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Link from 'next/link';

const topMenuItems = [
  { label: 'OUR VALUES', href: '/our-values' },
  { label: 'HOME', href: '/' },
  { label: 'HISTORY', href: '/history' },
  { label: 'TRANSFORMATION', href: '/transformation' },
  { label: 'INNOVATIONS', href: '/innovations' },
  { label: 'MAKING HISTORY', href: '/making-history' },
  { label: 'ALWAYS FIRST', href: '/always-first' },
  { label: 'CONTACT', href: '/contact' },
];

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='w-full relative z-50'>
      <nav className="bg-neutral-800 text-neutral-200 w-full mx-auto shadow-md">
        
        {/* Corrected lg:px-30 to lg:px-8 or standard container usage */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-9">

            {/* --- DESKTOP: Left Menu Items --- */}
            {/* Added 'hidden lg:flex' to hide this long list on mobile */}
            <div className="hidden lg:flex space-x-1 gap-6 items-center">
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

            {/* --- MOBILE: Hamburger Button --- */}
            {/* Visible only on mobile/tablet (lg:hidden) */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-200 hover:text-[#cc2221] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="ml-3 text-xs font-bold tracking-wider">MENU</span>
            </div>

            {/* --- DESKTOP: Right Side Icons --- */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>
                English-USD <ChevronDown className="w-3 h-3" />
              </Link>
              <Link href={''} className='flex items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors'>
                Country <ChevronDown className="w-3 h-3" />
              </Link>

              <div className="flex space-x-2 ml-2">
                <Link href={'/'} className='p-1 border rounded-2xl hover:border-[#cc2221] hover:text-[#cc2221] transition-colors'><Linkedin className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl hover:border-[#cc2221] hover:text-[#cc2221] transition-colors'><Facebook className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl hover:border-[#cc2221] hover:text-[#cc2221] transition-colors'><Instagram className='w-3 h-3' /></Link>
                <Link href={'/'} className='p-1 border rounded-2xl hover:border-[#cc2221] hover:text-[#cc2221] transition-colors'><Twitter className='w-3 h-3' /></Link>
              </div>
            </div>

          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {/* Renders conditionally based on state */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-t border-neutral-700 absolute w-full left-0 top-9 shadow-xl py-4 px-4 flex flex-col gap-4">
            
            {/* Mobile Links Grid */}
            <div className="grid grid-cols-2 gap-3">
              {topMenuItems.map((item) => (
                <Link 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-xs text-neutral-300 hover:text-[#cc2221] transition-colors' 
                  key={item.label} 
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-[1px] bg-neutral-700 w-full my-1"></div>

            {/* Mobile Settings & Socials */}
            <div className="flex flex-col gap-3">
               <div className="flex justify-between">
                  <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#cc2221]'>English-USD <ChevronDown className="w-3 h-3" /></Link>
                  <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#cc2221]'>Country <ChevronDown className="w-3 h-3" /></Link>
               </div>
               
               <div className="flex gap-4 justify-start mt-2">
                  <Link href={'/'}><Linkedin className='w-4 h-4 hover:text-[#cc2221]' /></Link>
                  <Link href={'/'}><Facebook className='w-4 h-4 hover:text-[#cc2221]' /></Link>
                  <Link href={'/'}><Instagram className='w-4 h-4 hover:text-[#cc2221]' /></Link>
                  <Link href={'/'}><Twitter className='w-4 h-4 hover:text-[#cc2221]' /></Link>
               </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default TopNavbar