import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertTriangle, Search, Wrench, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    problem: 'Home wasn\'t cooling evenly. Upper floors were significantly warmer.',
    diagnosis: 'Airflow and ductwork assessment revealed imbalanced distribution and aging equipment.',
    solution: 'Professional system evaluation, ductwork optimization, and equipment service.',
    result: 'More consistent temperatures throughout the home.',
    type: 'Cooling',
    area: 'Oakville',
  },
  {
    problem: 'Furnace making unusual banging noises during startup.',
    diagnosis: 'Delayed ignition causing gas buildup before ignition.',
    solution: 'Professional inspection and service of ignition system and burners.',
    result: 'Quiet, reliable heating operation restored.',
    type: 'Heating',
    area: 'Burlington',
  },
  {
    problem: 'Energy bills increasing despite no change in usage patterns.',
    diagnosis: 'Aging equipment operating below rated efficiency, combined with duct leakage.',
    solution: 'System assessment, duct sealing, and equipment servicing.',
    result: 'Improved efficiency and reduced energy consumption.',
    type: 'Efficiency',
    area: 'Milton',
  },
  {
    problem: 'Persistent dust and allergens despite regular cleaning.',
    diagnosis: 'Inadequate filtration and ductwork contamination.',
    solution: 'Air quality assessment, upgraded filtration, and duct cleaning.',
    result: 'Noticeably improved indoor air quality.',
    type: 'Air Quality',
    area: 'Oakville',
  },
  {
    problem: 'AC system short-cycling, turning on and off frequently.',
    diagnosis: 'Oversized equipment combined with thermostat placement issues.',
    solution: 'Professional diagnosis, system recalibration, and thermostat relocation.',
    result: 'Stable operation and improved comfort control.',
    type: 'Cooling',
    area: 'Halton Hills',
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1)
      : Math.min(caseStudies.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tech-label text-[#FF5A00]">PROJECT EXAMPLES</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">REAL HOMES.<br/>REAL HVAC PROBLEMS.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Example projects illustrating how professional diagnosis and service resolves common comfort issues.
          </p>
          <span className="tech-label text-[#555] mt-2 block">EXAMPLE PROJECTS — ILLUSTRATIVE SCENARIOS</span>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => scroll('left')}
            disabled={activeIndex === 0}
            className="p-3 rounded-full border border-[#333] hover:border-[#FF5A00] disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-heading text-sm text-[#BFC3C7]">
            {activeIndex + 1} / {caseStudies.length}
          </span>
          <button
            onClick={() => scroll('right')}
            disabled={activeIndex === caseStudies.length - 1}
            className="p-3 rounded-full border border-[#333] hover:border-[#FF5A00] disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Case Study Cards */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {caseStudies.map((study, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2 md:px-4">
                <div className="glass-panel rounded-lg p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#FF5A00]/10 border border-[#FF5A00]/30 rounded text-xs font-heading font-bold text-[#FF5A00]">
                      {study.type}
                    </span>
                    <span className="tech-label">{study.area}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <span className="tech-label text-red-400">PROBLEM</span>
                        </div>
                        <p className="text-[#F4F4F4]">{study.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Search className="w-4 h-4 text-[#FF5A00]" />
                          <span className="tech-label text-[#FF5A00]">DIAGNOSIS</span>
                        </div>
                        <p className="text-[#BFC3C7]">{study.diagnosis}</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Wrench className="w-4 h-4 text-[#BFC3C7]" />
                          <span className="tech-label text-[#BFC3C7]">SOLUTION</span>
                        </div>
                        <p className="text-[#BFC3C7]">{study.solution}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="tech-label text-green-400">RESULT</span>
                        </div>
                        <p className="text-[#F4F4F4] font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-[#FF5A00] w-6' : 'bg-[#333] hover:bg-[#555]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
