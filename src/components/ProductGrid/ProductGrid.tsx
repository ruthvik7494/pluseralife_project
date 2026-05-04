import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';

// Existing assets
import digestImg from '../../assets/plusEra_purple_bottle.png';
import liverImg from '../../assets/plusEra_gold_bottle.png';
import immuneImg from '../../assets/plusEra_blue_bottle.png';

// New assets
import jointImg from '../../assets/plus-joint.png';
import detoxImg from '../../assets/plus-detox.png';
import mindImg from '../../assets/plus-mind.png';
import vitalImg from '../../assets/plus-vital.png';
import heartImg from '../../assets/plus-heart.png';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Plus-Joint™",
      tagline: "Cartilage Support",
      subtitle: "Joint & Mobility Care",
      image: jointImg,
    },
    {
      id: 2,
      name: "Plus-Detox™",
      tagline: "Full Body Cleanse",
      subtitle: "Natural Toxin Removal",
      image: detoxImg,
    },
    {
      id: 3,
      name: "Plus-Mind™",
      tagline: "Cognitive Enhancer",
      subtitle: "Memory & Focus Support",
      image: mindImg,
    },
    {
      id: 4,
      name: "Plus-Vital™",
      tagline: "Energy Booster",
      subtitle: "Stamina & Strength",
      image: vitalImg,
    },
    {
      id: 5,
      name: "Plus-Heart™",
      tagline: "Cardio Protection",
      subtitle: "Healthy Heart Function",
      image: heartImg,
    },
    {
      id: 6,
      name: "Plus-Digest™",
      tagline: "Probiotic Formula",
      subtitle: "Gut Health Support",
      image: digestImg,
    },
    {
      id: 7,
      name: "Plus-Liver™",
      tagline: "Hepatic Support",
      subtitle: "Liver Care Formula",
      image: liverImg,
    },
    {
      id: 8,
      name: "Plus-Immune™",
      tagline: "Immuno-modulator",
      subtitle: "Defense System Booster",
      image: immuneImg,
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl text-primary font-serif">Comprehensive Wellness</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our full range of ethically sourced, scientifically backed Ayurvedic formulations.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-bg-subtle rounded-3xl p-6 border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square rounded-2xl bg-white overflow-hidden mb-6 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{product.tagline}</p>
                <p className="text-sm text-gray-500">{product.subtitle}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary transition-colors group/btn">
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-lg shadow-primary/10">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
