import React from 'react';
import { CASE_STUDIES } from '../constants';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Impact. Measured in Growth.</h2>
          <p className="text-xl text-gray-600">We don't sell promises. We deliver transformations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand-dark text-xs font-bold uppercase tracking-wide">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
              
              <div className="space-y-4 text-sm flex-grow">
                <div>
                  <span className="font-bold text-red-500 block mb-1">The Problem:</span>
                  <p className="text-gray-600">{study.problem}</p>
                </div>
                <div>
                  <span className="font-bold text-brand-dark block mb-1">The Ixer Solution:</span>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <span className="font-bold text-green-600 block mb-1">The Outcome:</span>
                  <p className="text-gray-900 font-medium">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};