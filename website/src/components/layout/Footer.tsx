import React from "react";

export function Footer() {
  return (
    <footer className="bg-midnight-slate mesh-bg-dark pt-20 pb-10 border-t border-premium-gold/20 relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-premium-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-premium-gold/30">
                <img src="/images/logo.jpeg" alt="K Service Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-3xl font-serif font-bold text-premium-gold tracking-wider">
                K SERVICE
              </span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed max-w-xs">
              A pioneer in the multi-sector trade and service sector, acting as a strategic gateway connecting Vietnam and Southeast Asia.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-pure-white font-bold font-serif mb-6 text-lg">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-pure-white/70">
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-ECOTOURISM</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-TRADING</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-DUTY FREE</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-SMART FARM</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-COUNSEL</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">K-INVESTMENT</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-pure-white font-bold font-serif mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-pure-white/70">
              <li><a href="#about" className="hover:text-premium-gold transition-colors">About Us</a></li>
              <li><a href="#ecosystem" className="hover:text-premium-gold transition-colors">Our Services</a></li>
              <li><a href="#heritage" className="hover:text-premium-gold transition-colors">ESG Commitment</a></li>
              <li><a href="#why-us" className="hover:text-premium-gold transition-colors">Why K Service Trading</a></li>
              <li><a href="#contact" className="hover:text-premium-gold transition-colors">Contact VIP Advisory</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-pure-white font-bold font-serif mb-6 text-lg">Global Headquarters</h4>
            <ul className="space-y-4 text-sm text-pure-white/70">
              <li>Vietnam & Southeast Asia Hub</li>
              <li>
                <span className="block text-pure-white/50 text-xs uppercase tracking-wider mb-1 mt-4">VIP Hotline</span>
                <a href="tel:+84935777727" className="hover:text-premium-gold transition-colors">(+84) 935 7777 27</a>
              </li>
              <li>
                <span className="block text-pure-white/50 text-xs uppercase tracking-wider mb-1 mt-4">Email</span>
                <a href="mailto:info@k-tourism.club" className="hover:text-premium-gold transition-colors">info@k-tourism.club</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-pure-white/50">
            &copy; {new Date().getFullYear()} K Service Trading Co., Ltd. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-pure-white/50">
            <a href="#" className="hover:text-pure-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pure-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
