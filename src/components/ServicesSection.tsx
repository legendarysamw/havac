import { motion } from 'framer-motion';
import { Flame, Snowflake, Wrench, Shield, Wind, Zap } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'HEATING',
    icon: Flame,
    items: ['Furnaces', 'Heat pumps', 'Heating diagnostics', 'Heating repairs', 'Heating replacement'],
  },
  {
    number: '02',
    title: 'COOLING',
    icon: Snowflake,
    items: ['Air conditioning', 'Heat pumps', 'Cooling diagnostics', 'AC repair', 'AC replacement'],
  },
  {
    number: '03',
    title: 'HVAC INSTALLATION',
    icon: Wrench,
    items: ['System replacement', 'New equipment', 'Home renovations', 'New construction'],
  },
  {
    number: '04',
    title: 'MAINTENANCE',
    icon: Shield,
    items: ['Seasonal inspections', 'Preventative maintenance', 'System optimization', 'Filter replacement'],
  },
  {
    number: '05',
    title: 'INDOOR AIR QUALITY',
    icon: Wind,
    items: ['Air filtration', 'Humidity control', 'Air purification', 'Ventilation', 'Indoor-air assessments'],
  },
  {
    number: '06',
    title: 'SMART CLIMATE',
    icon: Zap,
    items: ['Smart thermostats', 'Zoning', 'Connected HVAC controls', 'Energy monitoring'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tech-label text-[#FF5A00]">OUR SERVICES</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">HEAT. COOL.<br/>BREATHE BETTER.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Complete HVAC solutions for Oakville and the Halton Region. Every service backed by professional expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="service-card glass-panel p-8 rounded-lg group relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute top-4 right-4 font-heading text-6xl font-bold text-[#BFC3C7]/5 group-hover:text-[#FF5A00]/10 transition-colors">
                {service.number}
              </span>

              <service.icon className="w-10 h-10 text-[#FF5A00] mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
              
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#BFC3C7]">
                    <span className="w-1 h-1 bg-[#FF5A00] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A00] text-white font-heading font-bold text-sm tracking-wider rounded hover:bg-[#e65000] transition-all glow-accent">
            BOOK SERVICE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
