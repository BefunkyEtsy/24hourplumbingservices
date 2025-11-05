import React from 'react';
import { FacebookIcon, InstagramIcon, WrenchScrewdriverIcon } from './icons.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-blue-200 pt-16 pb-8 sm:pt-20">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">24 Hour Plumbing Services</h3>
            </div>
            <p className="max-w-md">Your trusted local experts for all plumbing emergencies. Serving your city and surrounding areas 24/7, 365 days a year. Your safety is our priority.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li><a href="tel:07746644003" className="hover:text-white">Phone: 07746644003</a></li>
              <li><a href="mailto:emergency@24hrplumbing.example.com" className="hover:text-white">Email: emergency@24hrplumbing.example.com</a></li>
              <li>Address: 123 Plumber Lane, Your City, PC1 2DE</li>
               <li><a href="#" className="hover:text-white">View on Map</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Related Services</h4>
             <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Emergency Electrician</a></li>
              <li><a href="#" className="hover:text-white">Gas & Heating</a></li>
              <li><a href="#" className="hover:text-white">Drainage Services</a></li>
            </ul>
            <div className="flex gap-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-800 pt-6 text-center text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} 24 Hour Plumbing Services. All Rights Reserved.</p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;