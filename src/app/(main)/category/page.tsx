'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoriesData = [
    {
        id: 'energy',
        title: 'Energy',
        color: 'bg-blue-100 text-blue-900',
        bannerImage: '/assets/image9.jpeg',
        subCategories: [
            {
                title: 'Biomass Energy',
                image: '/assets/image1.jpeg',
                description: 'The Biomass Energy Category Encompasses Systems And Solutions That Generate Power From Organic Materials Such As Wood...'
            },
            {
                title: 'Elastic Energy',
                image: '/assets/image2.jpeg',
                description: 'Elastic Energy Is A Form Of Potential Energy Stored In An Object When It Is Stretched, Compressed, Or Deformed...'
            },
            {
                title: 'Electrical Energy',
                image: '/assets/image3.jpeg',
                description: 'Comprehensive electrical energy grids, transmission towers, and high voltage infrastructure solutions.'
            },
            {
                title: 'Hydro Power',
                image: '/assets/image4.jpg',
                description: 'Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium...'
            },
            {
                title: 'Machinery',
                image: '/assets/image5.jpeg',
                description: 'Machinery Refers To Mechanical Devices Or Assemblies Designed To Perform Specific Tasks, Often Involving Movement.'
            },
            {
                title: 'Nuclear Energy',
                image: '/assets/image6.jpg',
                description: 'Nuclear Energy Is A Form Of Energy Released From The Nucleus Of Atoms Through The Processes Of Fission.'
            },
            {
                title: 'Renewable Energy',
                image: '/assets/image7.jpg',
                description: 'Renewable Energy Is Energy Derived From Natural Sources That Are Constantly Replenished, Such As Sunlight.'
            },
            {
                title: 'Solar Energy',
                image: '/assets/image8.jpg',
                description: 'Explore Solar Energy Solutions On Mega Foundries, Your Platform For Sourcing Top-Tier Solar Products.'
            },
        ]
    },
    {
        id: 'power-gen',
        title: 'Power Generation',
        color: 'bg-orange-100 text-orange-900',
        bannerImage: '/assets/image10.jpeg',
        subCategories: [
            {
                title: 'Automotive & Transport',
                image: '/assets/image9.jpeg',
                description: 'Explore A Wide Range Of Vehicles, Auto Parts, And Transport Machinery Designed For Performance And Durability.'
            },
            {
                title: 'Electrical & Power Systems',
                image: '/assets/image10.jpeg',
                description: 'Comprehensive Solutions For Energy Distribution, Control, And Automation. Includes Transformers, Circuit Breakers...'
            },
            {
                title: 'Fabrication & Processing',
                image: '/assets/image11.jpg',
                description: 'This Category Includes Advanced Machinery For Cutting, Bending, Shaping, And Assembling Materials.'
            },
            {
                title: 'Generator',
                image: '/assets/image12.jpg',
                description: 'Reliable Power Generation Units For Continuous, Standby, Or Emergency Use. Includes Diesel, Gas, Hybrid...'
            },
            {
                title: 'Industrial & Plant Equipment',
                image: '/assets/image13.jpg',
                description: 'Discover Essential Machinery And Systems Used In Manufacturing Plants And Industrial Setups.'
            },
            {
                title: 'Mechanical Equipment',
                image: '/assets/image14.jpeg',
                description: 'Mechanical Equipment Refers To Powered Machines And Devices That Perform Work Involving Motion.'
            },
            {
                title: 'Motor',
                image: '/assets/image15.jpg',
                description: 'Covers All Types Of Industrial And Commercial Motors Used In Driving Mechanical Systems.'
            },
            {
                title: 'Pumps',
                image: '/assets/image16.jpg',
                description: 'In The Power Generation Sector, Reliable Pumps Are The Backbone Of Efficient Operations.'
            },
        ]
    }
];


 
export default function CategoryList() {
    return (
        <div className="min-h-screen bg-white py-8">

            {/* Breadcrumb Area */}
            <div className="max-w-[1600px] mx-auto px-4 mb-6">
                <p className="text-sm font-bold text-gray-700">
                    <Link href={'/'} className="hover:text-[#cc2221]">Home</Link> 
                    <span className="mx-2">/</span> 
                    <span className="text-gray-500 font-normal">All Categories</span>
                </p>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 space-y-12">

                {categoriesData.map((category) => (
                    <div key={category.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row h-auto lg:h-[600px]">

                        {/* === LEFT: BANNER IMAGE === */}
                        <div className="relative w-full lg:w-[320px] h-64 lg:h-full shrink-0 group">
                            <Image
                                src={category.bannerImage}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div className={`absolute top-6 left-0 px-6 py-2 rounded-r-full font-bold text-lg shadow-sm ${category.color}`}>
                                {category.title}
                            </div>
                        </div>

                        {/* === RIGHT: SUB-CATEGORY GRID === */}
                        <div className="flex-1 p-6 lg:p-8 flex flex-col">

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 overflow-y-auto pr-2 custom-scrollbar">
                                {category.subCategories.map((sub, idx) => (
                                    <Link 
                                        // UPDATED LINE: Changed 'products' to 'category'
                                        href={`/category/${sub.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`} 
                                        key={idx} 
                                        className="group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg mb-3 border border-gray-100 shadow-sm">
                                            <Image
                                                src={sub.image}
                                                alt={sub.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col grow">
                                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#cc2221] transition-colors">
                                                {sub.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                                                {sub.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* View More Button (Goes to the main Category page like /category/energy) */}
                            <div className="mt-auto pt-6 flex justify-end border-t border-gray-100">
                                <Link href={`/category/${category.id}`}>
                                    <Button
                                        variant="ghost"
                                        className="text-[#cc2221] hover:text-[#a01b1b] hover:bg-red-50 font-semibold flex items-center gap-2 px-4"
                                    >
                                        View More <ChevronDown className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}