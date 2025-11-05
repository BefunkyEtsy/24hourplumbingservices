
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RapidResponse from './components/RapidResponse';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GetHelp from './components/GetHelp';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { PhoneIcon } from './components/icons';

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
