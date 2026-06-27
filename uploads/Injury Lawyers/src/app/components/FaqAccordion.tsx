import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

const faqs = [
  {
    question: "What should I do immediately after an accident?",
    answer: "Seek medical attention first, even if you feel fine. Document the scene by taking photos, gathering witness information, and filing a police report. Finally, contact a qualified personal injury lawyer before speaking with insurance companies."
  },
  {
    question: "How much does it cost to hire Callahan Law Group?",
    answer: "We work on a contingency fee basis. This means you pay absolutely nothing upfront. We only collect a fee if and when we successfully recover compensation for your injuries."
  },
  {
    question: "How much is my personal injury case worth?",
    answer: "Every case is unique. The value depends on various factors including medical bills, lost wages, future rehabilitation costs, and pain and suffering. During our free consultation, we can provide a better estimate based on your specific circumstances."
  },
  {
    question: "Will my case have to go to court?",
    answer: "While many personal injury cases are settled out of court through negotiation, our firm prepares every case as if it will go to trial. This aggressive approach often pressures insurance companies to offer fair settlements."
  },
  {
    question: "How long do I have to file a claim?",
    answer: "The statute of limitations varies by state, but generally ranges from one to three years from the date of the injury. It's critical to act quickly so crucial evidence isn't lost."
  }
];

export function FaqAccordion() {
  return (
    <section className="relative z-30 bg-[#161412] w-full px-6 md:px-12 py-24 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left Col */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/3"
        >
          <h2 className="font-western text-3xl md:text-5xl font-bold text-stone-200 leading-tight">
            FREQUENT<br/>QUESTIONS
          </h2>
          <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-xs">
            We understand the confusion and stress that follows an injury. Here are straightforward answers to our most common inquiries.
          </p>
        </motion.div>
        
        {/* Right Col */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/3"
        >
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <Accordion.Item 
                key={index} 
                value={`item-${index}`}
                className="border-b border-stone-800/80 py-2 group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full py-6 text-left text-stone-200 hover:text-amber-500 transition-colors">
                    <span className="text-lg md:text-xl font-medium pr-8">{faq.question}</span>
                    <Plus className="w-5 h-5 flex-shrink-0 text-stone-500 group-data-[state=open]:hidden" />
                    <Minus className="w-5 h-5 flex-shrink-0 text-amber-500 hidden group-data-[state=open]:block" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="pb-8 text-stone-400 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
