import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { menuData } from '@/lib/menuData2';
 
function getMainCategory(slug: string) {
  return Object.values(menuData).find((cat) => cat.id === slug);
}
 
function getSubCategory(slug: string) {
  for (const key in menuData) {
    const mainCat = menuData[key as keyof typeof menuData]; 
    const subCat = mainCat.categories.find((c) => c.slug === slug);

    if (subCat) {
      return {
        type: 'subcategory',
        title: subCat.name,
        description: subCat.description,  
        parent: mainCat.label,
        parentId: mainCat.id,
        items: subCat.items, 
        image: subCat.image
      };
    }
  }
  return null;
}
 

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
 
  const mainCategory = getMainCategory(slug);

  if (mainCategory) {
    return (
      <div className="min-h-screen bg-white w-full px-4 sm:px-6 lg:px-10 py-3">
 
        <div className="relative h-[300px] w-full">
          <Image
            src={mainCategory.bannerImage}
            alt={mainCategory.label}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{mainCategory.label}</h1>
            <div className="flex items-center text-white/80 text-sm font-medium">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/category/list" className="hover:text-white">Categories</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{mainCategory.label}</span>
            </div>
          </div>
        </div>
        <div className='text-center pt-4'>
          <h2 className='text-xl font-bold'>We are the nucleus of the metal world with the world of metals</h2>
          <p className='text-sm pt-4 '>Elastic energy is a form of potential energy stored in an object when it is stretched, compressed, or deformed, and returns to its original shape when the force is removed. Common examples include a stretched rubber band, a compressed spring, or a bent diving board. The energy is stored due to the material's elasticity, and it is released when the object returns to its natural shape. Elastic energy plays an important role in various applications, from mechanical systems and toys to biological functions and sports equipment.</p>
        </div> 
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mainCategory.categories.map((sub, index) => (
              <Link
                // Use the explicit slug from data
                href={`/category/${sub.slug}`}
                key={index}
                className="group block h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={sub.image || '/assets/placeholder.jpg'}
                      alt={sub.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#cc2221] transition-colors">
                      {sub.name}
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
 
  const subCategoryData = getSubCategory(slug);

  if (subCategoryData) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
 
          <div className="mb-8">
            <Link href={`/category/${subCategoryData.parentId}`} className="inline-flex items-center text-sm text-gray-500 hover:text-[#cc2221] mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to {subCategoryData.parent}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {subCategoryData.title}
            </h1>
            <p className="text-gray-500 mt-2 max-w-3xl text-lg">{subCategoryData.description}</p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subCategoryData.items && subCategoryData.items.length > 0 ? (
              subCategoryData.items.map((item, index) => (
                <Link
                  key={index} 
                  href={`/products/${item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#cc2221] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className='flex justify-evenly'>
                    <div>
                      <div className="w-12 h-12 bg-red-50 rounded-lg mb-4 text-[#cc2221]"> 
                        <ChevronRight />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#cc2221] mb-2">
                        {item} 
                      </h3>
                    </div>
                    <Image
                      src={subCategoryData.image}
                      alt={subCategoryData.title}
                      height={100} width={100}
                      className=" "
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-4 flex items-center font-medium">
                    View Specs &rarr;
                  </p>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No specific products listed under this category yet.</p>
                <Link href="/contact" className="text-[#cc2221] font-bold mt-2 inline-block">Contact us for custom requirements &rarr;</Link>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  } 
  return notFound();
}