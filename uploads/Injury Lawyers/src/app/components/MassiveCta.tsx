import React from 'react';
import { Gavel } from 'lucide-react';
import { motion } from 'motion/react';

export function MassiveCta() {
  return (
    <section className="relative z-30 bg-[#161412] w-full py-32 md:py-48 border-t border-stone-900 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Huge Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="font-western text-[15vw] md:text-[20vw] leading-none font-black text-white whitespace-nowrap tracking-tighter">
          JUSTICE
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <p className="text-xl md:text-3xl text-stone-200 font-medium mb-12 leading-relaxed">
          Every year, thousands of people settle for less than they deserve. <br className="hidden md:block" />
          <span className="text-amber-500 font-bold">Don't be one of them.</span>
        </p>
        
        <button className="px-10 py-5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold rounded flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(217,119,6,0.3)] uppercase tracking-[0.2em] text-sm group">
          <Gavel className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
          Get Your Free Consultation
        </button>
      </motion.div>
    </section>
  );
}
