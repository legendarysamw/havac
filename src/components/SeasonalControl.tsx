import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Flower2, Sun, Leaf } from 'lucide-react';

const seasons = [
  {
    id: 'winter',
    label: 'WINTER',
    icon: Snowflake,
    color: '#4FC3F7',
    headline: 'IS YOUR HEATING SYSTEM READY?',
    subheadline: 'Furnace performance, gas safety, and heating efficiency.',
    services: ['Furnace inspection', 'Heat exchanger check', 'Gas line inspection', 'Thermostat calibration'],
    cta: 'BOOK HEATING SERVICE',
    gradient: 'from-blue-900/20 to-[#050505]',
  },
  {
    id: 'spring',
    label: 'SPRING',
    icon: Flower2,
    color: '#81C784',
    headline: 'TIME FOR A SYSTEM CHECK.',
    subheadline: 'Post-wear assessment and cooling preparation.',
    services: ['AC tune-up', 'Filter replacement', 'Duct inspection', 'System cleaning'],
    cta: 'BOOK SPRING SERVICE',
    gradient: 'from-green-900/20 to-[#050505]',
  },
  {
    id: 'summer',
    label: 'SUMMER',
    icon: Sun,
    color: '#FFB74D',
    headline: 'IS YOUR HOME READY FOR THE HEAT?',
    subheadline: 'Cooling performance, efficiency, and comfort.',
    services: ['AC performance check', 'Refrigerant levels', 'Condenser cleaning', 'Thermostat optimization'],
    cta: 'BOOK COOLING SERVICE',
    gradient: 'from-orange-900/20 to-[#050505]',
  },
  {
    id: 'fall',
    label: 'FALL',
    icon: Leaf,
    color: '#FF8A65',
    headline: 'PREPARE FOR THE COLD.',
    subheadline: 'Heating system preparation before winter arrives.',
    services: ['Furnace start-up', 'Safety inspection', 'Duct cleaning', 'Humidifier setup'],
    cta: 'BOOK PRE-WINTER SERVICE',
    gradient: 'from-amber-900/20 to-[#050505]',
  },
];

export default function SeasonalControl() {
  const [activeSeason, setActiveSeason] = useState('summer');
  const current = seasons.find(s => s.id === activeSeason)!;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Dynamic background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${current.gradient}`}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tech-label text-[#FF5A00]">SEASONAL COMFORT</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">EVERY SEASON<br/>DEMANDS DIFFERENT.</h2>
        </motion.div>

        {/* Season selector */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {seasons.map((season) => (
            <motion.button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`flex flex-col items-center gap-2 px-4 md:px-8 py-4 rounded-lg border transition-all ${
                activeSeason === season.id
                  ? 'border-[#FF5A00] bg-[#FF5A00]/10'
                  : 'border-[#BFC3C7]/10 hover:border-[#BFC3C7]/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <season.icon 
                className="w-6 h-6 md:w-8 md:h-8"
                style={{ color: activeSeason === season.id ? '#FF5A00' : season.color }}
              />
              <span className="font-heading text-xs md:text-sm font-bold">{season.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Season content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-lg p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-4xl font-bold" style={{ color: current.color }}>
                  {current.headline}
                </h3>
                <p className="text-[#BFC3C7] mt-4 text-lg">{current.subheadline}</p>
                <a href="#quote" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#FF5A00] text-white font-heading font-bold text-sm rounded hover:bg-[#e65000] transition-all">
                  {current.cta}
                </a>
              </div>
              <div>
                <h4 className="tech-label text-[#FF5A00] mb-4">RECOMMENDED SERVICES</h4>
                <ul className="space-y-3">
                  {current.services.map((service, i) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-[#BFC3C7]"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.color }} />
                      <span className="text-sm md:text-base">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
