import React from 'react'
 
// --- HERO SECTION COMPONENT (Composer) ---
const HeroSection = () => {
    // Note: The image URL is a placeholder. Replace it with your actual image path.
    const imageUrl = "hero.avif";

    return (
        <div
            className="relative w-full overflow-hidden flex items-center justify-center py-20 md:py-32 lg:py-40"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Mimic the image's rounded bottom edge if possible, otherwise use a subtle curve effect
                clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
            }}
        >
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[1px]"></div>
            <div className="relative z-10 text-center max-w-4xl px-4">

                <p className="text-[24px]   font-medium text-white/90 mb-3 tracking-widest uppercase">
                    Buy and Sell Machinery Online
                </p>
                <h1 className="text-[40px]   text-white leading-tight mb-6 drop-shadow-lg">

                    Empowering Global Trade Across Energy, Power, Oil & Gas, and Water Sectors
                </h1>
                <p className="text-[16px]   text-white/90 leading-relaxed font-light mx-auto max-w-3xl">

                    We provide a wide range of products, from turbines and oil & gas equipment to water management and power systems. Our platform also connects businesses with FPC services for large-scale industrial projects.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
