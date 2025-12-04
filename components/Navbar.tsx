import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Why Ixer', href: '#difference' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center">
                 <span className="text-gray-900 font-bold text-xl">I</span>
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">Ixer</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-gray-600 hover:text-brand-dark font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'})}>
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-brand-dark hover:bg-brand-bg rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button fullWidth onClick={() => {
                setIsOpen(false);
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'});
              }}>
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};