import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const Slide05: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          The Future of AI in Medicine
        </h2>
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-2xl text-gray-700 space-y-6">
            <p className="leading-relaxed">
              AI is set to revolutionize healthcare through:
            </p>
            <ul className="list-disc ml-8 space-y-4">
              <li>Advanced predictive analytics for disease prevention</li>
              <li>Robot-assisted surgery and automation</li>
              <li>Real-time health monitoring and intervention</li>
              <li>Precision medicine and genomic analysis</li>
            </ul>
          </div>
          <div className="mt-12 text-xl text-blue-600 font-semibold text-center">
            "The future of healthcare is intelligent, personalized, and data-driven"
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide05; 