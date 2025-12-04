import React from 'react';
import { Button } from './ui/Button';
import { Mail, Phone, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Empower Your Enterprise Now with Ixer.</h2>
            <p className="text-xl text-gray-300 mb-8">
              ROI isn't a "someday" metric. It's a 3-6 month reality. Let's assess your business and calculate your specific savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button variant="primary" size="lg">
                 Book Your Strategy Call
               </Button>
               <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
                 Download Case Studies
               </Button>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-300">
                <Mail className="w-6 h-6 mr-4 text-brand" />
                <span>hello@ixer.ai</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-6 h-6 mr-4 text-brand" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <FileText className="w-6 h-6 mr-4 text-brand" />
                <span>Download Full Case Studies PDF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ixer AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">GDPR Commitment</a>
          </div>
        </div>
      </div>
    </footer>
  );
};