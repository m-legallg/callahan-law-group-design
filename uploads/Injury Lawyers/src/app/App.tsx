import React from 'react';
import { Shield, Scale, Gavel, ChevronRight, Phone, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import heroBg from 'figma:asset/d0c12880b18be8d56cea51a177ffb0459480f596.png';
import peopleImg from 'figma:asset/ea811246e81aebf3985271da9681210979c981b0.png';
import { SplitSection } from './components/SplitSection';
import { FaqAccordion } from './components/FaqAccordion';
import { MassiveCta } from './components/MassiveCta';
import { SeoContentBlock } from './components/SeoContentBlock';
import { ContactForm } from './components/ContactForm';
import { RatingsSlider } from './components/RatingsSlider';
import { AreasWeServe } from './components/AreasWeServe';
import { OurLocations } from './components/OurLocations';

export default function App() {
  const { scrollY } = useScroll();
  
  // Parallax values
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);
  const textY = useTransform(scrollY, [0, 1000], ["0%", "60%"]);
  const peopleY = useTransform(scrollY, [0, 1000], ["0%", "15%"]);

  return (
    <div className="min-h-screen font-sans bg-[#1c1917] text-stone-50 selection:bg-amber-700 selection:text-white relative overflow-x-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-stone-950/80 backdrop-blur-md border-b border-white/5 py-2 px-6 md:px-12 flex justify-between items-center text-xs font-medium tracking-wider text-stone-400 uppercase">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Available 24/7</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Aggressive Representation</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors cursor-pointer">
          <Phone className="w-3.5 h-3.5" />
          <span>1-800-JUSTICE</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="absolute top-9 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-amber-700/20 border border-amber-600/30 rounded flex items-center justify-center group-hover:bg-amber-700/40 transition-all">
            <Scale className="w-7 h-7 text-amber-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-western text-3xl leading-none text-white tracking-wide">Callahan</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold ml-0.5">Law Group</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-stone-300 uppercase tracking-widest">
          <a href="#" className="hover:text-amber-500 transition-colors">Practice Areas</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Attorneys</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Results</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Reviews</a>
        </nav>

        <button className="hidden md:flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold rounded shadow-lg shadow-amber-900/20 transition-all uppercase tracking-widest text-xs">
          Free Consultation
        </button>
      </header>

      {/* Hero Section - Parallax Container */}
      <main className="relative min-h-[100svh] w-full flex flex-col items-center justify-between overflow-hidden">
        {/* Background Image Layer */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-[-10%] z-0 w-[120%] h-[120%]">
          <img 
            src={heroBg} 
            alt="Desert landscape at sunset" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradients to darken edges and make text readable */}
          <div className="absolute inset-0 bg-stone-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/80"></div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>
        </motion.div>

        {/* Text Layer */}
        <motion.div 
          style={{ y: textY }} 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[-15vh] pointer-events-none px-4"
        >
          <h1 className="font-western w-full flex flex-col items-center justify-center font-black uppercase tracking-tighter text-center text-[#d1baa5] opacity-25">
            <span className="text-[17vw] sm:text-[18vw] lg:text-[19vw] leading-[0.9] whitespace-nowrap drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              INJURY
            </span>
            <span className="text-[17vw] sm:text-[18vw] lg:text-[19vw] leading-[0.9] whitespace-nowrap mt-4 md:mt-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              LAWYERS
            </span>
          </h1>
        </motion.div>

        {/* People Image Layer */}
        <motion.div 
          style={{ y: peopleY }} 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 z-20 w-full flex justify-center pointer-events-none"
        >
          <img 
            src={peopleImg} 
            alt="Our Injury Lawyers" 
            className="h-[60vh] md:h-[70vh] lg:h-[80vh] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
        
        {/* Gradient fade to seamlessly blend text at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent z-20 pointer-events-none"></div>

        {/* Top spacer to push content down */}
        <div className="w-full h-[20vh] relative z-30 pointer-events-none"></div>

        {/* Descriptive Text & CTAs (Integrated into hero) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative z-30 w-full px-6 md:px-12 pb-12 pt-32 flex flex-col items-center text-center mt-auto"
        >
          {/* Tagline label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-5 border border-amber-500/30 bg-stone-900/60 rounded-full backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,1)] animate-pulse"></span>
            <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">No Fee Unless We Win</span>
          </div>
          
          <p className="text-base md:text-lg text-stone-200 mb-8 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
            When the dust settles, you need a relentless advocate in your corner. We provide aggressive representation for those who have been wronged.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold rounded flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-900/40 uppercase tracking-widest text-xs pointer-events-auto">
              <Gavel className="w-4 h-4" />
              Start Your Claim
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 bg-stone-900/80 hover:bg-stone-800/90 backdrop-blur-md text-white font-bold rounded flex items-center justify-center gap-2 transition-all border border-stone-500/50 hover:border-amber-500/70 uppercase tracking-widest text-xs group shadow-xl pointer-events-auto">
              View Our Results
              <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Trust Indicators Section (Scrolls naturally) */}
      <section className="relative z-30 bg-[#161412] w-full py-20 lg:py-32 shadow-[0_-20px_40px_rgba(28,25,23,1)] overflow-hidden">
        <div className="flex flex-col w-full">
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full border-t border-stone-800/80"
          >
            <div className="max-w-[100rem] mx-auto flex justify-between items-start py-8 md:py-14 lg:py-20 px-6 md:px-12 w-full">
              <div className="font-western text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold leading-[0.75] text-stone-200 tracking-tighter drop-shadow-lg">
                $500<span className="text-amber-600 text-[0.6em] ml-1 md:ml-3">M+</span>
              </div>
              <div className="text-sm md:text-base lg:text-lg text-amber-600 uppercase tracking-[0.3em] font-bold mt-3 md:mt-8 lg:mt-10 text-right">
                Recovered
              </div>
            </div>
          </motion.div>
          
          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full border-t border-stone-800/80"
          >
            <div className="max-w-[100rem] mx-auto flex justify-between items-start py-8 md:py-14 lg:py-20 px-6 md:px-12 w-full">
              <div className="font-western text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold leading-[0.75] text-stone-200 tracking-tighter drop-shadow-lg">
                99<span className="text-amber-600 text-[0.6em] ml-2 md:ml-4">%</span>
              </div>
              <div className="text-sm md:text-base lg:text-lg text-amber-600 uppercase tracking-[0.3em] font-bold mt-3 md:mt-8 lg:mt-10 text-right max-w-[120px] md:max-w-none">
                Success Rate
              </div>
            </div>
          </motion.div>
          
          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full border-t border-b border-stone-800/80"
          >
            <div className="max-w-[100rem] mx-auto flex justify-between items-start py-8 md:py-14 lg:py-20 px-6 md:px-12 w-full">
              <div className="font-western text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold leading-[0.75] text-stone-200 tracking-tighter drop-shadow-lg">
                25<span className="text-amber-600 text-[0.6em] ml-2 md:ml-4">+</span>
              </div>
              <div className="text-sm md:text-base lg:text-lg text-amber-600 uppercase tracking-[0.3em] font-bold mt-3 md:mt-8 lg:mt-10 text-right max-w-[140px] md:max-w-none">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Features */}
      <SplitSection 
        titlePrimary="Relentless Advocacy"
        titleSecondary="For Your Family"
        description="Navigating family law requires both immense compassion and unyielding strength."
        imageSrc="https://images.unsplash.com/photo-1638262052638-c413289d7cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzczOTUzNDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Handshake representing agreement"
        imagePosition="left"
        buttonText="Get Started Now"
        listTitle="Our Approach:"
        listStyle="numbers"
        features={[
          {
            title: "Initial Consultation",
            description: "We review your situation with absolute discretion"
          },
          {
            title: "Strategic Planning",
            description: "We build a roadmap to protect what matters most"
          },
          {
            title: "Fierce Negotiation",
            description: "We aim to resolve matters out of court when possible"
          },
          {
            title: "Courtroom Readiness",
            description: "If trial is necessary, we are fully prepared to win"
          }
        ]}
      />

      <SplitSection 
        badge="Why Choose Us"
        titlePrimary="Award-Winning Lawyers"
        titleSecondary="Protecting Your Family"
        description="When you're facing a family crisis, you need more than just a lawyer—you need a dedicated advocate with a proven track record of success. Our award-winning team has protected thousands of families just like yours."
        imageSrc="https://images.unsplash.com/photo-1505664194779-8beaceb93744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzczOTU1MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Lawyer reviewing legal documents in office"
        imagePosition="right"
        buttonText="Call Now: (555) 123-4567"
        listStyle="checkmarks"
        features={[
          {
            title: "Strategic Legal Solutions",
            description: "Customized approaches tailored to your family's unique dynamics."
          },
          {
            title: "Confidential Case Evaluation",
            description: "Get expert legal advice in a completely private environment."
          },
          {
            title: "Compassionate Guidance",
            description: "We guide you through the emotional complexities of family law."
          },
          {
            title: "Aggressive Representation",
            description: "We fight relentlessly to protect your assets and your children."
          }
        ]}
      />

      {/* Ratings Slider */}
      <RatingsSlider />

      {/* Areas We Serve */}
      <AreasWeServe />

      {/* Our Locations */}
      <OurLocations />

      {/* SEO Content Block */}
      <SeoContentBlock />

      {/* FAQs Section */}
      <FaqAccordion />

      {/* Final Massive CTA */}
      <MassiveCta />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="relative z-30 bg-stone-950 border-t border-stone-900 pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 group cursor-pointer mb-6">
              <div className="w-10 h-10 bg-amber-700/20 border border-amber-600/30 rounded flex items-center justify-center group-hover:bg-amber-700/40 transition-all">
                <Scale className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-western text-2xl leading-none text-white tracking-wide">Callahan</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-amber-600 font-bold ml-0.5">Law Group</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Aggressive, relentless representation for the injured. We don't settle for less, and neither should you.
            </p>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-wider text-sm mb-6">Practice Areas</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Car Accidents</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Truck Accidents</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Motorcycle Accidents</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Wrongful Death</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Workplace Injuries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-wider text-sm mb-6">Firm</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Our Attorneys</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Case Results</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Client Reviews</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">News & Press</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Free Consultation</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">Locations & Directions</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">1-800-JUSTICE</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">info@callahanlaw.com</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-stone-500 text-xs">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Disclaimer</a>
          </div>
          <div className="text-stone-500 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Callahan Law Group. All rights reserved.<br/>
            Attorney Advertising. Past results do not guarantee future outcomes.
          </div>
        </div>
      </footer>
    </div>
  );
}
