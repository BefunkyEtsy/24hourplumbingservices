import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import RapidResponse from './components/RapidResponse.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Testimonials from './components/Testimonials.tsx';
import GetHelp from './components/GetHelp.tsx';
import Team from './components/Team.tsx';
import FAQ from './components/FAQ.tsx';
import Resources from './components/Resources.tsx';
import Footer from './components/Footer.tsx';
import { PhoneIcon } from './components/icons.tsx';

const App: React.FC = () => {
  const phoneNumber = "07746644003";

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header phoneNumber={phoneNumber} />
      <main>
        <Hero phoneNumber={phoneNumber} />
        <RapidResponse />
        <WhyChooseUs />
        <Testimonials />
        <GetHelp phoneNumber={phoneNumber} />
        <Team />
        <FAQ />
        <Resources />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-red-600 text-white p-3 shadow-lg z-50 flex items-center justify-center">
        <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-lg font-bold">
          <PhoneIcon className="w-6 h-6" />
          <span>EMERGENCY? CALL NOW</span>
        </a>
      </div>
    </div>
  );
};

export default App;