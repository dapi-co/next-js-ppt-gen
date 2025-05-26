import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const Slide02: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Key Applications of AI in Medicine
        </h2>
        <ul className="list-disc space-y-6 text-xl text-gray-700 ml-8">
          <li>
            <span className="font-semibold">Diagnostic Imaging:</span> AI-powered analysis of X-rays, MRIs, and CT scans
          </li>
          <li>
            <span className="font-semibold">Disease Detection:</span> Early identification of conditions through pattern recognition
          </li>
          <li>
            <span className="font-semibold">Drug Discovery:</span> Accelerating pharmaceutical research and development
          </li>
          <li>
            <span className="font-semibold">Personalized Medicine:</span> Tailoring treatments based on patient data
          </li>
        </ul>
      </div>
    </SlideContainer>
  );
};

export default Slide02; 