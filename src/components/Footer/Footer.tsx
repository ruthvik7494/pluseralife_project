import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/plusimglogobgremove.png';

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 sm:pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
                <img src={logo} alt="PlusEra Lifesciences" className="h-14 w-auto object-contain brightness-0 invert" />
                <div className="text-xs font-bold tracking-[0.2em] text-white/90">PLUSERA LIFESCIENCES CO.</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              PlusEra Lifesciences Co. is dedicated to restoring balance through authentic Ayurvedic medicines and ethical pharmaceutical practices.
            </p>
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Follow Us</span>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group">
                  <FacebookIcon size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group">
                  <InstagramIcon size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group">
                  <TwitterIcon size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group">
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
        </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-accent uppercase tracking-[0.2em]">Headquarters</h4>
            <div className="space-y-8 text-white/70 text-xs leading-relaxed">
              <div>
                <strong className="text-white block mb-2 font-semibold">Registered Office:</strong>
                <p className="opacity-80">Ocean Plaza, Sector-18, Noida</p>
              </div>
              <div>
                <strong className="text-white block mb-2 font-semibold">Corporate Office:</strong>
                <p className="opacity-80">TDI Espania, GT Road, Sonipat, Haryana, India</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-accent uppercase tracking-[0.2em]">Inquiries</h4>
            <div className="space-y-6 text-white/70 text-xs">
              <div>
                <span className="block text-white/40 uppercase tracking-widest mb-1 text-[10px]">Email Address</span>
                <a href="mailto:plusera.life@gmail.com" className="text-sm sm:text-base hover:text-white transition-colors font-medium">plusera.life@gmail.com</a>
              </div>
              <div>
                <span className="block text-white/40 uppercase tracking-widest mb-1 text-[10px]">Phone Number</span>
                <a href="tel:+918685888699" className="text-sm sm:text-base hover:text-white transition-colors font-medium">+91 86858 88699</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© 2026 PlusEra Lifesciences Co. All rights reserved. | Authentic Ayurveda. Ethical Medicines. Healthier Humanity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
