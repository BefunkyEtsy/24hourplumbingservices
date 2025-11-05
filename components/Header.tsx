
import React from 'react';
import { WrenchScrewdriverIcon, PhoneIcon } from './icons';

interface HeaderProps {
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <WrenchScrewdriverIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-800">24 Hour Plumbing</span>
          </div>
          <a href={`tel:${phoneNumber}`} className="hidden md:flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            <PhoneIcon className="w-5 h-5" />
            <span>{phoneNumber}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
