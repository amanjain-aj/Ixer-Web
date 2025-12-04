import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Problem } from './components/Problem';
import { Solutions } from './components/Solutions';
import { CaseStudies } from './components/CaseStudies';
import { Difference } from './components/Difference';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Problem />
        <Solutions />
        <CaseStudies />
        <Difference />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;