import { motion } from 'framer-motion';
import visionImg from '../../assets/ayurvedic_mortar_pestle.png';
import approachImg from '../../assets/ayurvedic_lab_tubes.png';
import commitmentImg from '../../assets/doctor_consultation_warm.png';

const About = () => {
  const sections = [
    {
      title: "Vision & Philosophy",
      subtitle: "About PlusEra Lifesciences Co.",
      description: "PlusEra Lifesciences Co. was started with the vision of advancing authentic Ayurveda through integrity, knowledge, and responsibility. Inspired by the timeless wisdom of classical Ayurvedic texts, we believe that real healing lies in restoring balance within the body—while respecting the natural intelligence within.",
      image: visionImg,
      reverse: false
    },
    {
      title: "Scientific Approach & Manufacturing Standards",
      description: "Our formulations are developed by combining classical Ayurvedic principles with contemporary scientific standards. Through rigorous raw material assessment, quality control, and adherence to golden manufacturing practices, we ensure that every product reflects the purity of traditional knowledge and the precision of modern healthcare.",
      image: approachImg,
      reverse: true
    },
    {
      title: "Commitment to Physicians & Patients",
      description: "At PlusEra Lifesciences Co., we work closely with physicians to provide ethical practitioner-approved formulations designed to enhance patient outcomes. Each product is developed with an unwavering focus on chemical purity, therapeutic efficacy, and clinical results, ensuring consistency, safety, and efficiency in every dose. Through our ethical business model, research-driven approach, and commitment to transparency, we aim to build strong relationships with patients and clinics. Our mission is not only to deliver authentic Ayurvedic medicines but also to bridge the gap between traditional wisdom and the future of healthcare.",
      image: commitmentImg,
      reverse: false
    }
  ];

  return (
    <section id="about" className="py-6 md:py-24 bg-white overflow-hidden">
      <div className="section-container space-y-32">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`space-y-6 ${section.reverse ? 'lg:order-2' : ''}`}>
              {section.subtitle && (
                <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                  {section.subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl text-primary font-serif">
                {section.title}
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full"></div>
              <p className="text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className={`relative ${section.reverse ? 'lg:order-1' : ''}`}>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative square */}
              <div className={`absolute -z-10 w-full h-full border-2 border-accent/20 rounded-3xl ${section.reverse ? '-top-6 -right-6' : '-bottom-6 -left-6'}`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
