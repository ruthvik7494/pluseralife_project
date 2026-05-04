import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import heroImage from '../../assets/ayurveda_wellness_hero.png'; // Assuming I'll move the generated image here or use the path

interface PageHeroProps {
  title: string;
  description?: string;
  ctaText?: string;
  stats?: { value: string; label: string };
  tags?: string[];
}

const PageHero = ({ 
  title, 
  description = "Connect with your inner self and improve focus through authentic Ayurvedic wisdom and modern scientific standards.", 
  ctaText = "Start Journey",
  stats = { value: "5000+", label: "Patients restored to health this year" },
  tags = ["Authentic", "Scientific", "Ethical"]
}: PageHeroProps) => {
  return (
    <section className="relative px-4 py-4 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#fdf6f0] rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
          
          {/* Background decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] border border-primary/5 rounded-full -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full -translate-y-1/2"></div>
          </div>

          <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 md:py-12">
            
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary font-serif leading-[1.1]">
                  {title}
                </h1>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed opacity-80">
                  {description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all group">
                  {ctaText}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Content / Image Area */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-[420px]"
              >
                {/* Main Image */}
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5">
                  <img 
                    src={heroImage} 
                    alt="Ayurveda Wellness" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-4 -left-4 md:-left-8 z-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-2xl font-bold text-primary">{stats.value}</div>
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-snug mb-3">
                    {stats.label}
                  </p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Tags */}
                <div className="absolute bottom-6 -right-4 md:-right-8 z-20 flex flex-col gap-2">
                  {tags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                      className="bg-accent/10 backdrop-blur-md border border-accent/20 px-4 py-1.5 rounded-full flex items-center gap-2 group hover:bg-accent transition-colors"
                    >
                      <span className="text-xs md:text-sm text-primary font-medium group-hover:text-white transition-colors">{tag}</span>
                      <ArrowUpRight className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
