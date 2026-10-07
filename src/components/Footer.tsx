import { motion } from 'framer-motion';
import { Wind, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1B1B1B] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-lg p-8 md:p-12 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A00]/5 via-transparent to-[#FF5A00]/5" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold">YOUR HOME.<br/>AT THE RIGHT TEMPERATURE.</h2>
            <p className="text-[#BFC3C7] mt-4 max-w-lg mx-auto">
              Professional HVAC service for Oakville and the Halton Region. Comfort, engineered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:+1234567890" className="px-8 py-4 bg-[#FF5A00] text-white font-heading font-bold text-sm tracking-wider rounded hover:bg-[#e65000] transition-all glow-accent">
                BOOK SERVICE
              </a>
              <a href="tel:+1234567890" className="px-8 py-4 border border-[#BFC3C7]/30 text-[#F4F4F4] font-heading font-bold text-sm tracking-wider rounded hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all">
                CALL NOW
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-sm flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">CLIMATECORE</span>
                <span className="tech-label block -mt-1">HVAC SYSTEMS</span>
              </div>
            </div>
            <p className="text-[#BFC3C7] text-sm leading-relaxed">
              Premium heating, cooling and indoor air quality solutions for Oakville and the Halton Region. 
              Comfort, engineered.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {['Heating', 'Cooling', 'HVAC Installation', 'Maintenance', 'Indoor Air Quality', 'Smart Climate'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">SERVICE AREAS</h4>
            <ul className="space-y-2">
              {['Oakville', 'Burlington', 'Milton', 'Halton Hills'].map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-[#BFC3C7]">
                  <MapPin className="w-3 h-3 text-[#FF5A00]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#BFC3C7]">
                <Phone className="w-4 h-4 text-[#FF5A00]" />
                <a href="tel:+1234567890" className="hover:text-[#FF5A00] transition-colors">(905) 555-0123</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#BFC3C7]">
                <Mail className="w-4 h-4 text-[#FF5A00]" />
                <a href="mailto:service@climatecore.ca" className="hover:text-[#FF5A00] transition-colors">service@climatecore.ca</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#BFC3C7]">
                <Clock className="w-4 h-4 text-[#FF5A00]" />
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#BFC3C7]">
                <MapPin className="w-4 h-4 text-[#FF5A00]" />
                <span>Oakville, Ontario</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1B1B1B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} ClimateCore HVAC Systems. All rights reserved. Serving Oakville and the Halton Region.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#555] hover:text-[#FF5A00] transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#555] hover:text-[#FF5A00] transition-colors">Terms</a>
            <a href="#" className="text-xs text-[#555] hover:text-[#FF5A00] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
