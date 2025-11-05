import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './icons';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqs: FAQItemProps[] = [
  {
    question: "How quickly can you get to me?",
    answer: "Our goal is to be with you within one hour for all emergency callouts in our service area. Traffic and demand can sometimes affect this, but we will always give you an accurate ETA when you call."
  },
  {
    question: "What counts as a plumbing emergency?",
    answer: "An emergency is any plumbing issue that poses an immediate risk to your property or safety. This includes burst pipes, major leaks, flooding, sewage backups, and having no water at all."
  },
  {
    question: "Are your prices transparent?",
    answer: "Absolutely. We believe in up-front, honest pricing. We will explain the costs involved before any work begins, so there are no surprises. We have a clear emergency call-out fee and an hourly rate."
  },
  {
    question: "What payment types do you accept?",
    answer: "We accept all major credit and debit cards, as well as bank transfers. Payment is due upon completion of the work."
  },
  {
    question: "Are your plumbers certified and insured?",
    answer: "Yes, all our engineers are fully certified, insured, and highly experienced in emergency plumbing repairs. Your safety and property are our top priorities."
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <ChevronUpIcon className="w-6 h-6 text-blue-600" /> : <ChevronDownIcon className="w-6 h-6 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;