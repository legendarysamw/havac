import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Thermometer, Wind, Filter, Settings, Home, Zap } from 'lucide-react';

const components = [
  {
    id: 'thermostat',
    label: 'THERMOSTAT',
    icon: Thermometer,
    position: { top: '25%', left: '55%' },
    description: 'Controls temperature settings and system scheduling.',
    problems: ['Inaccurate readings', 'Unresponsive display', 'Short cycling', 'System not following schedule'],
    service: 'Annual calibration check recommended',
    x: 35, y: 30,
  },
  {
    id: 'furnace',
    label: 'FURNACE',
    icon: Settings,
    position: { top: '60%', left: '30%' },
    description: 'Primary heating system. Burns fuel to generate warm air distributed through ductwork.',
    problems: ['No heat output', 'Strange noises', 'Pilot light issues', 'Frequent cycling'],
    service: 'Annual inspection before heating season',
    x: 25, y: 65,
  },
  {
    id: 'ac',
    label: 'AC / HEAT PUMP',
    icon: Wind,
    position: { top: '70%', left: '70%' },
    description: 'Outdoor unit that handles cooling and heat transfer. Heat pumps provide both heating and cooling.',
    problems: ['Not cooling', 'Ice buildup', 'Refrigerant leaks', 'Compressor failure'],
    service: 'Spring tune-up before cooling season',
    x: 75, y: 75,
  },
  {
    id: 'filter',
    label: 'AIR FILTER',
    icon: Filter,
    position: { top: '45%', left: '40%' },
    description: 'Removes particles, allergens and contaminants from circulated air.',
    problems: ['Clogged filter', 'Reduced airflow', 'Increased energy bills', 'Poor indoor air quality'],
    service: 'Replace every 1-3 months depending on type',
    x: 40, y: 45,
  },
  {
    id: 'ductwork',
    label: 'DUCTWORK',
    icon: Home,
    position: { top: '35%', left: '50%' },
    description: 'Network of channels that distributes conditioned air throughout your home.',
    problems: ['Leaks and gaps', 'Poor insulation', 'Blocked vents', 'Uneven temperatures'],
    service: 'Professional inspection every 3-5 years',
    x: 50, y: 35,
  },
  {
    id: 'outdoor',
    label: 'OUTDOOR UNIT',
    icon: Zap,
    position: { top: '80%', left: '80%' },
    description: 'Condenser unit that exchanges heat with outdoor air for cooling or heat pump operation.',
    problems: ['Debris buildup', 'Fan motor issues', 'Coil damage', 'Electrical problems'],
    service: 'Clear debris seasonally, annual professional service',
    x: 82, y: 82,
  },
];

export default function InteractiveHouse() {
  const [selected, setSelected] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const selectedComponent = components.find(c => c.id === selected);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -10, y: x * 10 });
  };

  return (
    <section id="system" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tech-label text-[#FF5A00]">INTERACTIVE SYSTEM EXPLORER</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">INSIDE YOUR<br/>HVAC SYSTEM.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Click on any component to understand what it does, common problems, and when to service it.
          </p>
        </motion.div>

        {/* Interactive House */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        >
          <div className="house-3d">
            <div 
              className="house-model relative aspect-[4/3] rounded-lg overflow-hidden border border-[#BFC3C7]/10"
              style={{ 
                transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
              }}
            >
              {/* House SVG illustration with blueprint background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#1B1B1B]">
                {/* Blueprint background image */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'url(https://image.qwenlm.ai/generated-images/70d5526d-1e26-4d3b-b26a-847e9e95d922/_result.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* House outline */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                  {/* House structure */}
                  <path d="M50 150 L200 50 L350 150 L350 270 L50 270 Z" stroke="#BFC3C7" strokeWidth="1" fill="none" opacity="0.3" />
                  {/* Roof */}
                  <path d="M40 155 L200 45 L360 155" stroke="#FF5A00" strokeWidth="1.5" fill="none" opacity="0.5" />
                  {/* Floors */}
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#BFC3C7" strokeWidth="0.5" opacity="0.2" />
                  {/* Rooms */}
                  <line x1="200" y1="150" x2="200" y2="270" stroke="#BFC3C7" strokeWidth="0.5" opacity="0.2" />
                  <line x1="120" y1="200" x2="120" y2="270" stroke="#BFC3C7" strokeWidth="0.5" opacity="0.2" />
                  <line x1="280" y1="150" x2="280" y2="270" stroke="#BFC3C7" strokeWidth="0.5" opacity="0.2" />
                  
                  {/* Ductwork lines */}
                  <path d="M200 180 L200 100 L150 100 L150 180" stroke="#FF5A00" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <path d="M200 180 L250 180 L250 240" stroke="#FF5A00" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <path d="M200 180 L150 220 L100 220" stroke="#FF5A00" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  
                  {/* Furnace */}
                  <rect x="170" y="210" width="60" height="50" rx="3" stroke="#BFC3C7" strokeWidth="1" fill="#1B1B1B" />
                  <text x="200" y="240" textAnchor="middle" fill="#BFC3C7" fontSize="8" opacity="0.5">FURNACE</text>
                  
                  {/* AC Unit outside */}
                  <rect x="320" y="230" width="40" height="30" rx="2" stroke="#BFC3C7" strokeWidth="1" fill="#1B1B1B" />
                  <text x="340" y="248" textAnchor="middle" fill="#BFC3C7" fontSize="6" opacity="0.5">AC</text>
                  
                  {/* Thermostat */}
                  <rect x="130" y="160" width="20" height="25" rx="2" stroke="#FF5A00" strokeWidth="1" fill="#1B1B1B" />
                  <text x="140" y="175" textAnchor="middle" fill="#FF5A00" fontSize="6">°C</text>
                  
                  {/* Filter */}
                  <rect x="185" y="195" width="30" height="10" rx="1" stroke="#BFC3C7" strokeWidth="0.5" fill="none" />
                  <line x1="190" y1="195" x2="190" y2="205" stroke="#BFC3C7" strokeWidth="0.3" opacity="0.5" />
                  <line x1="195" y1="195" x2="195" y2="205" stroke="#BFC3C7" strokeWidth="0.3" opacity="0.5" />
                  <line x1="200" y1="195" x2="200" y2="205" stroke="#BFC3C7" strokeWidth="0.3" opacity="0.5" />
                  <line x1="205" y1="195" x2="205" y2="205" stroke="#BFC3C7" strokeWidth="0.3" opacity="0.5" />
                  <line x1="210" y1="195" x2="210" y2="205" stroke="#BFC3C7" strokeWidth="0.3" opacity="0.5" />
                </svg>

                {/* Animated airflow particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#FF5A00]/40 rounded-full"
                    animate={{
                      x: [0, 50, 100, 150],
                      y: [0, -20, 10, -30],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    style={{
                      left: `${20 + i * 5}%`,
                      top: `${50 + (i % 3) * 10}%`,
                    }}
                  />
                ))}
              </div>

              {/* Hotspots */}
              {components.map((comp) => (
                <motion.button
                  key={comp.id}
                  className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${
                    selected === comp.id 
                      ? 'bg-[#FF5A00] scale-125' 
                      : 'bg-[#1B1B1B]/80 border border-[#FF5A00]/50 hover:bg-[#FF5A00]/20 hover:scale-110'
                  }`}
                  style={{ top: comp.position.top, left: comp.position.left, transform: 'translate(-50%, -50%)' }}
                  onClick={() => setSelected(selected === comp.id ? null : comp.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <comp.icon className="w-4 h-4 text-[#FF5A00]" />
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full border border-[#FF5A00]/40 animate-ping" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Component detail panel */}
          <AnimatePresence>
            {selectedComponent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 glass-panel p-6 md:p-8 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <selectedComponent.icon className="w-6 h-6 text-[#FF5A00]" />
                      <h3 className="font-heading text-xl md:text-2xl font-bold">{selectedComponent.label}</h3>
                    </div>
                    <p className="text-[#BFC3C7] mt-3">{selectedComponent.description}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="p-2 hover:bg-[#1B1B1B] rounded">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="tech-label text-[#FF5A00] mb-2">COMMON PROBLEMS</h4>
                    <ul className="space-y-1">
                      {selectedComponent.problems.map((p, i) => (
                        <li key={i} className="text-sm text-[#BFC3C7] flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#FF5A00] rounded-full" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="tech-label text-[#FF5A00] mb-2">WHEN TO SERVICE</h4>
                    <p className="text-sm text-[#BFC3C7]">{selectedComponent.service}</p>
                  </div>
                  <div>
                    <h4 className="tech-label text-[#FF5A00] mb-2">GET HELP</h4>
                    <p className="text-sm text-[#BFC3C7] mb-3">Professional diagnosis and service available.</p>
                    <a href="#quote" className="inline-flex items-center gap-2 text-[#FF5A00] text-sm font-semibold hover:underline">
                      REQUEST QUOTE →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
