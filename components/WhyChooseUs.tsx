
import React from 'react';
import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon, StarIcon, UserGroupIcon } from './icons';

const features = [
  { icon: <ClockIcon className="w-8 h-8 text-white" />, text: "True 24/7 Availability" },
  { icon: <ShieldCheckIcon className="w-8 h-8 text-white" />, text: "Safety-First Repairs" },
  { icon: <StarIcon className="w-8 h-8 text-white" />, text: "15+ Years' Experience" },
  { icon: <UserGroupIcon className="w-8 h-8 text-white" />, text: "Certified Emergency Plumbers" },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us in an Emergency?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">When disaster strikes, you need a team you can trust. We are dedicated to providing safe, reliable, and fast solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-blue-700 p-4 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-full">{feature.icon}</div>
                <span className="font-semibold text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-900/50 p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-4">
              <CheckBadgeIcon className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Our Guarantee of Quality</h3>
                <p className="text-blue-200">All our emergency repairs are fully guaranteed. We stand by our workmanship, ensuring your peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheckIcon className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Accredited & Insured</h3>
                <p className="text-blue-200">We are fully insured and accredited by leading industry bodies, so you can be sure you're in safe hands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
