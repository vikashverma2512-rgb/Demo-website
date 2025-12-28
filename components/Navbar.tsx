import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-nexus-black/90 backdrop-blur-xl border-nexus-border py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-white text-nexus-black flex items-center justify-center font-black text-xl group-hover:bg-nexus-orange group-hover:text-white transition-colors">
              N
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-nexus-muted transition-colors">
              NEXUS<span className="text-nexus-orange">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Work', 'Advantage'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-xs font-bold text-nexus-muted hover:text-white uppercase tracking-[0.2em] transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-nexus-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-4 w-[1px] bg-nexus-border"></div>
            <Button size="sm" variant="outline" onClick={(e) => scrollToSection(e, 'contact')} className="hover:bg-nexus-orange hover:border-nexus-orange">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-nexus-orange transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-nexus-black border-t border-nexus-border z-40">
          <div className="px-6 py-8 flex flex-col gap-8">
            {['Expertise', 'Work', 'Advantage', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-black text-white hover:text-nexus-orange uppercase tracking-tight"
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};