import React from 'react';
import { Button } from './ui/Button';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-nexus-black text-white pt-32 pb-12 border-t border-nexus-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nexus-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block p-1 px-3 border border-nexus-orange/30 rounded-full bg-nexus-orange/5 backdrop-blur-sm mb-8">
             <h2 className="text-nexus-orange font-mono tracking-widest uppercase text-xs">Start The Conversation</h2>
          </div>
          
          <h3 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.9]">
            READY TO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">BUILD?</span>
          </h3>
          
          <div className="flex flex-col items-center gap-10 mb-32">
            <Button size="xl" className="text-lg px-16 py-6 h-auto shadow-[0_0_50px_-10px_rgba(255,87,34,0.3)] hover:shadow-[0_0_70px_-10px_rgba(255,87,34,0.5)] transition-shadow duration-500">
              Schedule Consultation
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 text-center border-t border-nexus-border pt-10">
               <div>
                  <p className="text-xs text-nexus-muted uppercase tracking-widest mb-2">Email</p>
                  <p className="text-lg font-bold">hello@nexusbuilds.com</p>
               </div>
               <div>
                  <p className="text-xs text-nexus-muted uppercase tracking-widest mb-2">Phone</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
               </div>
               <div>
                  <p className="text-xs text-nexus-muted uppercase tracking-widest mb-2">Office</p>
                  <p className="text-lg font-bold">Mumbai • Delhi • Bangalore</p>
               </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-nexus-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white text-nexus-black flex items-center justify-center font-bold text-xs">N</div>
            <p className="text-nexus-muted text-xs uppercase tracking-widest">© 2024 NEXUS BUILDS INC.</p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-nexus-muted">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};