import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

export function SeoContentBlock() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative z-30 bg-[#1c1917] w-full px-6 md:px-12 py-24 border-t border-stone-800">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-western text-4xl md:text-5xl font-bold text-stone-200 mb-8 uppercase tracking-tight">
          Comprehensive <span className="text-amber-600">Legal Guidance</span>
        </h2>
        
        <div className="relative">
          <div className={`prose prose-invert prose-stone max-w-none transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[10000px]' : 'max-h-[400px]'}`}>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Navigating the aftermath of a serious injury can be one of the most daunting experiences of your life. At Callahan Law Group, we recognize that the physical, emotional, and financial toll of an accident extends far beyond the initial incident. Our dedicated team of personal injury attorneys is committed to providing relentless advocacy and comprehensive legal support to ensure that you receive the maximum compensation possible.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              When another party's negligence causes you harm, you shouldn't have to bear the burden alone. Whether you've been involved in a devastating car crash, a workplace accident, or have suffered due to a defective product, our extensive legal knowledge and aggressive litigation strategies are designed to hold the responsible parties accountable. We meticulously investigate every facet of your case, collaborating with top-tier medical professionals, accident reconstruction experts, and financial analysts to build an impenetrable argument on your behalf.
            </p>
            
            <h3 className="text-2xl font-bold text-stone-200 mt-10 mb-4 border-l-2 border-amber-600 pl-4">Understanding Your Rights</h3>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              The legal landscape surrounding personal injury claims is intricate and fraught with potential pitfalls. Insurance companies often employ aggressive tactics aimed at minimizing your payout or denying your claim altogether. It is imperative to have a seasoned legal professional who can navigate these complexities, anticipate defense strategies, and counter them effectively. We handle all communications and negotiations, shielding you from unnecessary stress so you can focus entirely on your recovery.
            </p>
            
            <h3 className="text-2xl font-bold text-stone-200 mt-10 mb-4 border-l-2 border-amber-600 pl-4">Types of Cases We Handle</h3>
            <ul className="list-disc pl-6 text-stone-300 text-lg space-y-3 mb-6">
              <li><strong>Motor Vehicle Accidents:</strong> Including car, truck, and motorcycle collisions.</li>
              <li><strong>Premises Liability:</strong> Slip and fall incidents, inadequate security, and dangerous property conditions.</li>
              <li><strong>Product Liability:</strong> Injuries caused by defective or dangerous consumer goods.</li>
              <li><strong>Medical Malpractice:</strong> Errors in treatment, misdiagnoses, and surgical mistakes.</li>
              <li><strong>Wrongful Death:</strong> Seeking justice for families who have lost loved ones due to negligence.</li>
            </ul>

            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Every detail matters. From the preservation of crucial evidence at the scene to the precise calculation of your long-term medical needs, our approach is exhaustive. We understand that severe injuries often require ongoing care, rehabilitation, and modifications to your daily life. Our goal is not just to secure a quick settlement, but to ensure your future is financially secure. We will take your case to trial if the insurance companies refuse to offer a fair resolution.
            </p>

            <p className="text-stone-300 text-lg leading-relaxed">
              * This section represents our commitment to providing in-depth legal knowledge. While we optimize our site for comprehensiveness, our primary focus remains the aggressive representation of our clients. Contact us today to discuss the specifics of your case in a confidential, no-obligation consultation.
            </p>
          </div>
          
          {/* Gradient Overlay when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/80 to-transparent flex items-end justify-center pb-4">
            </div>
          )}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 border border-stone-700 hover:border-amber-500 rounded-full text-stone-300 hover:text-amber-500 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            {isExpanded ? (
              <>Read Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Read Full Legal Guide <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
