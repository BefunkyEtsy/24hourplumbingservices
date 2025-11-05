import React from 'react';
import { BoltIcon, WaterIcon, WrenchIcon, BlockIcon } from './icons';

const scenarios = [
  { icon: <WaterIcon className="w-10 h-10 text-blue-500" />, title: "Burst Pipes & Leaks", description: "Immediate response to prevent water damage." },
  { icon: <WaterIcon className="w-10 h-10 text-blue-500" />, title: "Major Flooding", description: "Quick action to control and mitigate flooding." },
  { icon: <BlockIcon className="w-10 h-10 text-blue-500" />, title: "Blocked Drains", description: "Clearing stubborn blockages fast." },
  { icon: <WrenchIcon className="w-10 h-10 text-blue-500" />, title: "Boiler Breakdowns", description: "No heating or hot water? We'll fix it." },
];

const RapidResponse: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Our Rapid Response Promise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We understand the urgency. Expect courteous, uniformed staff and clear, up-front pricing with no hidden fees.</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-blue-600 text-white rounded-lg shadow-xl p-6 text-center animate-pulse w-full max-w-md">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BoltIcon className="w-8 h-8"/>
              <span className="text-2xl font-bold">Time to Arrival</span>
            </div>
            <p className="text-4xl font-extrabold">Within 1 Hour!</p>
            <p className="text-sm opacity-90">(in most cases)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{scenario.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RapidResponse;