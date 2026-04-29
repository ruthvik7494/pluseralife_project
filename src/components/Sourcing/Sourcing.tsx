import React from 'react';
import { motion } from 'framer-motion';
import farmImg from '../../assets/herbal_farm_landscape.png';

const Sourcing = () => {
  return (
    <section id="sourcing" className="py-12 sm:py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center px-4">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl text-primary font-serif mb-4">Our Sourcing Network</h2>
              <h3 className="text-lg sm:text-xl text-secondary font-medium italic">
                Only the Finest Herbs Make It Through To Our Manufacturing
              </h3>
            </div>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At <span className="font-bold text-primary">PlusEra Lifesciences Co.</span>, every batch starts with carefully sourced and selected raw materials. We work with the finest farms and local harvesters who share our commitment to quality, purity, and sustainable practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 bg-bg-subtle rounded-xl border-l-4 border-primary">
                <span className="block text-xl sm:text-2xl font-bold text-primary">100%</span>
                <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Natural Sourcing</span>
              </div>
              <div className="p-4 bg-bg-subtle rounded-xl border-l-4 border-secondary">
                <span className="block text-xl sm:text-2xl font-bold text-secondary">Verified</span>
                <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Quality Control</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={farmImg}
                alt="Herbal Farm"
                className="w-full h-[300px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-white text-base sm:text-lg font-medium italic">
                  "Sourcing from high-altitude regions to ensure maximum therapeutic potency."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sourcing;
