'use client';

import { HandFist, MapPinIcon, Radar, Target } from 'lucide-react';
import React from 'react'
interface ProductItemCardProps {
    count: string;
    label: string;
}
interface ScrollRowProps {
    data: ProductItemCardProps[];
    duration: number;
}
const MetricSection = () => {
    const metrics = [
        { icon: Target, value: "2000", label: "Products" },
        { icon: HandFist, value: "1000", label: "Suppliers" },
        { icon: Radar, value: "12000", label: "Product Categories" },
        { icon: MapPinIcon, value: "4000", label: "countries and regions" },
    ];

    return (
        <section className="bg-gray-50 max-w-5xl mx-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[30px]   font-extrabold text-neutral-800 text-center mb-16 max-w-3xl mx-auto">
                    Explore customized offerings designed for your business
                </h2>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center p-4">
                            <div className="relative p-3 rounded-full bg-neutral-100/50 mb-3">
                                {/* The icon in the image uses a black container/base */}
                                <metric.icon className="w-8 h-8 text-neutral-800" />
                                {/* Simulated border matching the source image aesthetic */}
                                <div className="absolute inset-0 border border-neutral-300 rounded-full"></div>
                            </div>

                            <div className="text-[22px] font-extrabold text-[#cc2221] mb-1">{metric.value}</div>
                            <p className="text-[10px] text-neutral-600 text-center">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PRODUCT CAROUSEL COMPONENTS (Updated for Auto-Scrolling and Mask) ---

const ProductItemCard = ({ count, label }: ProductItemCardProps) => (
    <div
        className={`
            shrink-0 border max-w-xl border-gray-200 rounded-xl p-4 transition-shadow duration-300 hover:shadow-lg bg-white
            w-[220px] h-[100px] flex flex-col justify-center items-center shadow-sm   cursor-pointer
        `}
    >
        <p className={`font-extrabold text-[#cc2221] text-[16px] mb-1`}>{count}</p>
        <p className={`text-center text-neutral-600 text-[13px] leading-tight`}>{label}</p>
    </div>
);

const ProductCarousel = () => {
    const productData = [
        { count: "200+", label: "Water Management & Big Power Supply" },
        { count: "130+", label: "Industrial Equipments and components" },
        { count: "150+", label: "Chemical dosing pumps" },
        { count: "20+", label: "Pump & Vacuum Equipment" },
        { count: "50+", label: "Industrial Equipments and components" },
        { count: "120+", label: "Chemical dosing pumps" },
        { count: "110+", label: "Industrial Equipments and components" },
        { count: "180+", label: "Chemical dosing pumps" },
        { count: "150+", label: "Water Management & Big Power Supply" },
        { count: "600", label: "Industrial Equipments and components" },
        { count: "10K", label: "Chemical dosing pumps" },
        { count: "20+", label: "Pump & Vacuum Equipment" },
    ];

    // Create an array that is duplicated so the scrolling is seamless (Infinite Marquee)
    const scrollingData = [...productData, ...productData];

    // The width of one card + margin (220px + 16px (space-x-4)) = 236px
    // Total items: 12. Total width (for animation keyframes): 12 * 236px = 2832px
    const cardWidth = 236; // 220px card width + 16px margin (w-[220px] + space-x-4)
    const totalItems = productData.length;
    const scrollDistance = totalItems * cardWidth; // 12 * 236 = 2832px

    const ScrollRow = ({ data, duration }: ScrollRowProps) => (
        // The container uses the custom 'marquee' animation
        <div
            className="flex space-x-4 pb-4 px-1 whitespace-nowrap"
            style={{
                animation: `marquee ${duration}s linear infinite`
            }}
        >
            {data.map((item, index) => (
                // Important: Use key composed of label and index since the data is duplicated
                <ProductItemCard
                    key={`${item.label}-${index}`}
                    count={item.count}
                    label={item.label}
                />
            ))}
        </div>
    );

    return (
        <section className="py-10 bg-gray-50 border-t border-gray-200">
            <MetricSection />
            <div className="space-y-4">
                {/* Carousel container with overflow-hidden and the mask */}
                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        // Apply the linear gradient mask for the fade effect
                        maskImage: `linear-gradient(to right, 
                            rgba(0,0,0,0) 20%, 
                            rgba(0,0,0,1) 55%, 
                            rgba(0,0,0,1) 95%, 
                            rgba(0,0,0,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, 
                            rgba(0,0,0,0) 0%, 
                            rgba(0,0,0,1) 5%, 
                            rgba(0,0,0,1) 95%, 
                            rgba(0,0,0,0) 100%)`,
                    }}
                >
                    {/* First Row: Auto Scrolling (Using the first half of the duplicated data) */}
                    <ScrollRow data={scrollingData.slice(0, totalItems)} duration={60} />
                    {/* Duplicate the row outside the first to ensure seamless loop */}
                    <ScrollRow data={scrollingData.slice(0, totalItems)} duration={60} />
                </div>

                {/* Second Row: Auto Scrolling (Using the second half of the duplicated data) - Slightly offset speed for visual interest */}
                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        // Apply the linear gradient mask for the fade effect
                        maskImage: `linear-gradient(to right, 
                            rgba(0,0,0,0) 0%, 
                            rgba(0,0,0,1) 5%, 
                            rgba(0,0,0,1) 95%, 
                            rgba(0,0,0,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, 
                            rgba(0,0,0,0) 0%, 
                            rgba(0,0,0,1) 5%, 
                            rgba(0,0,0,1) 95%, 
                            rgba(0,0,0,0) 100%)`,
                    }}
                >
                    {/* We can use the same data source but it runs in a separate row */}
                    <ScrollRow data={scrollingData.slice(totalItems)} duration={60} />
                    <ScrollRow data={scrollingData.slice(totalItems)} duration={60} />
                </div>
            </div>

            <style jsx global>{`
                /* Define the CSS keyframes for the continuous horizontal scroll */
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${scrollDistance}px); } /* Translate by the full width of the original data set */
                }
            `}</style>
        </section>
    );
};
export default ProductCarousel
