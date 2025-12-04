import React from 'react';
import { FileText, BrainCircuit, CheckCircle2 } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Two Core Solutions. One Recursive Brain.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Solution 1 */}
          <div className="bg-brand-bg rounded-3xl p-8 md:p-12 border border-brand/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm text-brand-dark mr-4">
                    <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Document Intelligence</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              Turn static documents into dynamic data. We don't just "read" text; we understand context, and validate information.
            </p>

            <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                    <CheckCircle2 className="text-brand-dark mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Capabilities:</strong> Multi-format handling, Automated 3-way matching, Fraud detection.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle2 className="text-brand-dark mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>The Result:</strong> From 22% error rates to near-perfect accuracy.</span>
                </li>
            </ul>
          </div>

          {/* Solution 2 */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden text-white group">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

             <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800 rounded-xl shadow-sm text-brand mr-4">
                    <BrainCircuit size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Knowledge Management</h3>
            </div>

            <p className="text-lg text-gray-300 mb-8">
              Stop searching. Start knowing. Ingest your entire knowledge base—regulatory docs, code repos, safety manuals—and chat with it in natural language.
            </p>

            <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                    <CheckCircle2 className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300"><strong>Capabilities:</strong> Role-based access, Source citations, Auto-indexing.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle2 className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300"><strong>The Result:</strong> Information retrieval drops from 5+ minutes to under 10 seconds.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};