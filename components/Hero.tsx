import React from 'react';
import { PhoneIcon } from './icons';

interface HeroProps {
  phoneNumber: string;
}

const Hero: React.FC<HeroProps> = ({ phoneNumber }) => {
  return (
    <section className="relative bg-blue-800 text-white py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/1200/800?blur=2&grayscale')" }}></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <a href={`tel:${phoneNumber}`} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight inline-block mb-4 p-3 bg-white text-blue-800 rounded-lg shadow-xl hover:scale-105 transition-transform">
          Call Emergency Hotline: {phoneNumber}
        </a>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-4">
          Emergency Plumbers Available <span className="text-red-400">24/7</span>
          <br className="hidden sm:block" />
          Fast Response in Your City
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
          15 Years’ Trusted Service — Local, Reliable, Safe
        </p>
        <a 
          href={`tel:${phoneNumber}`} 
          className="inline-block bg-red-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-red-700 transition-all transform hover:scale-110 duration-300 ease-in-out"
        >
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-6 h-6" />
            <span>Get Emergency Help Now</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;