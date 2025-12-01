'use client';

import Image from 'next/image';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: "Indian Culture: A Tapestry of Diversity and Heritage",
    slug: "indian-culture-tapestry-diversity",
    author: "Mega Foundries Admin",
    date: "20 Nov 2025",
    image: "/assets/image1.jpeg",  
    excerpt: "Discover the richness of Indian culture, a vibrant blend of traditions, festivals, art, and spirituality, celebrated worldwide for its diversity."
  },
  {
    id: 2,
    title: "Managing power transformers in service efficiently",
    slug: "managing-power-transformers",
    author: "Mega Foundries Admin",
    date: "08 Oct 2025",
    image: "/assets/image2.jpeg",  
    excerpt: "Utilities are under intense pressure to maximize the use of their current transformer asset base in order to keep rates down while yet providing excellence."
  },
  {
    id: 3,
    title: "Practical guidelines for protection system engineering",
    slug: "guidelines-protection-system",
    author: "Mega Foundries Admin",
    date: "24 Sep 2025",
    image: "/assets/image3.jpeg",  
    excerpt: "Relay protection and the whole bunch of protection system engineering around the substation are quite interesting from the point of view of creativity."
  },
  {
    id: 4,
    title: "Twelve high voltage cable construction methods",
    slug: "high-voltage-cable-construction",
    author: "Mega Foundries Admin",
    date: "24 Sep 2025",
    image: "/assets/image4.jpg",  
    excerpt: "This technical article discusses twelve different methods for laying high voltage cables. Out of the ten, four are deemed conventional and eight are specialized."
  }
];

export default function IndustryNews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
         
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#cc2221] pl-4">
          Industry News
        </h2>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/news/${article.slug}`}
              className="group flex flex-col h-full"
            > 
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4 bg-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
 
              <div className="flex flex-col grow"> 
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  {article.author} • {article.date}
                </div>
 
                <h3 className="text-lg font-bold text-[#cc2221] leading-tight mb-3 group-hover:underline decoration-[#cc2221] underline-offset-2">
                  {article.title}
                </h3> 
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}