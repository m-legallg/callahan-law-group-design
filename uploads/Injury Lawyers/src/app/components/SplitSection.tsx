import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SplitSectionProps {
  badge?: string;
  titlePrimary: string;
  titleSecondary: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  buttonText?: string;
  listTitle?: string;
  features?: {
    title: string;
    description: string;
  }[];
  listStyle?: 'numbers' | 'checkmarks';
}

export function SplitSection({
  badge,
  titlePrimary,
  titleSecondary,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  buttonText = 'Learn More',
  listTitle,
  features,
  listStyle = 'numbers'
}: SplitSectionProps) {
  return (
    <section className="relative z-30 bg-[#110f0e] w-full min-h-screen border-t border-stone-900 overflow-hidden flex flex-col lg:flex-row items-center py-20 lg:py-0">
      
      {/* Image Half */}
      <motion.div 
        initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative flex items-center justify-center p-6 lg:p-16 xl:p-24 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}
      >
        
        {/* Constrained Image Wrapper */}
        <div className="relative w-full max-w-2xl aspect-[3/4] lg:aspect-[4/5] group overflow-visible">
          {/* Main Image */}
          <div className="absolute inset-0 overflow-hidden rounded-sm bg-stone-900 border border-stone-800/50 shadow-2xl z-10">
            <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Decorative Corner Element */}
          <div className={`absolute -bottom-6 ${imagePosition === 'left' ? '-right-6' : '-left-6'} w-32 md:w-48 h-32 md:h-48 border-b-2 ${imagePosition === 'left' ? 'border-r-2' : 'border-l-2'} border-amber-600/30 z-0`}></div>
          
          {/* Accent Line behind image */}
          <div className={`absolute top-12 bottom-12 ${imagePosition === 'left' ? '-right-12' : '-left-12'} w-px bg-stone-800 z-0 hidden lg:block`}></div>
        </div>

      </motion.div>

      {/* Content Half */}
      <motion.div 
        initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:py-0 ${imagePosition === 'left' ? 'lg:pl-16 xl:pl-24 lg:pr-12' : 'lg:pr-16 xl:pr-24 lg:pl-12'}`}
      >
        <div className="max-w-2xl w-full mx-auto lg:mx-0">
          
          {badge && (
            <div className="inline-block bg-amber-600 px-3 py-1 mb-6">
              <span className="text-stone-50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{badge}</span>
            </div>
          )}

          <h2 className="font-western text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-stone-200 leading-[0.85] tracking-tight mb-6 uppercase">
            {titlePrimary}<br/>
            <span className="text-amber-500">{titleSecondary}</span>
          </h2>
          
          {subtitle && (
            <h3 className="text-xl md:text-2xl text-stone-300 font-medium italic mb-8 border-l-2 border-amber-600 pl-4 py-1">
              {subtitle}
            </h3>
          )}
          
          <div className="text-stone-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            <p>{description}</p>
          </div>

          {/* Features List Section */}
          {(listTitle || features) && (
            <div className="mb-12">
              {listTitle && (
                <h4 className="text-lg font-bold text-stone-100 uppercase tracking-wider mb-6">
                  {listTitle}
                </h4>
              )}

              <div className={`flex flex-col gap-6 ${listStyle === 'numbers' ? 'border-l-2 border-amber-600 pl-6' : ''}`}>
                {features?.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    {listStyle === 'numbers' ? (
                      <span className="text-amber-500 font-bold text-lg leading-none shrink-0 w-6">
                        {index + 1}
                      </span>
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h5 className="text-stone-100 font-bold text-sm uppercase tracking-wide mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-2">
            <button className="px-8 py-5 bg-amber-600 hover:bg-amber-700 text-stone-50 font-bold uppercase tracking-[0.2em] text-xs transition-colors flex items-center justify-center gap-3 w-full sm:w-auto">
              {buttonText}
            </button>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
