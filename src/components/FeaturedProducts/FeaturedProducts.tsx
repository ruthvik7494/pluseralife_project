import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import digestImg from '../../assets/plusEra_purple_bottle.png';
import liverImg from '../../assets/plusEra_gold_bottle.png';
import immuneImg from '../../assets/plusEra_blue_bottle.png';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Plus-Digest™",
      tagline: "Prebiotic + Probiotic",
      subtitle: "Digestive & Gut Health",
      image: digestImg,
    },
    {
      id: 2,
      name: "Plus-Liver™",
      tagline: "Hepatic Care Formula",
      subtitle: "Liver Detox & Support",
      image: liverImg,
    },
    {
      id: 3,
      name: "Plus-Immune™",
      tagline: "Immuno-modulator",
      subtitle: "Natural Defense System",
      image: immuneImg,
    }
  ];

  return (
    <section className="py-20 bg-[#fcfdfa] w-full px-8 md:px-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 leading-tight tracking-tight">
              Daily essentials <br />
              to support <br />
              holistic health.
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm">
              Science-backed ayurvedic formulations that target your internal systems to benefit your entire body.
            </p>

            <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-secondary transition-all flex items-center space-x-3 group shadow-lg shadow-primary/10">
              <span>Explore All</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Content: Product Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="bg-white rounded-[2rem] p-4 mb-6 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#f9fafb] flex items-center justify-center relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="space-y-1 mb-6 px-2 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{product.tagline}</p>
                <p className="text-xs text-gray-500 font-medium">{product.subtitle}</p>
              </div>

              <button className="bg-primary text-white w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-primary/5 hover:bg-secondary transition-all active:scale-95">
                <span>Shop Now</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
