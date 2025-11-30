import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { menuData } from '@/lib/menuData2';
 
// 1. HELPER: Generate Slug from Name (e.g. "Biomass Energy" -> "biomass-energy")
const createSlug = (text: string) => 
  text.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]+/g, '');

// 2. HELPER: Find Data (Checks both Main Categories AND Sub-Categories)
function getPageData(slug: string) {
  
  // A. Check if it's a Main Category (e.g., "energy")
  const mainCategory = Object.values(menuData).find(cat => cat.id === slug);
  if (mainCategory) {
    return { type: 'main', data: mainCategory };
  }

  // B. Check if it's a Sub-Category (e.g., "biomass-energy")
  for (const key in menuData) {
    const mainCat = menuData[key as keyof typeof menuData];
    const subCat = mainCat.categories.find(sub => createSlug(sub.name) === slug);
    
    if (subCat) {
      return { 
        type: 'sub', 
        data: subCat, 
        parent: mainCat // We pass the parent so we can link back to it
      };
    }
  }

  return null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const result = getPageData(slug);

  if (!result) {
    return notFound();
  }

  // === RENDER MAIN CATEGORY (e.g. /category/energy) ===
  if (result.type === 'main') {
    const category = result.data;
    // Note: If TypeScript complains about 'categories', define the type in menuData.ts or cast as any here.
    const subCategories = (category as any).categories; 

    return (
      <div className="min-h-screen bg-white">
        <div className="relative h-[300px] w-full">
          <Image src={category.bannerImage || '/assets/placeholder.jpg'} alt={category.label} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{category.label}</h1>
            <div className="flex items-center text-white/80 text-sm font-medium">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/category/list" className="hover:text-white">Categories</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{category.label}</span>
            </div>
          </div>
        </div>

        {/* Sub-Category Grid */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {subCategories.map((sub: any, index: number) => (
              <Link key={index} href={`/category/${createSlug(sub.name)}`} className="group block h-full">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={sub.image || '/assets/placeholder.jpg'} alt={sub.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#cc2221] transition-colors">{sub.name}</h3>
                    <span className="text-[#cc2221] text-xs font-bold uppercase tracking-wider mt-auto">View Products &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // === RENDER SUB-CATEGORY (e.g. /category/biomass-energy) ===
  if (result.type === 'sub') {
    const subCategory = result.data;
    const parent = result.parent;
    const products = (subCategory as any).items || [];

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-8">
             <Link href={`/category/${parent.id}`} className="inline-flex items-center text-sm text-gray-500 hover:text-[#cc2221]">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to {parent.label}
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 mt-4">
                {subCategory.name}
             </h1>
             <p className="text-gray-500 mt-2">{(subCategory as any).description}</p>
          </div>

          {/* Product List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {products.length > 0 ? (
               products.map((item: string, index: number) => (
                  <Link 
                     key={index} 
                     href={`/products/${createSlug(item)}`}
                     className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#cc2221] hover:shadow-md transition-all group"
                  >
                     <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#cc2221]">
                        {item}
                     </h3>
                     <p className="text-sm text-gray-500 mt-2 flex items-center">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                     </p>
                  </Link>
               ))
             ) : (
               <p className="text-gray-500 italic">No products listed in this category yet.</p>
             )}
          </div>

        </div>
      </div>
    );
  }

  return notFound();
}