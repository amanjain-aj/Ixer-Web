import React from 'react';
import { Cpu, Zap, Users } from 'lucide-react';

export const Difference: React.FC = () => {
  return (
    <section id="difference" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Ixer?</h2>
          <p className="text-xl text-gray-600">Because Generic AI isn't Enough for Your Business.</p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand text-gray-900">
                <Cpu size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Recursive Learning (We Learn Your Context)</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Generic AI gives generic results. Ixer gets smarter with every document and conversation. 
                It learns <span className="font-semibold text-brand-dark">your terminology, your exceptions, and your edge cases</span> to become your specific expert.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gray-900 text-brand">
                <Zap size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero Migration (We Fit Your Stack)</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Don't rip and replace. Ixer connects directly to your existing CRM, ERP, and databases. 
                You built your tech stack; we just make it smarter.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand text-gray-900">
                <Users size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Human + AI (We Elevate, Not Replace)</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ixer handles the repetitive grunt work. Your team handles judgment, creativity, and strategy. 
                We elevate people; we don't replace them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};