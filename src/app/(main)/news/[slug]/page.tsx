import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
 
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
 
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-4xl mx-auto">
         
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
        </div>
 
        <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
 
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl font-medium leading-relaxed mb-6">
            {article.excerpt}
          </p>
          <p>
            Here is the full content of the news article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </article>
    </div>
  );
}