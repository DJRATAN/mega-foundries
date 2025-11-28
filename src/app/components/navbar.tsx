'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    BookAIcon,
    ChevronDown,
    ChevronRight,
    FireExtinguisherIcon,
    Menu,
    Power,
    Search,
    User,
    UserCheck2Icon,
    X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// 1. UPDATED LOGIN OPTIONS (Added new vendor types)
const loginOptions = [
    { label: "Team Mega Login", href: "/login/team" },
    { label: "Engineers/Architect Login", href: "/login/engineer" },
    { label: "Customer Login", href: "/login/customer" },
    { label: "Logistics Login", href: "/login/logistics" },
    // New Additions:
    { label: "Foundries Login", href: "/login/foundry" },
    { label: "Forge Shops Login", href: "/login/forge" },
    { label: "Fabricators Login", href: "/login/fabricator" },
    { label: "Other Vendors Login", href: "/login/vendor" },
]

// 2. MARK THE LOGIN ITEM
const topMenuItems = [
    { label: 'Became a', href: '/sellerHomepage', content: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', content: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', content: 'Sign In/Register', icon: User, isLogin: true } // Added flag
];

const countryOptions = [
    { label: "USA", flag: "🇺🇸", id: "us" },
    { label: "Canada", flag: "🇨🇦", id: "ca" },
    { label: "Latin America", flag: "🇧🇷", id: "lat" },
    { label: "North America", flag: "🌎", id: "na" },
    { label: "Caribbean", flag: "🇯🇲", id: "car" },
    { label: "Europe", flag: "🇪🇺", id: "eu" },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])

    return (
        <div className="w-full relative z-40">
            <header className="bg-white shadow-md sticky top-0">

                {/* === MAIN HEADER SECTION === */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

                        {/* 1. Logo & Mobile Toggle Row */}
                        <div className="w-full lg:w-auto flex justify-between items-center">
                            {/* Logo */}
                            <Link href={'/'} className="shrink-0 pr-5">
                                <Image
                                    src={'/Mega-foundries-logo.PNG'}
                                    alt='Logo'
                                    height={100}
                                    width={100}
                                    className="object-contain h-12 w-12 lg:h-24 lg:w-24"
                                />
                            </Link>
                            
                            {/* --- COUNTRY DROPDOWN --- */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex w-32 items-center justify-center gap-1.5 text-[11px] hover:text-[#cc2221] transition-colors outline-none">
                                    <span className="text-lg">{selectedCountry.flag}</span>
                                    {selectedCountry.label}
                                    <ChevronDown className="w-3 h-3 opacity-50" />
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end" className="min-w-[120px]">
                                    {countryOptions.map((option) => (
                                        <DropdownMenuItem
                                            key={option.id}
                                            onClick={() => setSelectedCountry(option)}
                                            className="text-xs cursor-pointer gap-2"
                                        >
                                            <span className="text-lg">{option.flag}</span> {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Mobile Menu Button (Hidden on Desktop) */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-neutral-600 hover:text-[#cc2221] transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* 2. Search Bar Section */}
                        <div className="w-full pl-0 lg:pl-5 lg:grow lg:mx-8 flex justify-center">
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
                                    className="h-10 lg:h-12 rounded-none px-4 lg:px-8 bg-[#cc2221] hover:bg-red-700 text-white font-semibold text-sm lg:text-lg"
                                >
                                    <span className="hidden lg:inline">Search</span>
                                    <Search className="lg:hidden w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* 3. Utility Links (Desktop) */}
                        <div className="hidden lg:flex shrink-0 space-x-6">
                            {topMenuItems.map((item) => {
                                // === HANDLE LOGIN DROPDOWN ===
                                if (item.isLogin) {
                                    return (
                                        <DropdownMenu key={item.label}>
                                            <DropdownMenuTrigger className="flex items-center gap-2 group outline-none cursor-pointer">
                                                <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                                    <item.icon size={28} strokeWidth={1.5} />
                                                </div>
                                                <div className="flex flex-col justify-center text-left">
                                                    <p className='text-[10px] text-neutral-500 leading-tight'>{item.label}</p>
                                                    <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                                </div>
                                            </DropdownMenuTrigger>
                                            
                                            <DropdownMenuContent align="end" className="w-56 p-2 bg-white border border-gray-100 shadow-lg rounded-md">
                                                {loginOptions.map((opt) => (
                                                    <DropdownMenuItem key={opt.label} asChild>
                                                        <Link href={opt.href} className="cursor-pointer flex items-center gap-2 py-2 hover:bg-red-50 rounded px-2 group">
                                                            <ChevronRight className="w-4 h-4 text-[#cc2221] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            <span className="font-medium text-sm text-gray-700 group-hover:text-[#cc2221]">{opt.label}</span>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )
                                }

                                // === NORMAL LINKS ===
                                return (
                                    <Link className='flex items-center gap-2 group' key={item.label} href={item.href}>
                                        <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                            <item.icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className='text-[10px] text-neutral-500 leading-tight'>{item.label}</p>
                                            <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                        </div>
                                    </Link>
                                )
                            })}

                            <Link href={'/'} className="shrink-0 pl-4 pr-12">
                                <Image
                                    src={'/Canada-foundries-logo1.PNG'}
                                    alt='Logo'
                                    height={100}
                                    width={100}
                                    className="object-contain h-12 w-12 lg:h-24 lg:w-24"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* === MOBILE MENU (UPDATED) === */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-50 border-t border-neutral-200 px-4 py-4 shadow-inner space-y-4">
                        {topMenuItems.map((item) => (
                            <div key={item.label}>
                                {item.isLogin ? (
                                    // Mobile version: Expand login options directly
                                    <div className="space-y-2 bg-white p-2 rounded border border-gray-100">
                                        <div className='flex items-center gap-4 text-[#cc2221] mb-2'>
                                            <item.icon size={24} />
                                            <div>
                                                <p className='text-xs text-neutral-500'>{item.label}</p>
                                                <p className='text-sm font-bold'>Select Login Type:</p>
                                            </div>
                                        </div>
                                        <div className="pl-2 space-y-1">
                                            {loginOptions.map(opt => (
                                                <Link key={opt.label} href={opt.href} className="flex items-center gap-2 p-2 text-sm text-neutral-600 hover:text-[#cc2221] hover:bg-red-50 rounded">
                                                    <ChevronRight className="w-3 h-3" />
                                                    {opt.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Normal Mobile Links
                                    <Link className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all' href={item.href}>
                                        <div className='text-[#cc2221]'>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <p className='text-xs text-neutral-500'>{item.label}</p>
                                            <p className='text-sm font-bold text-neutral-800'>{item.content}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
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