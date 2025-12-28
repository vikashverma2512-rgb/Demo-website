import React from 'react';
import { Building, Home, Factory, ArrowUpRight, DraftingCompass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const services = [
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Infrastructure',
    description: 'High-rise complexes, corporate HQs, and retail hubs engineered for maximum efficiency.',
    icon: Building,
  },
  {
    id: 'residential',
    title: 'Luxury',
    subtitle: 'Residential',
    description: 'Bespoke modern villas and high-end apartment complexes. Precision detailing.',
    icon: Home,
  },
  {
    id: 'industrial',
    title: 'Industrial',
    subtitle: 'Engineering',
    description: 'Heavy civil works, warehousing, and site development. Robust infrastructure.',
    icon: Factory,
  }
];

export const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-nexus-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nexus-dark to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <DraftingCompass className="text-nexus-orange w-5 h-5" />
               <h2 className="text-nexus-orange font-mono tracking-[0.2em] uppercase text-xs">Our Expertise</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              ENGINEERING<br />
              <span className="text-nexus-muted/50">EXCELLENCE.</span>
            </h3>
          </div>
          <Button variant="outline" className="hidden md:flex mt-6 md:mt-0">View All Services</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              className="group relative bg-nexus-dark/50 border border-nexus-border p-10 hover:border-nexus-orange/50 transition-all duration-500 flex flex-col justify-between h-[450px] overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-nexus-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-nexus-black border border-nexus-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-nexus-orange transition-all duration-300 rounded-sm">
                  <service.icon className="w-6 h-6 text-white group-hover:text-nexus-orange transition-colors" />
                </div>
                
                <h4 className="text-4xl font-black text-white mb-1 tracking-tight">
                  {service.title}
                </h4>
                <h4 className="text-4xl font-black text-nexus-muted/40 mb-6 tracking-tight group-hover:text-white/80 transition-colors">
                  {service.subtitle}
                </h4>
                
                <p className="text-nexus-muted leading-relaxed max-w-xs border-l-2 border-nexus-border pl-4 group-hover:border-nexus-orange transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="relative z-10 flex justify-end">
                <div className="p-3 rounded-full bg-nexus-black border border-nexus-border group-hover:bg-nexus-orange group-hover:border-nexus-orange transition-colors cursor-pointer">
                   <ArrowUpRight className="text-white w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};