import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/10 text-brand-dark text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-dark mr-2"></span>
          Augmenting Minds. Building the Future.
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 max-w-5xl mx-auto leading-tight">
          Stop drowning in data. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-purple-600">
            Start empowering your enterprise.
          </span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          Your team was hired to innovate, not to wrestle with data entry or search through thousands of documents. 
          Ixer transforms your chaotic information—from invoices to technical manuals—into a streamlined engine for growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'})}>
            Schedule Your Custom Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <a href="#case-studies" className="text-gray-600 font-semibold hover:text-brand-dark flex items-center px-6 py-3 transition-colors">
            Explore Case Studies <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500 font-medium">
          <span className="flex items-center"><span className="text-green-500 mr-2">✓</span> Live in 21 Days</span>
          <span className="flex items-center"><span className="text-green-500 mr-2">✓</span> GDPR Compliant</span>
          <span className="flex items-center"><span className="text-green-500 mr-2">✓</span> Zero Migration Required</span>
        </div>
      </div>
    </section>
  );
};