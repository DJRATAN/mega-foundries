'use client'

import { Button } from '@/components/ui/button';
import { BookAIcon, BookCopy, ChevronDown, CirclePower, FireExtinguisherIcon, Menu, Power, Search, User, UserCheck2Icon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const topMenuItems = [
    { label: 'Became a', href: '#', content: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', content: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', content: 'Sign In/Register', icon: User }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full relative z-40">
            <header className="bg-white shadow-md sticky top-0">
                
                {/* === MAIN HEADER SECTION === */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

                        {/* 1. Logo & Mobile Toggle Row */}
                        <div className="w-full lg:w-auto flex justify-between items-center">
                            {/* Logo */}
                            <Link href={'/'} className="shrink-0">
                                <Image 
                                    src={'/Mega-foundries-logo.PNG'} 
                                    alt='Logo' 
                                    height={60} 
                                    width={60} 
                                    className="object-contain h-12 w-12 lg:h-[60px] lg:w-[60px]"
                                />
                            </Link>

                            {/* Mobile Menu Button (Hidden on Desktop) */}
                            <button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-neutral-600 hover:text-[#cc2221] transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* 2. Search Bar Section */}
                        {/* On mobile: Full width. On desktop: Grows to fill space */}
                        <div className="w-full lg:grow lg:mx-8 flex justify-center">
                            <div className="w-full max-w-3xl flex items-center border border-red-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                                <div className="relative grow">
                                    <input
                                        type="text"
                                        placeholder="Enter a keyword to search products"
                                        className="w-full h-10 lg:h-12 pl-4 pr-10 text-sm lg:text-base text-neutral-700 focus:outline-none placeholder:text-neutral-400"
                                    />
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                                </div>
                                <Button
                                    // Note: Ensure you have 'bg-[#cc2221]' or similar defined if 'variant="newColor"' is custom
                                    className="h-10 lg:h-12 rounded-none px-4 lg:px-8 bg-[#cc2221] hover:bg-red-700 text-white font-semibold text-sm lg:text-lg"
                                > 
                                    <span className="hidden lg:inline">Search</span>
                                </Button>
                            </div>
                        </div>

                        {/* 3. Utility Links (Desktop) */}
                        {/* Hidden on mobile, Flex row on desktop */}
                        <div className="hidden lg:flex shrink-0 space-x-6">
                            {topMenuItems.map((item) => (
                                <Link className='flex items-center gap-2 group' key={item.label} href={item.href}>
                                    <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className='text-[10px] text-neutral-500 leading-tight'>{item.label}</p>
                                        <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === MOBILE MENU DROPDOWN (Utility Links) === */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-50 border-t border-neutral-200 px-4 py-4 shadow-inner space-y-4">
                        {topMenuItems.map((item) => (
                            <Link className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all' key={item.label} href={item.href}>
                                <div className='text-[#cc2221]'>
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <p className='text-xs text-neutral-500'>{item.label}</p>
                                    <p className='text-sm font-bold text-neutral-800'>{item.content}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* === SUB-HEADER (Categories & Info) === */}
                <div className="border-t border-neutral-100 bg-neutral-50/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                        
                        {/* Left Side: Categories */}
                        <div className='flex flex-wrap gap-4 text-xs text-neutral-600 font-medium'>
                            <div className='flex items-center gap-2 hover:text-[#cc2221] cursor-pointer transition-colors'>
                                <FireExtinguisherIcon className='h-3.5 w-3.5 text-[#cc2221]' /> 
                                Energy
                            </div>
                            <div className='flex items-center gap-2 hover:text-[#cc2221] cursor-pointer transition-colors'>
                                <Power className='h-3.5 w-3.5 text-[#cc2221]' /> 
                                Power Generation
                            </div>
                        </div>

                        {/* Right Side: View All */}
                        <div className="flex items-center">
                            <Link href="#" className='text-xs font-semibold text-neutral-700 flex items-center gap-2 hover:text-[#cc2221] transition-colors'>
                                <Menu className='h-3.5 w-3.5' /> 
                                View All Categories
                            </Link>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Navbar