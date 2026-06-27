import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const areas = [
  "Dallas County",
  "Tarrant County",
  "Collin County",
  "Denton County",
  "Rockwall County",
  "Kaufman County",
  "Ellis County",
  "Johnson County",
  "Parker County",
  "Wise County",
];

export function AreasWeServe() {
  return (
    <section className="relative z-30 bg-[#1c1917] py-20 lg:py-32 overflow-hidden border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left column */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-5/12"
        >
          <div className="inline-block bg-amber-600 px-3 py-1 mb-6">
            <span className="text-stone-50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Service Areas</span>
          </div>

          <h2 className="font-western text-5xl sm:text-6xl md:text-[4.5rem] font-bold text-stone-200 leading-[0.85] tracking-tight mb-8 uppercase">
            REPRESENTING <br/>
            <span className="text-amber-500">TEXAS</span>
          </h2>
          
          <div className="w-16 h-1 bg-amber-600 mb-8"></div>
          
          <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-medium mb-10">
            When you're fighting for justice, distance shouldn't stand in your way. We aggressively represent clients across the entire Dallas-Fort Worth Metroplex.
          </p>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-amber-700/20 border border-amber-600/30 rounded flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
              <MapPin className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-stone-300 uppercase tracking-widest text-xs font-bold group-hover:text-amber-500 transition-colors">Find Your City</p>
              <p className="text-stone-500 text-sm italic">Not listed? Call us to confirm.</p>
            </div>
          </div>
        </motion.div>

        {/* Right column - Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-7/12 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between p-6 bg-[#1a1816] border border-stone-800 hover:border-amber-600/50 hover:bg-stone-900/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-900/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-stone-700 group-hover:bg-amber-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300"></div>
                  <span className="text-stone-300 group-hover:text-white font-bold uppercase tracking-wider text-sm transition-colors duration-300">
                    {area}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Decorative faint background element behind grid */}
          <div className="absolute -top-12 -right-12 w-64 h-64 border-[40px] border-stone-800/20 rounded-full blur-[10px] pointer-events-none z-[-1]"></div>
        </motion.div>
      </div>
    </section>
  );
}
