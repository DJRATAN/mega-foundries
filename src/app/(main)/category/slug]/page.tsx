import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getCategoryBySlug } from '@/lib/categoryData';
import { menuData } from '@/lib/menuData'; // Ensure you have this

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to find a subcategory and its products
function getSubCategoryData(slug: string) {
  // Search through all main categories in menuData
  for (const mainKey in menuData) {
    const mainCat = menuData[mainKey as keyof typeof menuData];
    // Find the subcategory that matches the slug
    const subCat = mainCat.categories.find(
      (c) => c.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === slug
    );

    if (subCat) {
      return {
        type: 'subcategory',
        title: subCat.name,
        parent: mainCat.label,
        items: subCat.items // The list of products
      };
    }
  }
  return null;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. Check if it is a MAIN CATEGORY (e.g., "energy")
  const mainCategory = getCategoryBySlug(slug);

  if (mainCategory) {
    // --- RENDER MAIN CATEGORY VIEW (Sub-Category Grid) ---
    return (
      <div className="min-h-screen bg-white">
        {/* Banner */}
        <div className="relative h-[300px] w-full">
          <Image
            src={mainCategory.bannerImage}
            alt={mainCategory.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{mainCategory.title}</h1>
            <div className="flex items-center text-white/80 text-sm font-medium">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/category/list" className="hover:text-white">Categories</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{mainCategory.title}</span>
            </div>
          </div>
        </div>

        {/* Sub-Category Grid */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mainCategory.subCategories.map((sub, index) => (
              <Link 
                href={`/category/${sub.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`} 
                key={index} 
                className="group block h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#cc2221] transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                      {sub.description}
                    </p>
                    <span className="text-[#cc2221] text-xs font-bold uppercase tracking-wider mt-auto">
                      View Products &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. Check if it is a SUB-CATEGORY (e.g., "solar-energy")
  const subCategoryData = getSubCategoryData(slug);

  if (subCategoryData) {
    // --- RENDER SUB-CATEGORY VIEW (Product List) ---
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back */}
          <div className="mb-8">
             <Link href="/category/list" className="inline-flex items-center text-sm text-gray-500 hover:text-[#cc2221]">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Categories
             </Link>
             <h1 className="text-3xl font-bold text-gray-900 mt-4">
                {subCategoryData.title} <span className="text-gray-400 font-normal text-xl ml-2">({subCategoryData.parent})</span>
             </h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {subCategoryData.items.map((item, index) => (
                <Link 
                   key={index} 
                   href={`/products/${item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                   className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#cc2221] hover:shadow-md transition-all group"
                >
                   <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#cc2221]">
                      {item}
                   </h3>
                   <p className="text-sm text-gray-500 mt-2">
                      View specifications and details &rarr;
                   </p>
                </Link>
             ))}
          </div>

        </div>
      </div>
    );
  }

  // 3. Not found anywhere
  return notFound();
}