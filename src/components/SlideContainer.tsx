import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
  slideNumber?: string;
  showSlideNumber?: boolean;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ 
  children, 
  className = '', 
  slideNumber,
  showSlideNumber = false 
}) => {
  return (
    <div 
      data-slide-container
      className={`
        w-[960px] h-[540px] 
        bg-white 
        border border-gray-300 
        shadow-lg 
        relative 
        overflow-hidden 
        mx-auto
        flex-shrink-0
        ${className}
      `}
      style={{
        aspectRatio: '16/9',
        position: 'relative',
        display: 'block',
        margin: '0 auto'
      }}
    >
      {/* Optional slide number inside the container */}
      {showSlideNumber && slideNumber && (
        <div className="absolute top-4 left-4 z-10 text-gray-500 text-sm font-medium bg-white/80 px-2 py-1 rounded">
          {slideNumber}
        </div>
      )}
      <div className="w-full h-full relative">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer; 