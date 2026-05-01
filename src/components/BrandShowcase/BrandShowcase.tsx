import { motion } from 'framer-motion';
import showcaseImg from '../../assets/herosection_Images.png';

const BrandShowcase = () => {
  return (
    <section className="py-6 md:py-6 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Image Content */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 relative flex justify-center lg:justify-end py-10 md:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center lg:translate-x-12"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />

              <img
                src={showcaseImg}
                alt="Brand Showcase"
                className="w-full max-w-[320px] md:max-w-none h-auto scale-100 md:scale-125 object-contain transform hover:scale-[1.1] md:hover:scale-[1.3] transition-transform duration-700 pointer-events-none"
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -right-2 md:right-[10%] bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-xl border border-white/50 flex items-center space-x-2 z-20"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400" />
                <span className="text-[9px] md:text-xs font-bold text-gray-800 whitespace-nowrap">Clinically Proven</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[15%] -left-2 md:left-[5%] bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-xl border border-white/50 flex items-center space-x-2 z-20"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400" />
                <span className="text-[9px] md:text-xs font-bold text-gray-800 whitespace-nowrap">Ethically Sourced</span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[35%] left-[5%] md:left-[10%] bg-primary/10 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg border border-primary/20 z-20"
              >
                <div className="w-3 h-3 md:w-4 md:h-4 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[45%] space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10"
            >
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Our Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 leading-[1.2] md:leading-[1.1] tracking-tight"
            >
              Revolutionizing <br className="hidden xl:block" />
              Wellness through <br className="hidden xl:block" />
              <span className="text-primary">Ancient Wisdom.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 md:px-0"
            >
              At PlusEra Lifesciences, we bridge the gap between traditional Ayurvedic knowledge and modern clinical standards. Our formulations are crafted with precision to restore balance and vitality to your life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4 px-6 md:px-0"
            >
              <button className="bg-primary text-white px-10 py-4 rounded-xl shadow-lg shadow-primary/10 w-full sm:w-auto font-bold hover:bg-secondary transition-all">
                Discover More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
