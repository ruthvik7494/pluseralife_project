import { motion } from 'framer-motion';
import { Plus, Star, ArrowUpRight } from 'lucide-react';
import heroImg from '../../assets/hero_ayurveda_family.png';
import labImg from '../../assets/ayurvedic_lab_tubes.png';
import bgImg from '../../assets/hero_botanical_bg.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#FDFCF8] overflow-hidden pt-6">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Organic Background Blobs */}
     
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 flex items-center space-x-2 bg-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-sm border border-primary/10"
          >
            <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <span className="text-[10px] sm:text-sm font-medium text-gray-600">Trusted by 10k+ families</span>
            <Star size={12} className="text-accent fill-accent" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif text-primary leading-[1.1] mb-6 sm:mb-8"
          >
            Purity <span className="relative">Meet<span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-secondary/20 -z-10 rounded-full"></span>s</span> <br />
            Modern Science.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl px-4"
          >
            Discover Ayurvedic formulations that are ethically sourced, scientifically tested, and designed to restore your natural vitality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="bg-primary text-white p-1.5 pr-5 sm:p-2 sm:pr-6 rounded-full flex items-center space-x-3 sm:space-x-4 hover:bg-secondary transition-all group w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-primary rounded-full flex items-center justify-center">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </div>
              <span className="font-bold text-sm sm:text-base">View Collections</span>
            </button>
            <button className="font-bold text-primary flex items-center space-x-2 hover:translate-x-2 transition-transform text-sm sm:text-base">
              <span>Our Process</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </button>
          </motion.div>
        </div>

        {/* Floating Collage */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[500px] mt-12 sm:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 w-[90%] sm:w-full max-w-4xl"
          >
            <div className="relative">
                {/* Main Image */}
                <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                    <img src={heroImg} alt="Ayurveda" className="w-full h-[300px] sm:h-[400px] object-cover" />
                </div>
                
                {/* Floating Card 1 */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 flex items-center space-x-3 sm:space-x-4 max-w-[180px] sm:max-w-xs"
                >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-accent">
                        <Plus size={18} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-primary text-[10px] sm:text-sm">Ethical Sourcing</p>
                        <p className="text-[8px] sm:text-xs text-gray-400">Direct from Himalayas</p>
                    </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-white p-1.5 sm:p-2 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-gray-100 w-32 sm:w-48 overflow-hidden"
                >
                    <img src={labImg} alt="Lab" className="rounded-xl sm:rounded-2xl h-20 sm:h-32 w-full object-cover mb-1.5 sm:mb-2" />
                    <p className="text-center font-bold text-primary text-[10px] sm:text-sm pb-1.5 sm:pb-2">Lab Certified</p>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
