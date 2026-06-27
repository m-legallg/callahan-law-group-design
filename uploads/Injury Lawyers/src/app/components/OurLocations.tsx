import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    name: "Dallas Main Office",
    address: "1234 Commerce Street, Suite 500",
    cityStateZip: "Dallas, TX 75201",
    phone: "(214) 555-0198",
    hours: "Available 24/7",
    image: "https://images.unsplash.com/photo-1625950019503-cae6a7825762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWxsYXMlMjBza3lsaW5lfGVufDF8fHx8MTc3Mzk1ODYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Fort Worth Branch",
    address: "789 Main Street, Suite 210",
    cityStateZip: "Fort Worth, TX 76102",
    phone: "(817) 555-0145",
    hours: "Available 24/7",
    image: "https://images.unsplash.com/photo-1521984692647-a41fed613ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWxsYXMlMjBjb3VydGhvdXNlfGVufDF8fHx8MTc3Mzk1ODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  }
];

export function OurLocations() {
  return (
    <section className="relative z-30 bg-[#1c1917] py-20 lg:py-32 overflow-hidden border-b border-stone-800">
      
      {/* Background Parallax Texture Overlay (using western pattern) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1663382364206-89b8d054bcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0ZXJuJTIwcGF0dGVybiUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzczOTU4NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-fixed bg-cover opacity-[0.03] mix-blend-color-burn pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-amber-600 px-3 py-1 mb-6">
            <span className="text-stone-50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Where to Find Us</span>
          </div>
          <h2 className="font-western text-4xl md:text-5xl lg:text-6xl font-bold text-stone-200 tracking-tight uppercase leading-[0.9]">
            Our <span className="text-amber-500">Locations</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-8 opacity-50"></div>
          <p className="mt-8 text-stone-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We operate out of multiple locations to better serve our clients across North Texas. Call to schedule an in-person or virtual consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="group relative w-full h-full overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl"
            >
              
              {/* Image Banner */}
              <div className="h-48 lg:h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out z-0"
                />
                
                {/* Fade to bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900 to-transparent z-10"></div>
              </div>

              {/* Location Details */}
              <div className="p-8 lg:p-10 relative z-20 -mt-6">
                <h3 className="text-2xl font-bold uppercase text-stone-100 tracking-wider mb-6 drop-shadow-md">
                  {loc.name}
                </h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-800 border border-stone-700 rounded flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-stone-300 font-medium tracking-wide uppercase text-sm mb-1">{loc.address}</p>
                      <p className="text-stone-500 uppercase tracking-widest text-xs">{loc.cityStateZip}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-800 border border-stone-700 rounded flex items-center justify-center shrink-0 shadow-lg">
                      <Phone className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-amber-500 font-bold tracking-widest text-sm hover:text-amber-400 cursor-pointer transition-colors">{loc.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-800 border border-stone-700 rounded flex items-center justify-center shrink-0 shadow-lg">
                      <Clock className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-stone-400 uppercase tracking-widest text-xs font-semibold">{loc.hours}</p>
                    </div>
                  </div>
                </div>

                <button className="mt-8 w-full py-4 bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-stone-50 font-bold uppercase tracking-widest text-xs transition-colors duration-300 border border-stone-700 hover:border-amber-500 flex items-center justify-center gap-2">
                  Get Directions
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
