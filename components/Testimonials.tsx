
import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  { name: "Sarah J.", location: "City Centre", quote: "Called at 2 AM with a burst pipe. They were here in 45 minutes and stopped the flooding. Absolute lifesavers!", rating: 5 },
  { name: "Mark T.", location: "West End", quote: "Professional, polite, and explained everything clearly. The price was exactly as quoted. Highly recommend.", rating: 5 },
  { name: "Emily R.", location: "South Side", quote: "I was so stressed, but their calm and efficient manner really helped. The problem was fixed faster than I thought possible.", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">We're proud of our fast, reliable, and professional service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-700 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
