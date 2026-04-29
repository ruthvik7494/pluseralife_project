import { motion } from 'framer-motion';

const Domains = () => {
  const domains = [
    "Health Restoration", "Liver Health", "Digestive Health",
    "Respiratory Health", "Women's Health", "Mental Health",
    "Infant & Child Care", "Pain Management", "Sexual Wellness",
    "Joint & Bone Health", "Renal Health", "Metabolic Health"
  ];

  return (
    <section id="products" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif">Focused Therapeutic Domains</h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              className="border border-white/20 rounded-xl p-4 sm:p-6 text-center cursor-pointer transition-colors backdrop-blur-sm bg-white/5"
            >
              <span className="text-base sm:text-lg font-medium tracking-wide">{domain}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 italic max-w-2xl mx-auto">
            Our specialized ranges are formulated to address specific health concerns with the precision of classical Ayurveda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Domains;
