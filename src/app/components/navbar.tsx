'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Search = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>;
const User = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const Handshake = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17h2" /><path d="M10 20a2 2 0 0 1-2-2v-3a2 2 0 0 0-2-2H2" /><path d="m11 17-2-2c-2.42-2.42-1.35-7.55 3.51-12.41a2 2 0 0 1 2.83 2.83c-4.86 4.86-3.79 9.99-1.37 12.41l-2 2Z" /><path d="m15 11 2 2c2.42 2.42 1.35 7.55-3.51 12.41a2 2 0 0 1-2.83-2.83c4.86-4.86 3.79-9.99 1.37-12.41l2-2Z" /><path d="M13 7h-2" /></svg>;
const NotebookText = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-10 10-10 10 10 10 10-3 10-10 10-10-10-10-10Z" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M22 12h-2" /><path d="M4 12H2" /></svg>;
const CircleUser = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662C8.42 19.462 10.156 18.8 12 18.8c1.844 0 3.58 0.662 5 1.862" /></svg>;

const Button = ({ children, className = '', variant = 'default', ...props }) => (
    <button
        className={`
      inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2
      ${variant === 'destructive' ? 'bg-[#cc2221] text-white hover:bg-[#cc2221]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
      ${className}
    `}
        {...props}
    >
        {children}
    </button>
);


const LogoSection = () => (
    <div className="flex-shrink-0 text-left mr-8">
        <div className="flex items-end leading-none">
            {/* <Image src={'logo.png'} alt="Mega Foundries Logo" width={180} height={40} /> */}
            <div className="text-4xl font-extrabold text-[#cc2221]">Mega</div>
            <div className="text-4xl font-extrabold text-neutral-800 ml-1">Foundries</div>
        </div>
        <p className="text-xs text-neutral-600 tracking-wider mt-0.5">Power Generation · Energy · Oil & Gas</p>
    </div>
);

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="flex-grow max-w-2xl flex items-center border border-red-300 rounded overflow-hidden shadow-lg">
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Enter a keyword to search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-14 pl-4 pr-12 text-base text-neutral-700 focus:outline-none placeholder:text-neutral-400"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <Button
                variant="destructive"
                onClick={handleSearch}
                className="h-14 rounded-none px-8 text-lg font-semibold"
            >
                <Search className="w-5 h-5 mr-2" />
                Search
            </Button>
        </div>
    );
};

const UtilityLink = ({ icon: Icon, title, subtitle, className = '' }) => (
    <a
        href="#"
        onClick={() => console.log(`${title} clicked`)}
        className={`flex flex-col items-center justify-center p-2 text-center text-neutral-600 hover:text-red-600 transition-colors cursor-pointer min-w-[100px] ${className}`}
    >
        <div className="flex items-center space-x-1 mb-1">
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium leading-none">{title}</span>
        </div>
        <span className="text-xs text-neutral-500">{subtitle}</span>
    </a>
);

const ProfileLink = ({ icon: Icon, statusText, actionText, className = '' }) => (
    <a
        href="#"
        onClick={() => console.log(`${actionText} clicked`)}
        className={`flex flex-col items-center justify-center p-2 text-center text-neutral-600 hover:text-red-600 transition-colors cursor-pointer min-w-[110px] ${className}`}
    >
        <div className="flex items-center space-x-1 mb-1">
            <div className="relative">
                <Icon className="w-6 h-6" />
                {/* Mock Red Circle Indicator */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border border-white translate-x-1 -translate-y-1"></div>
            </div>
            <span className="text-sm font-medium leading-none">{statusText}</span>
        </div>
        <span className="text-xs text-neutral-500">{actionText}</span>
    </a>
);


// --- MAIN APP COMPONENT ---

const Navbar = () => {
    return (
        <header className="bg-white shadow-md    sticky top-0  ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                {/* 1. Logo Section */}
                <LogoSection />

                {/* 2. Search Bar Section (Flex-grow ensures it takes available space) */}
                <div className="w-full md:w-auto md:flex-grow flex justify-center">
                    <SearchBar />
                </div>

                {/* 3. Utility Links Section */}
                <div className="flex flex-shrink-0 space-x-2 lg:space-x-6">
                    <UtilityLink
                        icon={Handshake}
                        title="Become a"
                        subtitle="Supplier"
                    />
                    <UtilityLink
                        icon={NotebookText}
                        title="Request for"
                        subtitle="Quotations"
                    />
                    <ProfileLink
                        icon={CircleUser}
                        statusText="Welcome"
                        actionText="Sign In / Register"
                    />
                </div>
            </div>
        </header>

    );
};

export default Navbar;