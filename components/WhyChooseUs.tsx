import React from 'react';
import { Cpu, LayoutDashboard, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    { 
      title: "AI-Assisted Planning", 
      desc: "We utilize proprietary generative scheduling models to predict delays before they happen, ensuring 99% on-time delivery.",
      icon: Cpu
    },
    { 
      title: "Digital Dashboard", 
      desc: "Real-time transparency. Access drone footage, material logs, and daily progress reports via our secure client portal.",
      icon: LayoutDashboard 
    },
    { 
      title: "Zero-Compromise QC", 
      desc: "Automated quality checks at every milestone. If it doesn't meet the micron-level spec, it doesn't get built.",
      icon: ShieldCheck 
    }
  ];

  return (
    <section id="advantage" className="py-32 bg-nexus-black relative border-t border-nexus-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-nexus-orange font-bold tracking-[0.2em] uppercase text-xs mb-4">The Nexus Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              FUTURE<br />PROOF.
            </h3>
            <p className="text-xl text-nexus-muted leading-relaxed mb-12 max-w-lg">
              Construction is no longer just about concrete and steel. It's about data, precision, and efficiency. 
              We are a technology company that builds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {advantages.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-nexus-dark border border-nexus-border flex items-center justify-center group-hover:border-nexus-orange transition-colors">
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-nexus-orange transition-colors">{item.title}</h4>
                  <p className="text-nexus-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};