import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const Slide01: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full p-12 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">
          AI in Medicine
        </h1>
        <h2 className="text-3xl text-gray-600 font-light">
          Transforming Healthcare Through Artificial Intelligence
        </h2>
        <div className="mt-12 text-lg text-gray-500">
          A Comprehensive Overview
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide01; 