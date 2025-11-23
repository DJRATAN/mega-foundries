import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


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
    // <footer className="bg-neutral-200 relative">
    <footer className="bg-neutral-800 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className='flex flex-col'>
            <div className="mb-2 bg-white w-[70%] h-36 flex">
              <Link href={'/'}><Image src={'/Mega-foundries-logo.PNG'} alt='Logo' height={150} width={150} /></Link>
            </div>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              105 MAXES ROAD
            </p>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              MELVILE, NY 11737
            </p>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              USA
            </p>
            <a href="mailto:info@megafoundries.com" className="text-[#cc2221] pt-3 hover:text-[#cc2221] text-[11px] font-medium transition-colors">
              info@megafoundries.com
            </a>

            {/* Social Icons */}

            <div className="flex space-x-0.5 mt-2   gap-2">
              <Link href={'/'} className='p-2 border-[#cc2221] border rounded-3xl'><Linkedin className='w-4 h-4 hover:text-[#cc2221]' /></Link>
              <Link href={'/'} className='p-2 border-[#cc2221] border rounded-3xl'><Facebook className='w-4 h-4 hover:text-[#cc2221]' /></Link>
              <Link href={'/'} className='p-2 border-[#cc2221] border rounded-3xl'><Instagram className='w-4 h-4 hover:text-[#cc2221]' /></Link>
              <Link href={'/'} className='p-2 border-[#cc2221] border rounded-3xl'><Twitter className='w-4 h-4 hover:text-[#cc2221]' /></Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h4 className="text-xl font-semibold mb-5  relative pb-3">
              Products
              {/* Red underline accent */}
              <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
            </h4>
            {products.map((item, index) => (
              <Link key={index} href={item.href} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label}</Link>
            ))}

          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            Markets
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {market.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5  relative pb-3">
            Resource Center
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {resourceCenter.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
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

            <div className="mb-2 bg-white w-[70%] h-36 flex">
              <Link href={'/'}><Image src={'/Canada-foundries-logo1.PNG'} alt='Logo' height={150} width={150} /></Link>
            </div>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              ONE YOUNGE STREET
            </p>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              TORONTO, ONTARIO M5E 1R4
            </p>
            <p className="transition-colors text-[11px] leading-relaxed max-w-xs">
              CANADA
            </p>
            <h4 className="text-xl font-semibold mb-5 relative pt-3 pb-3">
              Subscribe
              {/* Red underline accent */}
              <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
            </h4>

            <div className="flex w-full">

            </div>
            {/* Using mock Input component */}
            <Input
              type="email"
              placeholder="Enter Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="rounded-r-none border-[#cc2221]  text-neutral-800 w-2/3"
            />
            {/* Reusing mock Button component */}
            <Button
              variant="outline"
              // onClick={handleSubscribe}
              className="rounded-l-none text-base border-[#cc2221] text-[#cc2221] hover:bg-red-50 hover:text-[#cc2221] font-semibold transition-colors w-1/3"
            >
              Submit
            </Button>
          </div>

        </div>
      </div>
      <div className="container border-t mx-auto px-4 sm:px-6 lg:px-14 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            CORPORATE
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {corporateLinks.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            POLICIES
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {policiesLinks.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            SALES
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {salesLinks.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            PRODUCT
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {productsLinks.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            ENGINEERING
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {engineeringLinks.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
          </div>
          <div className='flex flex-col'>  <h4 className="text-xl font-semibold mb-5 relative pb-3">
            MARKETS
            {/* Red underline accent */}
            <span className="absolute left-0 bottom-0 h-0.5 w-1/4 bg-[#cc2221]"></span>
          </h4>
            {market.map((item, index) => (
              <Link key={index} href={'/'} className="pb-3 hover:text-[#cc2221] transition-colors text-[11px]"> {item.label} </Link>
            ))}
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
