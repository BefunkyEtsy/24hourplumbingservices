import React, { useState } from 'react';
import { PhoneIcon, WhatsAppIcon } from './icons';

interface GetHelpProps {
  phoneNumber: string;
}

const GetHelp: React.FC<GetHelpProps> = ({ phoneNumber }) => {
  const [formData, setFormData] = useState({ name: '', postcode: '', issue: '', urgency: 'emergency' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="get-help" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">How to Get Help Fast</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the method that's easiest for you. For the fastest response, please call us directly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <a href={`tel:${phoneNumber}`} className="w-full text-center bg-red-600 text-white p-6 rounded-lg shadow-lg hover:bg-red-700 transition-colors">
              <PhoneIcon className="w-10 h-10 mx-auto mb-3" />
              <span className="text-2xl font-bold block">Click to Call Now</span>
              <span className="block">{phoneNumber}</span>
            </a>
            <a href={`https://wa.me/${phoneNumber.replace(/^0/, '44')}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition-colors">
              <WhatsAppIcon className="w-10 h-10 mx-auto mb-3" />
              <span className="text-2xl font-bold block">Message on WhatsApp</span>
              <span className="block">Fast & Easy Contact</span>
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Or, Use Our Fast Web Form</h3>
            {submitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
                <p className="font-bold">Thank You!</p>
                <p>Your request has been received. We will call you back shortly to confirm.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode</label>
                  <input type="text" name="postcode" id="postcode" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={formData.postcode} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Describe the Issue</label>
                  <textarea name="issue" id="issue" rows={3} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={formData.issue} onChange={handleChange}></textarea>
                </div>
                 <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Urgency</label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        <option value="emergency">Emergency - I need help NOW</option>
                        <option value="urgent">Urgent - Within 24 hours</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">Request Emergency Call Back</button>
              </form>
            )}
             <p className="text-xs text-gray-500 mt-4">We respect your privacy and will never share your details. By submitting this form, you agree to our terms of service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;