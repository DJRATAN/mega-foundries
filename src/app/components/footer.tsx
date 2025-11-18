import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Footer = () => {
  const products = [
    { lable: 'Molded Gratings', href: "/" },
    { lable: 'Pultruded Grating', href: "/" },
    { lable: 'Dynaform Structural Shapes', href: "/" },
    { lable: 'Dynarail/DynaRound Guardrail & Handrail Products', href: "/" },
    { lable: 'Dynarail Ladder Products', href: "/" },
    { lable: 'Stair Solutions', href: "/" },
    { lable: 'Fiberglass Plate', href: "/" },
    { lable: 'Work Platforms', href: "/" },
    { lable: 'Accessories / Complementary Products', href: "/" },
    { lable: 'Custom Pultrusions', href: "/" },
    { lable: 'Metering Pump Stands', href: "/" },
    { lable: 'Rooftop Safety Products', href: "/" },
    { lable: 'Unique Product Solutions', href: "/" }
  ]
  const market = [
    { lable: 'Market Solutions', href: "/" },
    { lable: 'Architectural & Commercial', href: "/" },
    { lable: 'Chemical', href: "/" },
    { lable: 'Data Center Solutions', href: "/" },
    { lable: 'Docks & Decking', href: "/" },
    { lable: 'Food & Beverage', href: "/" },
    { lable: 'General Manufacturing', href: "/" },
    { lable: 'Metals & Mining', href: "/" },
    { lable: 'Oil & Gas', href: "/" },
    { lable: 'Pharmaceutical', href: "/" },
    { lable: 'Pulp & Paper', href: "/" },
    { lable: 'Recreational', href: "/" },
    { lable: 'Technology', href: "/" },
    { lable: 'Telecommunications', href: "/" },
    { lable: 'Transportation', href: "/" },
    { lable: 'Utilities & Power', href: "/" },
    { lable: 'Water & Wastewater', href: "/" },
  ]
  const resourceCenter = [
    { lable: 'Product Brochures', href: "/" },
    { lable: 'Market Overviews', href: "/" },
    { lable: 'Case Studies', href: "/" },
    { lable: 'Specifications', href: "/" },
    { lable: 'Design Guides', href: "/" },
    { lable: 'CAD Drawings/Details', href: "/" },
    { lable: 'Installation Guides', href: "/" },
    { lable: 'Other Technical Documents', href: "/" },
    { lable: 'Certifications', href: "/" },
    { lable: 'Videos', href: "/" },
    { lable: 'SDS (formerly MSDS)', href: "/" },
    { lable: 'Infographics', href: "/" },
    { lable: 'FAQ', href: "/" },
    { lable: 'Glossary', href: "/" },
    { lable: 'Design Resources', href: "/" }
  ]
  return (
    <footer className="bg-neutral-800 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className='flex flex-col'>
            <div className="mb-4">
              <Link href={'/'}><Image src={'/logo.jpeg'} alt='Logo' height={100} width={100} /></Link>

            </div>

            <p className="pb-3 transition-colors text-[11px] mb-4 leading-relaxed max-w-xs">
              Our company's founders & CEO are electrical and mechanical engineers and businessman
            </p>
            <a href="mailto:info@megafoundries.com" className="text-[#cc2221] hover:text-[#cc2221] text-[11px] font-medium transition-colors">
              info@megafoundries.com
            </a>

            {/* Social Icons */}

            <div className="flex space-x-0.5 mt-6   gap-2">
              <Link href={'/'} className='p-2 border rounded-3xl'><Linkedin className='w-4 h-4' /></Link>
              <Link href={'/'} className='p-2 border rounded-3xl'><Facebook className='w-4 h-4' /></Link>
              <Link href={'/'} className='p-2 border rounded-3xl'><Instagram className='w-4 h-4' /></Link>
              <Link href={'/'} className='p-2 border rounded-3xl'><Twitter className='w-4 h-4' /></Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h4 className="text-xl font-semibold mb-5 text-white relative pb-3">
              Products
              {/* Red underline accent */}
              <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
            </h4>
            {products.map((item, index) => (
              <Link key={index} href={item.href} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.lable}</Link>
            ))}

          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 text-white relative pb-3">
            Markets
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {market.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.lable} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 text-white relative pb-3">
            Resource Center
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {resourceCenter.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.lable} </Link>
            ))}
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> About Us </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> Design Resources </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> Contact Us </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> Where to Buy </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> California Supply Chain Act </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> European Accessibility Notice </Link>
            <Link href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-sm"> Sitemap </Link>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5 text-white relative pb-3">
              Subscribe
              {/* Red underline accent */}
              <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
            </h4>

            <div className="flex w-full">
              {/* Using mock Input component */}
              <Input
                type="email"
                placeholder="Enter Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="rounded-r-none border-[#cc2221] focus-visible:ring-[#cc2221] text-neutral-800 w-2/3"
              />
              {/* Reusing mock Button component */}
              <Button
                variant="newColor"
                // onClick={handleSubscribe}
                className="rounded-l-none text-base font-semibold transition-colors w-1/3"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t py-4">
        <div className="container mx-auto px-4 flex justify-center items-center text-center">
          <p className="text-sm">
            © 2025 Mega Foundries — All rights reserved.
          </p>
        </div>
      </div>


    </footer>
  );
};



export default Footer
