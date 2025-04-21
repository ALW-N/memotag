import React from 'react';
import { AnimatedTestimonials } from '../ui/animated-testimonials'; 
import testimonialImage1 from '../../assets/p2.jpg';
import testimonialImage2 from '../../assets/p1.jpg';
import testimonialImage3 from '../../assets/p3.jpg';

import StatsSection from '../ui/StatsSection'; // Make sure this path is correct

const Problem = () => {
  const testimonials = [
    {
      quote: "This is an amazing product! It has changed the way we do business.",
      name: "John Doe",
      designation: "CEO of Company X",
      src: testimonialImage1 || "https://via.placeholder.com/500",
    },
    {
      quote: "A game changer! The best solution we've used in years.",
      name: "Jane Smith",
      designation: "CTO of Company Y",
      src: testimonialImage2 || "https://via.placeholder.com/500",
    },
    {
      quote: "Incredible service and fantastic support. Highly recommend!",
      name: "Mike Johnson",
      designation: "Lead Developer at Company Z",
      src: testimonialImage3 || "https://via.placeholder.com/500",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-24 py-12 space-y-12 ">
      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Heading */}
      <h1 className="text-5xl font-semibold text-center">Gratitude Shared by Our Supporters</h1>

      {/* Testimonials Slider */}
      <AnimatedTestimonials 
        testimonials={testimonials} 
        autoplay={true}  
      />
    </div>
  );
};

export default Problem;
