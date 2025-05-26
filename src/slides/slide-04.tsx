import React from 'react';
import SlideContainer from '@/components/SlideContainer';

const Slide04: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Challenges & Considerations
        </h2>
        <div className="flex flex-col space-y-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-800 mb-2">Data Privacy & Security</h3>
            <p className="text-gray-700">Ensuring protection of sensitive patient information</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Ethical Considerations</h3>
            <p className="text-gray-700">Addressing bias in AI algorithms and maintaining human oversight</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Integration Challenges</h3>
            <p className="text-gray-700">Implementing AI systems within existing healthcare infrastructure</p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide04; 