import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
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


      <div className="section-container relative z-10 pt-10 md:pt-20 ">


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
