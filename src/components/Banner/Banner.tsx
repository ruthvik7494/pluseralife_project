import { motion } from 'framer-motion';
import bannerImg from '../../assets/Banner_Image.png';

const Banner = () => {
  return (
    <section className="w-full relative overflow-hidden min-h-[300px] md:min-h-[850px] bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bannerImg} 
          alt="Promotion Banner" 
          className="w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/10 md:bg-gradient-to-b md:from-black/60 md:via-black/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-start pt-10 md:pt-20 text-center">
        <div className="px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#a8e6cf] animate-pulse" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Seasonal Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="hidden md:block text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight"
          >
            Make this your healthiest <br className="hidden md:block" /> 
            year yet with PlusEra.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-primary text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-secondary transition-all shadow-xl shadow-black/20 hover:scale-105 active:scale-95">
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
