import { Button } from '@/components/ui/button';
import { BookAIcon, BookCopy, ChevronDown, CirclePower, Facebook, FireExtinguisherIcon, Instagram, Linkedin, Menu, Power, Search, Twitter, User, UserCheck2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const topMenuItems = [
    { label: 'Became a', href: '#', cotent: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', cotent: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', cotent: 'Sign In/Register', icon: User }
];
const Navbar = () => {
    return (
        <div>
            <header className="bg-white shadow-md    sticky top-0  ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between md:space-y-0">

                    {/* 1. Logo Section */}
                    {/* //                 <LogoSection /> */}
                    <Link href={'/'}><Image src={'/logo.jpeg'} alt='Logo' height={100} width={100} /></Link>

                    {/* 2. Search Bar Section (Flex-grow ensures it takes available space) */}
                    <div className="w-full md:w-auto md:grow h-8 flex justify-center">
                        <div className="grow max-w-2xl flex items-center border border-red-300 rounded overflow-hidden shadow-lg">
                            <div className="relative grow">
                                <input
                                    type="text"
                                    placeholder="Enter a keyword to search products"
                                    // value={searchTerm}
                                    // onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full h-14 pl-4 pr-12 text-base text-neutral-700 focus:outline-none placeholder:text-neutral-400"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                            <Button
                                variant="newColor"
                                // onClick={handleSearch}
                                className="h-14 rounded-none px-8 text-lg font-semibold"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Search
                            </Button>
                        </div>

                    </div>

                    {/* 3. Utility Links Section */}
                    <div className="flex shrink-0 space-x-2 lg:space-x-6">

                        {topMenuItems.map((item) => (
                            <Link className='flex' key={item.label} href={item.href}>
                                <div className=''><item.icon size={32} /></div>
                                <div>
                                    <p className='text-[11px]'>{item.label}</p>
                                    <p className='text-[11px] font-bold'>{item.cotent}</p>
                                </div>
                            </Link>))}
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between    ">

                    {/* 1. Logo Section */}
                    {/* //                 <LogoSection /> */}
                    {/* <Link href={'/'}><Image src={'/logo.jpeg'} alt='Logo' height={100} width={100} /></Link> */}
                    <div className='gap-4 flex text-[11px]'> <p className={'flex gap-2'}><FireExtinguisherIcon className='h-3 w-3'/> Energy</p>
                        <p className={'flex gap-2'}><Power className='h-3 w-3'/> Power Generation</p></div>
                    {/* 2. Search Bar Section (Flex-grow ensures it takes available space) */}
                    <div className="w-full md:w-auto md:grow h-8 flex justify-center">

                    </div>

                    {/* 3. Utility Links Section */}
                    <div className="flex shrink-0 space-x-2 lg:space-x-6">

                        <p className='text-[11px] flex gap-2 align-center'> <Menu className='h-3 w-3'/> View All Categories</p>

                    </div>
                </div>
            </header >
        </div >
    )
}

export default Navbar




