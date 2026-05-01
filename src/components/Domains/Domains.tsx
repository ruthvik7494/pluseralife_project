import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Import local assets
import healthRestImg from '../../assets/health_restoration.jpg';
import liverHealthImg from '../../assets/liver_health.jpg';
import digestiveHealthImg from '../../assets/digestive_health.jpg';
import respHealthImg from '../../assets/respiratory_health.jpg';
import childCareImg from '../../assets/child_care.jpg';
import painMgmtImg from '../../assets/pain_management.jpg';
import boneHealthImg from '../../assets/bone_health.jpg';

const Domains = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState(0);

  const domains = [
    { 
      name: "Health Restoration", 
      img: healthRestImg,
      desc: "Holistic recovery and vitality"
    },
    { 
      name: "Liver Health", 
      img: liverHealthImg,
      desc: "Detoxification and support"
    },
    { 
      name: "Digestive Health", 
      img: digestiveHealthImg,
      desc: "Optimized nutrient absorption"
    },
    { 
      name: "Respiratory Health", 
      img: respHealthImg,
      desc: "Clear breathing and immunity"
    },
    { 
      name: "Women's Health", 
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400",
      desc: "Balance and hormonal wellness"
    },
    { 
      name: "Mental Health", 
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
      desc: "Clarity, focus, and calm"
    },
    { 
      name: "Infant & Child Care", 
      img: childCareImg,
      desc: "Gentle care for the young"
    },
    { 
      name: "Pain Management", 
      img: painMgmtImg,
      desc: "Natural relief and mobility"
    },
    { 
      name: "Sexual Wellness", 
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400",
      desc: "Vitality and performance"
    },
    { 
      name: "Joint & Bone Health", 
      img: boneHealthImg,
      desc: "Strength and flexibility"
    },
    { 
      name: "Renal Health", 
      img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400",
      desc: "Kidney and urinary support"
    },
    { 
      name: "Metabolic Health", 
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
      desc: "Sugar and energy balance"
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      setConstraints(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="products" className="py-24 bg-primary text-white overflow-hidden relative select-none">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-white/10 rounded-full border border-white/20 mb-4"
          >
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Our Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">Focused Therapeutic Domains</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Drag Carousel */}
        <div className="relative cursor-grab active:cursor-grabbing">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -constraints, right: 0 }}
            className="flex gap-6 pb-4"
          >
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[220px] md:w-[240px] group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 shadow-xl border border-white/5 order-primary/10">
                  <img 
                    src={domain.img} 
                    alt={domain.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-1">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/70 italic max-w-2xl mx-auto text-base"
          >
            "Our specialized ranges are formulated to address specific health concerns with the precision of classical Ayurveda."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Domains;
