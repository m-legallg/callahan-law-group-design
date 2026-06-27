import React, { useState, useRef } from 'react';
import { Check, Shield, Scale } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transformations
  const iconParallax1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const iconParallax2 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const backgroundTextParallax = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const bgImageParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you! Your case review request has been submitted.");
    setFormData({ name: '', phone: '', email: '', caseType: '', description: '' });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative z-30 w-full bg-stone-950 py-24 md:py-32 px-6 md:px-12 overflow-hidden border-t border-stone-900"
    >
      {/* Background Image Layer */}
      <motion.div style={{ y: bgImageParallax }} className="absolute inset-[-20%] z-0 w-[140%] h-[140%] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1650511503497-f09930f2e10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBzdW5zZXR8ZW58MXx8fHwxNzczOTA0NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Desert landscape background" 
          className="w-full h-full object-cover object-center opacity-40 grayscale-[0.2]"
        />
        {/* Gradients to darken edges and make text readable */}
        <div className="absolute inset-0 bg-stone-950/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950/80"></div>
      </motion.div>

      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: backgroundTextParallax }}
        className="absolute top-1/4 -left-10 md:left-10 z-0 pointer-events-none opacity-[0.03]"
      >
        <span className="font-western text-[15rem] md:text-[25rem] leading-none whitespace-nowrap text-stone-100">JUSTICE</span>
      </motion.div>

      <motion.div 
        style={{ y: iconParallax1 }}
        className="absolute top-20 right-10 md:right-32 z-0 pointer-events-none opacity-5"
      >
        <Scale className="w-64 h-64 md:w-96 md:h-96 text-amber-500" />
      </motion.div>

      <motion.div 
        style={{ y: iconParallax2 }}
        className="absolute bottom-10 left-10 md:left-40 z-0 pointer-events-none opacity-5"
      >
        <Shield className="w-48 h-48 md:w-72 md:h-72 text-amber-500" />
      </motion.div>

      {/* Parallax Desert Background Image darkened with gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627630544010-2d1ed508ebb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0ZXJuJTIwZGVzZXJ0JTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3Mzk1NTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-fixed bg-center bg-cover opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950"></div>
      </div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="inline-block bg-amber-600 px-3 py-1 mb-6">
              <span className="text-stone-50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Free Consultation</span>
            </div>

            <h2 className="font-western text-5xl sm:text-6xl md:text-[4.5rem] font-bold text-stone-200 leading-[0.85] tracking-tight mb-6 uppercase">
              GET IN <br/>
              <span className="text-amber-500">TOUCH</span>
            </h2>
            
            <h3 className="text-xl md:text-2xl text-stone-300 font-medium italic mb-8 border-l-2 border-amber-600 pl-4 py-1">
              Schedule a case review with our team.
            </h3>
            
            <div className="text-stone-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl space-y-4">
              <p>
                If you or a loved one needs the assistance of a seasoned attorney, don't hesitate to reach out. Our firm handles high-stakes litigation with aggressive representation.
              </p>
            </div>

            <div className="flex flex-col gap-5 border-t border-stone-800/50 pt-8 mt-8">
              {[
                "Proven multi-million dollar results",
                "Years of aggressive courtroom experience",
                "No upfront costs—we only win if you do",
                "Available 24/7 for urgent client needs"
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-amber-500 font-bold text-lg leading-none shrink-0 w-6">
                    {i + 1}
                  </span>
                  <span className="text-stone-300 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12 flex flex-col justify-center"
          >
            <div className="bg-[#181615] border border-stone-800/50 p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
              {/* Decorative Corner Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-amber-600/30 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-amber-600/30 z-0"></div>

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 w-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2 font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-stone-900/50 border border-stone-800 rounded-none px-4 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-stone-900/50 border border-stone-800 rounded-none px-4 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2 font-semibold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-stone-900/50 border border-stone-800 rounded-none px-4 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2 font-semibold">Case Type</label>
                    <div className="relative">
                      <select
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-900/50 border border-stone-800 rounded-none px-4 py-4 text-stone-200 focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-stone-900 text-stone-400">Select Case Type</option>
                        <option value="personal-injury" className="bg-stone-900">Personal Injury</option>
                        <option value="family-law" className="bg-stone-900">Family Law</option>
                        <option value="criminal-defense" className="bg-stone-900">Criminal Defense</option>
                        <option value="immigration" className="bg-stone-900">Immigration</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-stone-400 text-xs uppercase tracking-wider mb-2 font-semibold">Message</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe your situation..."
                    required
                    rows={4}
                    className="w-full bg-stone-900/50 border border-stone-800 rounded-none px-4 py-4 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 px-8 py-5 bg-amber-600 hover:bg-amber-700 text-stone-50 font-bold uppercase tracking-[0.2em] text-xs transition-colors flex items-center justify-center gap-3"
                >
                  Request Case Review
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}