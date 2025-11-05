
import React from 'react';
import { LightBulbIcon } from './icons';

const tips = [
  { title: "If you have a burst pipe...", content: "Turn off your main water supply immediately. The stopcock is usually under the kitchen sink or where the service pipe enters your home. Then, turn on all your cold taps to drain the system." },
  { title: "For a serious leak...", content: "Place a bucket under the leak to catch water. If the leak is near electrics, turn off your electricity at the fuse box if it's safe to do so. Do not touch wet electrical fittings." },
  { title: "If a drain is blocked...", content: "Avoid using chemical drain cleaners as they can damage pipes. Do not flush toilets if you suspect a sewage backup, as this can cause flooding." },
];

const Resources: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Helpful Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">What to do right now, before your plumber arrives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
              <div className="flex items-center gap-4 mb-4">
                <LightBulbIcon className="w-8 h-8 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
              </div>
              <p className="text-gray-700">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
