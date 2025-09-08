'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-purple-300 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset rounded-3xl transition-all duration-200 hover:bg-purple-50/50"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-black text-purple-800 tracking-wide">
            {title}
          </h3>
          <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
