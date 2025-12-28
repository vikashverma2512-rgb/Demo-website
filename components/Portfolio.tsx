import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'THE OBSIDIAN TOWER', 
    location: 'Mumbai, India', 
    category: 'Commercial', 
    year: '2023',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2'
  },
  { 
    id: 2, 
    title: 'VECTOR RESIDENCE', 
    location: 'Bangalore, India', 
    category: 'Residential', 
    year: '2023',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop',
    size: 'col-span-1'
  },
  { 
    id: 3, 
    title: 'NEXUS LOGISTICS HUB', 
    location: 'Delhi NCR', 
    category: 'Industrial', 
    year: '2022',
    img: 'https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?q=80&w=1260&auto=format&fit=crop',
    size: 'col-span-1'
  },
  { 
    id: 4, 
    title: 'VERTEX COMPLEX', 
    location: 'Hyderabad, India', 
    category: 'Mixed Use', 
    year: '2024',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-nexus-dark relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-nexus-orange font-mono tracking-[0.2em] uppercase text-xs mb-4">Selected Works</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white">BUILT TO LAST.</h3>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
             <span className="text-nexus-muted text-sm font-mono hidden md:block">01 — 04</span>
             <Button variant="outline" className="hidden md:flex">View Full Archive</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-nexus-black min-h-[500px] ${project.size} cursor-pointer`}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-40" 
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0">
                   <span className="px-3 py-1 bg-nexus-orange text-white text-xs font-bold uppercase tracking-wider">{project.category}</span>
                   <span className="text-white font-mono text-xs">{project.year}</span>
                </div>

                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl md:text-4xl font-black text-white leading-none mb-2">{project.title}</h4>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm font-mono mt-4 flex items-center gap-2">
                      {project.location} <ArrowRight className="w-4 h-4 text-nexus-orange" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-nexus-orange/50 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Button variant="outline" className="w-full">View Full Archive</Button>
        </div>
      </div>
    </section>
  );
};