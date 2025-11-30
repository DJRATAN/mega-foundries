'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const products = [
    { label: 'Molded Gratings', href: "/" },
    { label: 'Pultruded Grating', href: "/" },
    { label: 'Dynaform Structural Shapes', href: "/" },
    { label: 'Dynarail/DynaRound Guardrail & Handrail Products', href: "/" },
    { label: 'Dynarail Ladder Products', href: "/" },
    { label: 'Stair Solutions', href: "/" },
    { label: 'Fiberglass Plate', href: "/" },
    { label: 'Work Platforms', href: "/" },
    { label: 'Accessories / Complementary Products', href: "/" },
    { label: 'Custom Pultrusions', href: "/" },
    { label: 'Metering Pump Stands', href: "/" },
    { label: 'Rooftop Safety Products', href: "/" },
    { label: 'Unique Product Solutions', href: "/" }
  ]
  const market = [
    { label: 'Market Solutions', href: "/" },
    { label: 'Architectural & Commercial', href: "/" },
    { label: 'Chemical', href: "/" },
    { label: 'Data Center Solutions', href: "/" },
    { label: 'Docks & Decking', href: "/" },
    { label: 'Food & Beverage', href: "/" },
    { label: 'General Manufacturing', href: "/" },
    { label: 'Metals & Mining', href: "/" },
    { label: 'Oil & Gas', href: "/" },
    { label: 'Pharmaceutical', href: "/" },
    { label: 'Pulp & Paper', href: "/" },
    { label: 'Recreational', href: "/" },
    { label: 'Technology', href: "/" },
    { label: 'Telecommunications', href: "/" },
    { label: 'Transportation', href: "/" },
    { label: 'Utilities & Power', href: "/" },
    { label: 'Water & Wastewater', href: "/" },
  ]
  const corporateLinks = [
    { label: 'Customer Service', href: "/" },
    { label: 'Accounts', href: "/" },
    { label: 'Awards', href: "/" },
    { label: 'Achievements', href: "/" },
    { label: 'Current Events', href: "/" },
    { label: 'Executive Committee', href: "/" },
    { label: 'Our Foundation', href: "/" },
    { label: 'Human Resources', href: "/" },
    { label: 'Media Management', href: "/" },
    { label: 'Mission & Vision', href: "/" },
    { label: 'Monthly Raffle', href: "/" },
    { label: 'Organizational Structure', href: "/" },
    { label: 'Scholarships', href: "/" },
    { label: 'Testimonials', href: "/" },
    { label: 'Our Milestones', href: "/" },
    { label: 'Industry News', href: "/" },
  ];

  const policiesLinks = [
    { label: 'Warranties', href: "/" },
    { label: 'Return Policy', href: "/" },
    { label: 'Product Liability', href: "/" },
    { label: 'Promotions', href: "/" },
    { label: 'Confidentiality', href: "/" },
    { label: 'Sustainability', href: "/" },
    { label: 'Government Policy', href: "/" },
    { label: 'Corporate Social Responsibility', href: "/" },
    { label: 'Credit Application', href: "/" },
    { label: 'Terms & Conditions', href: "/" },
    { label: 'Security & Maintenance', href: "/" },
    { label: 'Non Disclosure Agreement', href: "/" },
    { label: 'Insurances', href: "/" },
    { label: 'Complaints', href: "/" },
    { label: 'Privacy Policy', href: "/" },
    { label: 'Patents', href: "/" },
  ];

  const salesLinks = [
    { label: 'Pricing', href: "/" },
    { label: 'Exports', href: "/" },
    { label: 'Videos', href: "/" },
    { label: 'Trade Shows', href: "/" },
    { label: 'Sales Team', href: "/" },
    { label: 'Library', href: "/" },
    { label: 'Locations', href: "/" },
    { label: 'On going projects', href: "/" },
    { label: 'Interactive Catalogs', href: "/" },
    { label: 'Valuable sales tools', href: "/" },
    { label: 'Follow your order', href: "/" },
    { label: 'Request a Delivery', href: "/" },
    { label: 'Request for quote', href: "/" },
    { label: 'Digital Marketing', href: "/" },
    { label: 'Logistics', href: "/" },
    { label: 'Webinars', href: "/" },
  ];

  const productsLinks = [
    { label: 'Behive Grates', href: "/" },
    { label: 'Catch Basin Traps', href: "/" },
    { label: 'Cleanouts', href: "/" },
    { label: 'Curb Boxes', href: "/" },
    { label: 'Curb Inlets', href: "/" },
    { label: 'Frames & Covers', href: "/" },
    { label: 'Frames & Grates', href: "/" },
    { label: 'Manhole Covers', href: "/" },
    { label: 'Manhole Grates', href: "/" },
    { label: 'Paving Products', href: "/" },
    { label: 'Specialty Products', href: "/" },
    { label: 'Tree Grates', href: "/" },
    { label: 'Trench Grates', href: "/" },
    { label: 'Utility Castings', href: "/" },
    { label: 'Valve Boxes', href: "/" },
    { label: 'Water Works Products', href: "/" },
  ];

  const engineeringLinks = [
    { label: 'Submittals', href: "/" },
    { label: 'Data Sheets', href: "/" },
    { label: 'Engineers & Architects', href: "/" },
    { label: 'Customization', href: "/" },
    { label: 'Design Team', href: "/" },
    { label: 'Certifications', href: "/" },
    { label: 'Specifications', href: "/" },
    { label: 'Standards', href: "/" },
    { label: 'Get Digital with USF', href: "/" },
    { label: 'IT Department', href: "/" },
    { label: 'Case Studies', href: "/" },
    { label: 'Design & Innovations', href: "/" },
    { label: 'Product Approvals', href: "/" },
    { label: 'Quality Control', href: "/" },
    { label: 'Shop Drawings', href: "/" },
  ];
  const resourceCenter = [
    { label: 'Product Brochures', href: "/" },
    { label: 'Market Overviews', href: "/" },
    { label: 'Case Studies', href: "/" },
    { label: 'Specifications', href: "/" },
    { label: 'Design Guides', href: "/" },
    { label: 'CAD Drawings/Details', href: "/" },
    { label: 'Installation Guides', href: "/" },
    { label: 'Other Technical Documents', href: "/" },
    { label: 'Certifications', href: "/" },
    { label: 'Videos', href: "/" },
    { label: 'SDS (formerly MSDS)', href: "/" },
    { label: 'Infographics', href: "/" },
    { label: 'FAQ', href: "/" },
    { label: 'Glossary', href: "/" },
    { label: 'Design Resources', href: "/" }
  ]

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 border-t border-gray-800 font-sans">

      {/* === TOP SECTION: MAIN BRANDS & CORE NAVIGATION === */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 border-b border-gray-800 pb-12">

          {/* --- COL 1: USA OPERATIONS (Logos + Info) --- */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#cc2221] font-bold uppercase tracking-wider text-sm border-b border-[#cc2221]/30 pb-2 w-fit">
              USA Operations
            </h3>

            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/Mega-foundries-logo.PNG'} alt='Mega Foundries' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/logo fabricator.jpeg'} alt='Fabricators' fill className="object-contain" />
                </Link>
              </div>
            </div>

            <div className="text-sm space-y-1 text-gray-400">
              <p>105 MAXES ROAD</p>
              <p>MELVILLE, NY 11737, USA</p>
              <a href="mailto:info@megafoundries.com" className="text-white hover:text-[#cc2221] transition-colors pt-2 block">
                info@megafoundries.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link key={i} href={'/'} className='p-2 border border-gray-600 rounded-full hover:border-[#cc2221] hover:text-[#cc2221] hover:bg-[#cc2221]/10 transition-all'>
                  <Icon className='w-4 h-4' />
                </Link>
              ))}
            </div>
          </div>

          {/* --- COL 2: PRODUCTS --- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-2.5">
              {products.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm hover:text-[#cc2221] hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COL 3: MARKETS --- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Markets</h4>
            <ul className="space-y-2.5">
              {market.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm hover:text-[#cc2221] hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COL 4: RESOURCES --- */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-2.5">
              {resourceCenter.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm hover:text-[#cc2221] hover:translate-x-1 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COL 5: CANADA OPERATIONS (Logos + Info + Subscribe) --- */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#cc2221] font-bold uppercase tracking-wider text-sm border-b border-[#cc2221]/30 pb-2 w-fit">
              Canada Operations
            </h3>

            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/Canada-foundries-logo1.PNG'} alt='Canada Foundries' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/logo forge.jpeg'} alt='Mega Forge' fill className="object-contain" />
                </Link>
              </div>
            </div>

            <div className="text-sm space-y-1 text-gray-400">
              <p>ONE YOUNGE STREET</p>
              <p>TORONTO, ONTARIO M5E 1R4</p>
              <p>CANADA</p>
            </div>

            {/* Subscribe Form */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex w-full">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-r-none border-gray-600 bg-gray-800 text-white focus:border-[#cc2221] h-10"
                />
                <Button className="rounded-l-none bg-[#cc2221] hover:bg-red-700 text-white font-bold h-10 px-4">
                  Submit
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* === SECONDARY SECTION: ADDITIONAL LINKS === */}
      <div className="bg-[#121212] py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

            {/* Corporate */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Corporate</h5>
              <ul className="space-y-2">
                {corporateLinks.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Sales */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Sales</h5>
              <ul className="space-y-2">
                {salesLinks.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Engineering */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Engineering</h5>
              <ul className="space-y-2">
                {engineeringLinks.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Engineering */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Market</h5>
              <ul className="space-y-2">
                {market.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Product */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Product</h5>
              <ul className="space-y-2">
                {productsLinks.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Policies */}
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">Policies</h5>
              <ul className="space-y-2">
                {policiesLinks.map((item, i) => (
                  <li key={i}><Link href={item.href} className="text-xs text-gray-500 hover:text-[#cc2221] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="border-t border-gray-800 py-6 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-600">
            © 2025 Mega Foundries — All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/" className="text-xs text-gray-600 hover:text-white">Privacy Policy</Link>
            <Link href="/" className="text-xs text-gray-600 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;