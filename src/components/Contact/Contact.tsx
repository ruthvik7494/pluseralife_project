import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-bg-subtle relative overflow-hidden">
      <div className="section-container">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-primary p-8 sm:p-12 lg:p-20 text-white space-y-8 sm:space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif mb-4">Get in touch</h2>
                <p className="text-sm sm:text-base text-white/70">
                  Have questions about our Ayurvedic medicines? Connect with our experts today.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-sm text-white/50 uppercase tracking-widest mb-1">Email</span>
                    <a href="mailto:plusera.life@gmail.com" className="text-base sm:text-lg hover:text-accent transition-colors break-words">plusera.life@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-sm text-white/50 uppercase tracking-widest mb-1">Phone</span>
                    <a href="tel:+918685888699" className="text-base sm:text-lg hover:text-accent transition-colors">+91 86858 88699</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-sm text-white/50 uppercase tracking-widest mb-1">Headquarters</span>
                    <div className="text-xs sm:text-sm text-white/90 space-y-4">
                      <p>
                        <strong className="text-white block mb-0.5">Registered Office:</strong>
                        Ocean Plaza, Sector-18, Noida
                      </p>
                      <p>
                        <strong className="text-white block mb-0.5">Corporate Office:</strong>
                        TDI Espania, GT Road, Sonipat, Haryana, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 sm:p-12 lg:p-20">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                    <option>Product Inquiry</option>
                    <option>Bulk Order</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 rounded-lg flex items-center justify-center space-x-2 group">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
