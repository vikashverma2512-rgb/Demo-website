import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Crores Value Created", value: 500, prefix: "₹", suffix: "Cr" },
  { label: "Safety Incidents", value: 0, suffix: "" },
  { label: "Client Rating", value: 4.9, suffix: "/5", isDecimal: true },
];

const Counter = ({ value, prefix = "", suffix = "", isDecimal = false }: { value: number, prefix?: string, suffix?: string, isDecimal?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Spring physics for smooth counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const displayValue = useTransform(springValue, (current) => {
    if (isDecimal) return current.toFixed(1);
    return Math.round(current).toString();
  });

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [displayValue, prefix, suffix]);

  return <span ref={ref} className="tabular-nums" />;
};

export const TrustSignals: React.FC = () => {
  return (
    <div className="bg-nexus-black border-y border-nexus-border relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-nexus-border border-x border-nexus-border">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="py-16 px-6 flex flex-col items-center justify-center text-center group hover:bg-nexus-card/50 transition-colors duration-500 cursor-default"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-nexus-orange transition-colors">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <span className="text-nexus-muted text-xs uppercase tracking-[0.2em] font-medium group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};