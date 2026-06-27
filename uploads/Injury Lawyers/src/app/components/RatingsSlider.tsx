import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import bgImage from 'figma:asset/2b96800f77a4a06698f40591bdf965a8e4d4fca2.png';

const reviews = [
  {
    name: "James T.",
    location: "Dallas, TX",
    text: "When my family needed guidance through a difficult time, the team stepped up. They were aggressive when needed but always treated us with compassion. I couldn't ask for better representation.",
    rating: 5,
  },
  {
    name: "Sarah W.",
    location: "Fort Worth, TX",
    text: "Navigating the courts was overwhelming until we found this firm. Their attention to detail and absolute command of the law gave us peace of mind. We secured our future thanks to them.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Plano, TX",
    text: "I was facing an uphill battle against a massive insurance company. The attorneys here didn't back down for a second. They fought relentlessly and got me the compensation I deserved.",
    rating: 5,
  },
  {
    name: "Elena G.",
    location: "Frisco, TX",
    text: "Professional, fierce, and incredibly knowledgeable. From the very first consultation, I knew I was in the right hands. They took charge of my case and delivered an incredible outcome.",
    rating: 5,
  }
];

export function RatingsSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Moves the background on the Y axis inversely to scrolling, slowed down
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 mx-auto bg-stone-700 rounded-full mt-8 hover:bg-amber-600 transition-colors cursor-pointer"></div>
    )
  };

  return (
    <section ref={sectionRef} className="relative z-30 py-20 lg:py-32 bg-[#1c1917] overflow-hidden">
      
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-[-10%] z-0 w-[120%] h-[120%] pointer-events-none"
      >
        <img 
          src={bgImage} 
          alt="Stormy desert background" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Lighter darkening so the image details are clear */}
        <div className="absolute inset-0 bg-stone-950/20"></div>
      </motion.div>

      {/* Stationary Top & Bottom Gradients to seamlessly blend the image into the page background */}
      <div className="absolute top-0 left-0 right-0 h-40 lg:h-56 bg-gradient-to-b from-[#1c1917] via-[#1c1917]/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 lg:h-56 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/90 to-transparent z-10 pointer-events-none"></div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-900/10 blur-[120px] pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-amber-600/10 blur-[120px] pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-amber-600 px-3 py-1 mb-6">
            <span className="text-stone-50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Client Testimonials</span>
          </div>
          <h2 className="font-western text-4xl md:text-5xl lg:text-6xl font-bold text-stone-200 tracking-tight uppercase leading-[0.9]">
            Proven <span className="text-amber-500">Results.</span><br />
            Real Impact.
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-8 opacity-50"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="slider-container px-2"
        >
          {/* We override slick dots active color via tailwind inline styles or relying on the custom paging above */}
          <style dangerouslySetInnerHTML={{__html: `
            .slick-dots li.slick-active div {
              background-color: #d97706 !important; /* amber-600 */
              transform: scale(1.5);
            }
            .slick-dots li {
              margin: 0 4px;
            }
          `}} />
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4 py-2">
                <div className="bg-stone-900/80 backdrop-blur-md border border-stone-800/80 p-8 md:p-10 h-full flex flex-col relative group hover:border-amber-600/40 transition-colors duration-500 shadow-xl">
                  {/* Faded Quote Icon in background */}
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-stone-800/40 group-hover:text-amber-900/20 transition-colors duration-500 z-0" />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10 italic">
                    "{review.text}"
                  </p>
                  
                  <div className="mt-auto relative z-10 border-t border-stone-800 pt-4">
                    <p className="font-bold text-stone-100 uppercase tracking-wider text-sm">{review.name}</p>
                    <p className="text-amber-600 text-xs uppercase tracking-widest mt-1 font-semibold">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
