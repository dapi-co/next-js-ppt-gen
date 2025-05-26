'use client';

import React, { useState } from 'react';
import { slides, totalSlides } from '@/slides';
import ExportButtons from '@/components/ExportButtons';
import SlideshowModal from '@/components/SlideshowModal';

export default function Home() {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);

  const handlePlaySlideshow = () => {
    setIsSlideshowOpen(true);
  };

  const handleCloseSlideshow = () => {
    setIsSlideshowOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Fixed header with title and export buttons */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">
                PPT Generator
              </h1>
              <p className="text-gray-600 text-sm">
                {totalSlides} {totalSlides === 1 ? 'Slide' : 'Slides'}
              </p>
            </div>
            <ExportButtons 
              onPlaySlideshow={handlePlaySlideshow} 
              totalSlides={totalSlides}
            />
          </div>
        </div>
      </div>

      {/* Scrollable slides container */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          {totalSlides === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                  No slides available
                </h2>
                <p className="text-gray-500">
                  Add some slides to get started with your presentation.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {slides.map((SlideComponent, index) => (
                <div
                  key={index}
                  className="relative"
                  id={`slide-${index + 1}`}
                >
                  <SlideComponent />
                  
                  {/* Slide number indicator - positioned outside the slide container and excluded from export */}
                  <div 
                    className="absolute top-4 left-4 z-10 text-gray-500 text-sm font-medium"
                    data-export-ignore
                  >
                    {index + 1} / {totalSlides}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Slideshow Modal */}
      <SlideshowModal 
        isOpen={isSlideshowOpen}
        onClose={handleCloseSlideshow}
        startSlide={0}
      />
    </div>
  );
}
