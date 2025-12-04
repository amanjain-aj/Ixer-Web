import React from 'react';
import { CLIENT_LOGOS } from '../constants';

export const Clients: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by Forward-Thinking Enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {CLIENT_LOGOS.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Placeholder for Logos - replacing images with styled text for reliability in this demo */}
              <div className="h-12 px-4 flex items-center justify-center bg-gray-50 rounded border border-gray-200 min-w-[120px]">
                <span className="font-bold text-gray-400 text-lg">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};