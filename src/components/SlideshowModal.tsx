import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { slides, totalSlides } from '@/slides';

interface SlideshowModalProps {
  isOpen: boolean;
  onClose: () => void;
  startSlide?: number;
}

const SlideshowModal: React.FC<SlideshowModalProps> = ({ 
  isOpen, 
  onClose, 
  startSlide = 0 
}) => {
  const [currentSlide, setCurrentSlide] = useState(startSlide);

  // Handle keyboard navigation
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'ArrowRight':
      case ' ': // Spacebar
        event.preventDefault();
        setCurrentSlide(prev => (prev + 1) % totalSlides);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
        break;
      case 'Escape':
        event.preventDefault();
        onClose();
        break;
      case 'Home':
        event.preventDefault();
        setCurrentSlide(0);
        break;
      case 'End':
        event.preventDefault();
        setCurrentSlide(totalSlides - 1);
        break;
    }
  }, [isOpen, onClose]);

  // Set up keyboard event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [isOpen, handleKeyPress]);

  // Reset slide when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(startSlide);
    }
  }, [isOpen, startSlide]);

  // Enter fullscreen when slideshow opens
  useEffect(() => {
    if (isOpen) {
      document.documentElement.requestFullscreen?.();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    }
  }, [isOpen]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSlideClick = (event: React.MouseEvent) => {
    // Only advance if clicking on the slide content area (not controls)
    if (event.target === event.currentTarget || 
        (event.target as HTMLElement).closest('[data-slide-container]')) {
      nextSlide();
    }
  };

  if (!isOpen) return null;

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Minimal controls overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <button
          onClick={onClose}
          className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
          title="Exit slideshow (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-white text-sm bg-black/50 px-3 py-1 rounded">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors z-10"
        title="Previous slide (←)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors z-10"
        title="Next slide (→)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide content - clickable to advance */}
      <div 
        className="w-full h-full flex items-center justify-center cursor-pointer"
        onClick={handleSlideClick}
        title="Click to advance to next slide"
      >
        <div className="w-full h-full max-w-none max-h-none flex items-center justify-center">
          <div className="w-[90vw] h-[90vh] max-w-[1200px] max-h-[675px]" style={{ aspectRatio: '16/9' }}>
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Simplified keyboard shortcuts help */}
      <div className="absolute bottom-4 left-4 text-white text-xs bg-black/50 px-3 py-2 rounded opacity-70">
        Use ← → arrows, spacebar, or click to navigate • ESC to exit
      </div>
    </div>
  );
};

export default SlideshowModal; 