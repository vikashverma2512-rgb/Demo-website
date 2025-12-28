import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Robert Fox",
    role: "CEO, Fox Logistics",
    content: "The Apex team transformed our aging warehouse into a state-of-the-art distribution center. They finished 2 weeks ahead of schedule and under budget. Extremely professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "Building a custom home is stressful, but Apex made it seamless. The project manager communicated every step of the way. The craftsmanship is flawless.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Director of Public Works",
    content: "We hired Apex for a major civil infrastructure project. Their engineering team is top-tier. They navigated complex regulatory requirements with ease.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-apex-orange font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
        <h3 className="text-4xl font-extrabold text-apex-dark mb-12">What Our Clients Say</h3>

        <div className="relative bg-apex-concrete rounded-2xl p-8 md:p-12 shadow-lg">
          <Quote className="w-16 h-16 text-apex-gold/20 absolute top-8 left-8" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-apex-gold fill-current" />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-light italic text-gray-700 mb-8 leading-relaxed">
              "{reviews[current].content}"
            </p>

            <div>
              <h4 className="font-bold text-lg text-apex-dark">{reviews[current].name}</h4>
              <p className="text-apex-orange text-sm font-semibold uppercase">{reviews[current].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-apex-orange transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-apex-orange transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};