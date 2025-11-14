import { Amphora, ChevronsRight, Droplets, Factory, TowerControl } from 'lucide-react';
import Link from 'next/link';


const BusinessSolutions = () => {
    const services = [
        {
            icon: TowerControl,
            title: "Energy",
            description: "Power Cozmo connects businesses with innovative energy solutions, from renewable energy technologies to power storage systems. Our platform facilitates trade to meet the growing demand for sustainable and efficient energy across industries.",
        },
        {
            icon: Factory,
            title: "Power Generation",
            description: "Power Cozmo offers a diverse range of products for the power generation sector, including turbines and grid infrastructure, helping businesses source reliable solutions to enhance efficiency and meet global power demands.",
        },
        {
            icon: Amphora,
            title: "Oil & Gas",
            description: "Power Cozmo supports the oil & gas industry with a comprehensive marketplace for equipment, pipelines, and safety systems, enabling businesses to optimize operations and meet industry challenges with trusted partners.",
        },
        {
            icon: Droplets,
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
                                <ChevronsRight className='h-3 w-3 ml-3' />
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
