import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-nexus-black pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Structure" 
            className="w-full h-full object-cover grayscale brightness-[0.4]"
          />
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-black via-nexus-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-transparent to-transparent" />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Technical Decorators */}
      <div className="absolute top-32 left-8 md:left-12 opacity-30 hidden md:block">
         <Plus className="w-4 h-4 text-white" />
      </div>
      <div className="absolute bottom-32 right-8 md:right-12 opacity-30 hidden md:block">
         <Plus className="w-4 h-4 text-white" />
      </div>
      <div className="absolute top-1/3 right-0 w-32 h-[1px] bg-white/20 hidden md:block"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                 <div className="w-2 h-2 bg-nexus-orange rounded-full animate-pulse"></div>
                 <div className="w-2 h-2 bg-nexus-orange/50 rounded-full"></div>
              </div>
              <span className="text-nexus-orange font-mono text-xs tracking-[0.3em] uppercase">System Online // v.4.0</span>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
              className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10"
            >
              BUILDING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">REALITY.</span>
            </motion.h1>
            
            <motion.div 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="h-[1px] w-24 bg-nexus-orange mb-10"
            ></motion.div>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-nexus-muted mb-12 max-w-2xl font-light leading-relaxed tracking-wide"
            >
              We engineer the skyline. Premium infrastructure and luxury developments for the world's most visionary clients.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button size="xl" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Project <ArrowRight className="ml-3 w-5 h-5" />
                </span>
              </Button>
              <Button size="xl" variant="outline" className="group backdrop-blur-sm">
                Explore Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-nexus-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-nexus-orange to-transparent"></div>
      </motion.div>
    </section>
  );
};