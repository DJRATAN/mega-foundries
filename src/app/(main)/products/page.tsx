import { allSeries } from "@/lib/seriesData";
import SeriesCard from "@/components/SeriesCard";
import Image from "next/image";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Company Header (Simulating the center block of the image) */}
        <div className="flex flex-col items-center justify-center mb-16 text-center space-y-4">
 
           
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Our Product Category</h1>
           <p className="text-[#cc2221] font-bold tracking-widest text-sm">JUST HIGHER STANDARDS</p>
   
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allSeries.map((series, index) => (
            <SeriesCard 
              key={index} 
              title={series.title} 
              items={series.items} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}