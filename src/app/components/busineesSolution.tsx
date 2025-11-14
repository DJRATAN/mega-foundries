import { ChevronLeft, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const EnergyIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /><path d="M12 22v-3" /><path d="M6 18h12" /></svg>;
const PowerGenIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M12 21v-4" /><path d="M10 21h4" /></svg>;
const OilGasIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a8 8 0 1 0-16 0c0 1.95 0 3.05 0 5s0 3.05 0 5" /><circle cx="12" cy="12" r="3" /><path d="M12 21v-6" /><path d="M12 3v1" /><path d="M19 12h1" /><path d="M4 12h-1" /></svg>;
const WaterIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" /><path d="M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" /><path d="M7 14h.01" /><path d="M10 14h.01" /><path d="M13 14h.01" /><path d="M16 14h.01" /></svg>;

// --- SERVICE/FEATURE COMPONENTS ---

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="p-6 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start mb-4">
            {/* The icon in the image uses a red container/base */}
            <div className="relative p-2 rounded-full bg-red-100/50">
                <Icon className="w-8 h-8 text-red-600" />
                {/* Simulated circle border for the aesthetic in the image */}
                <div className="absolute inset-0 border border-red-300 rounded-full"></div>
            </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-800 mb-3">{title}</h3>

        <p className="text-sm text-neutral-600 mb-4 h-20 overflow-hidden">
            {description}
        </p>

        <a
            href="#"
            onClick={() => console.log(`Learn More about ${title}`)}
            className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
        >
            Learn More
            {/* Right arrow icon */}
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
    </div>
);


const BusinessSolutions = () => {
    const services = [
        {
            icon: EnergyIcon,
            title: "Energy",
            description: "Power Cozmo connects businesses with innovative energy solutions, from renewable energy technologies to power storage systems. Our platform facilitates trade to meet the growing demand for sustainable and efficient energy across industries.",
        },
        {
            icon: PowerGenIcon,
            title: "Power Generation",
            description: "Power Cozmo offers a diverse range of products for the power generation sector, including turbines and grid infrastructure, helping businesses source reliable solutions to enhance efficiency and meet global power demands.",
        },
        {
            icon: OilGasIcon,
            title: "Oil & Gas",
            description: "Power Cozmo supports the oil & gas industry with a comprehensive marketplace for equipment, pipelines, and safety systems, enabling businesses to optimize operations and meet industry challenges with trusted partners.",
        },
        {
            icon: WaterIcon,
            title: "Water Management",
            description: "Power Cozmo connects businesses with advanced water management solutions, from wastewater treatment to desalination technologies, ensuring efficient water distribution and sustainable practices for industrial and municipal applications.",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title Section */}
                <h2 className="text-xl  font-extrabold text-neutral-800 text-center mb-12 mx-auto">
                    Connecting Businesses Worldwide Through B2B Solutions
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start mb-4">
                                {/* The icon in the image uses a red container/base */}
                                <div className="relative p-2 rounded-full  ">
                                    <div className="w-8 h-8 text-[#cc2221]"><service.icon size={32} /></div>
 
                                </div>
                            </div>

                            <h3 className="text-[11px] font-bold text-neutral-800 mb-3">{service.title}</h3>

                            <p className="text-[11px] text-neutral-600 mb-4 h-20 overflow-hidden">
                                {service.description}
                            </p>

                            <Link
                                href="#"
                                // onClick={() => console.log(`Learn More about ${service.title}`)}
                                className="inline-flex text-[11px] items-center  font-semibold hover:text-[#cc2221] transition-colors group"
                            >
                                Learn More
                                <ChevronsRight className='h-3 w-3 ml-3'/> 
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions
