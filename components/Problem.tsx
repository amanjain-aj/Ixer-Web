import React from 'react';
import { Clock, Database, AlertTriangle } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "The Data Entry Trap",
      description: "High-value employees wasting 40 hours a week on manual extraction."
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: "The Knowledge Silo",
      description: "Critical procedures buried in 50,000+ documents, taking days to find."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "The Accuracy Gap",
      description: "Human error in complex workflows leading to compliance risks and financial loss."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Silent Cost of "Business as Usual"</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Is your operational friction eating your margins? In the modern enterprise, information is the lifeblood, but accessing it is the bottleneck.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-lg font-medium text-gray-900">You don't need more people. You need <span className="text-brand-dark font-bold">Augmented Minds.</span></p>
        </div>
      </div>
    </section>
  );
};