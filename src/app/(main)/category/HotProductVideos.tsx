'use client';

import React, { useRef } from 'react';
import { Play, Maximize2 } from 'lucide-react';
 
const videos = [
  {
    id: 1,
    title: "Cross Sectional / CORE LV CABLES",
    videoUrl: "/video/video32.mp4",  
  },
  {
    id: 2,
    title: "AUXILIARY CABLES (CONTROL...)",
    videoUrl: "/video/video26.mp4",  
  },
  {
    id: 3,
    title: "Prefabricated Modular Buildings...",
    videoUrl: "/video/video27.mp4",  
  },
  {
    id: 4,
    title: "Flexible Use of Mobile Internal...",
    videoUrl: "/video/video28.mp4",  
  },
  {
    id: 5,
    title: "Kysb Open Circuit Cooling...",
    videoUrl: "/video/video29.mp4",  
  },
  {
    id: 6,
    title: "1HP Stainless Steel Electric...",
    videoUrl: "/video/video30.mp4",  
  },
  {
    id: 7,
    title: "High Quality Single-Stage...",
    videoUrl: "/video/video31.mp4",  
  },
];

export default function HotProductVideos() {
   
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(error => {
     
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // Optional: Reset to start
    }
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
         
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Hot Product Videos
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              
              {/* Video Card Container */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-200 bg-black mb-3">
                
                <video
                  src={video.videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay (Fades out on hover so video is clear) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

                {/* Centered Play Button (Disappears on hover when video plays) */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Fullscreen Icon */}
                <div className="absolute bottom-2 right-2 p-1.5 bg-black/60 rounded-md backdrop-blur-sm pointer-events-none">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Video Title */}
              <h3 className="text-sm font-medium text-gray-700 leading-snug group-hover:text-[#cc2221] transition-colors line-clamp-2">
                {video.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}