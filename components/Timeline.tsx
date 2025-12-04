import React from 'react';
import { Calendar } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">21 Days to Value. Not Next Quarter.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most enterprise implementations take months. We get your first workflow automated in 2 weeks and full deployment in 3 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-30 -z-10"></div>

            {[
                { week: "Week 1", title: "Assessment", desc: "We map your biggest timewasters." },
                { week: "Week 2", title: "Automation", desc: "First workflow automated." },
                { week: "Week 3", title: "Deployment", desc: "Full deployment." }
            ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-brand/10 text-center relative">
                    <div className="w-12 h-12 bg-brand text-gray-900 font-bold rounded-full flex items-center justify-center mx-auto mb-6 text-xl shadow-md z-20 relative">
                        {idx + 1}
                    </div>
                    <h3 className="text-brand-dark font-bold uppercase tracking-wider text-sm mb-2">{step.week}</h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};