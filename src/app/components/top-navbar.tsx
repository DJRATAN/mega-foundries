'use client';
import React, { useState } from 'react';

 
const ChevronDown = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const MapPin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Search = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const ShoppingCart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.62h9.72a2 2 0 0 0 2-1.62L23 9H6"/></svg>;
const User = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

const Button = ({ children, variant = 'ghost', size = 'sm', className = '', ...props }) => (
  <button
    className={`
      inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
      ${size === 'sm' ? 'h-9 px-3' : 'h-10 px-4 py-2'}
      ${variant === 'ghost' ? 'hover:bg-neutral-700/50 hover:text-white' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

const DropdownMenu = ({ children, triggerContent, contentClassName = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => setIsOpen(!isOpen);

   const trigger = React.Children.toArray(triggerContent);

  return (
    <div className="relative inline-block text-left">
      {React.cloneElement(trigger[0], { onClick: handleToggle, 'aria-expanded': isOpen })}

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${contentClassName}`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({ children, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    role="menuitem"
  >
    {children}
  </a>
);

// --- NAVIGATION BAR COMPONENTS ---

const NavLink = ({ children, href = '#' }) => (
  <a href={href} className="text-sm font-medium text-neutral-200 hover:text-[#cc2221] transition-colors px-4 py-2 rounded-md">
    {children}
  </a>
);

const LanguageCountryDropdown = ({ icon: Icon, label, options }) => (
  <DropdownMenu
    triggerContent={
      <Button variant="ghost" className="flex items-center space-x-1 text-neutral-200 hover:text-white transition-colors">
        <Icon className="w-4 h-4" />
        <span className="hidden sm:inline">{label}</span>
        <ChevronDown className="w-3 h-3 ml-1" />
      </Button>
    }
  >
    {options.map((option) => (
      <DropdownMenuItem key={option} onClick={() => console.log('Selected:', option)}>
        {option}
      </DropdownMenuItem>
    ))}
  </DropdownMenu>
);

const IconButton = ({ icon: Icon, onClick }) => (
  <Button variant="ghost" size="sm" className="text-neutral-200 hover:bg-neutral-700/50 hover:text-white p-2 h-9 w-9" onClick={onClick}>
    <Icon className="w-5 h-5" />
  </Button>
);

// --- MAIN APP COMPONENT ---

const TopNavbar = () => {
  const languageOptions = ['English-USD', 'Spanish-EUR', 'French-CAD'];
  const countryOptions = ['United States', 'Canada', 'United Kingdom'];

  return (
    // Outer container for context and responsiveness
  
      <nav className="bg-neutral-800 text-neutral-200 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch h-[36px]">
            
            {/* Left/Center Links Section */}
            <div className="flex space-x-1 sm:space-x-4 items-center">
              <NavLink>Home</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>Our Products</NavLink>
              <NavLink>Contact Us</NavLink>
            </div>

            {/* Right Utilities Section */}
            <div className="flex items-center space-x-1 sm:space-x-4">
              
              {/* Language/Currency Dropdown */}
              <LanguageCountryDropdown
                icon={Globe}
                label="English-USD"
                options={languageOptions}
              />

              {/* Country Dropdown */}
              <LanguageCountryDropdown
                icon={MapPin}
                label="Country"
                options={countryOptions}
              />

              {/* Icon Buttons (Simulated Cart, Profile, Search) */}
              <div className="flex space-x-0.5 ml-2">
                <IconButton icon={User} onClick={() => console.log('Profile clicked')} />
                <IconButton icon={ShoppingCart} onClick={() => console.log('Cart clicked')} />
                <IconButton icon={Search} onClick={() => console.log('Search clicked')} />
              </div>
            </div>
          </div>
        </div>
      </nav>
 
 
  );
};

export default TopNavbar;