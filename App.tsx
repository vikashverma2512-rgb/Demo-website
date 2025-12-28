import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-nexus-black text-white relative selection:bg-nexus-orange selection:text-white">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}>
      </div>

      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <Portfolio />
        <WhyChooseUs />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;