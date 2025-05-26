import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const Slide03: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Benefits of AI in Healthcare
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Improved Accuracy</h3>
            <p className="text-gray-700">Reduced human error in diagnosis and treatment planning</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Time Efficiency</h3>
            <p className="text-gray-700">Faster analysis and decision-making processes</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Cost Reduction</h3>
            <p className="text-gray-700">Optimized resource allocation and reduced operational costs</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">Accessibility</h3>
            <p className="text-gray-700">Improved access to healthcare services in remote areas</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide03; 