import { ShieldCheck, HeartPulse, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Values = () => {
  const values = [
    {
      title: "Quality Assurance",
      description: "We maintain the highest standards of purity through rigorous testing and selection of ingredients.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />
    },
    {
      title: "Product Integrity",
      description: "Our formulations remain true to classical Ayurvedic texts while meeting modern safety standards.",
      icon: <Leaf className="w-10 h-10 text-white" />
    },
    {
      title: "Ethical Practices",
      description: "We are committed to transparent business models and sustainable sourcing of our raw materials.",
      icon: <HeartPulse className="w-10 h-10 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-bg-subtle">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl text-primary font-serif">Our Core Values</h2>
          <div className="w-20 sm:w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4 sm:space-y-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20 rotate-3 transition-transform hover:rotate-0">
                <div className="scale-75 sm:scale-100">{value.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
