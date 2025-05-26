import React from 'react';
import Slide01 from './slide-01';
import Slide02 from './slide-02';
import Slide03 from './slide-03';
import Slide04 from './slide-04';
import Slide05 from './slide-05';

// Define the type for slide components
export type SlideComponent = React.FC;

export const slides: SlideComponent[] = [Slide01, Slide02, Slide03, Slide04, Slide05];
export const totalSlides = slides.length;

export default slides; 