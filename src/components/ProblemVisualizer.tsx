import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Snowflake, Flame, Volume2, Wind, Zap, Clock, Settings, X } from 'lucide-react';

const problems = [
  { id: 'not-cooling', label: 'NOT COOLING', icon: Snowflake, component: 'AC / Heat Pump', causes: ['Refrigerant issue', 'Dirty condenser coil', 'Thermostat setting', 'Compressor problem'] },
  { id: 'not-heating', label: 'NOT HEATING', icon: Flame, component: 'Furnace', causes: ['Pilot light / ignition', 'Thermostat calibration', 'Gas supply', 'Heat exchanger'] },
  { id: 'weird-noise', label: 'WEIRD NOISE', icon: Volume2, component: 'Multiple', causes: ['Loose components', 'Motor bearing wear', 'Ductwork expansion', 'Blower wheel imbalance'] },
  { id: 'weak-airflow', label: 'WEAK AIRFLOW', icon: Wind, component: 'Ductwork / Filter', causes: ['Clogged filter', 'Duct leaks', 'Blower motor issue', 'Blocked vents'] },
  { id: 'bad-odor', label: 'BAD ODOR', icon: AlertTriangle, component: 'Air Quality', causes: ['Mold / mildew', 'Dirty ductwork', 'Dead animal in duct', 'Gas leak (urgent)'] },
  { id: 'high-bill', label: 'HIGH ENERGY BILL', icon: Zap, component: 'System Efficiency', causes: ['Aging equipment', 'Poor insulation', 'Thermostat issues', 'System oversized/undersized'] },
  { id: 'short-cycling', label: 'SHORT CYCLING', icon: Clock, component: 'Thermostat / Equipment', causes: ['Oversized system', 'Thermostat placement', 'Dirty filter', 'Refrigerant charge'] },
  { id: 'thermostat', label: 'THERMOSTAT PROBLEM', icon: Settings, component: 'Thermostat', causes: ['Dead batteries', 'Wiring issue', 'Calibration drift', 'Compatibility problem'] },
];

export default function ProblemVisualizer() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProblem = problems.find(p => p.id === selected);

  return (
    <section id="diagnostics" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tech-label text-[#FF5A00]">PROBLEM IDENTIFICATION</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">WHAT'S YOUR<br/>HOME DOING?</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Select the symptom you're experiencing. We'll help identify what might be happening.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {problems.map((problem, i) => (
            <motion.button
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(selected === problem.id ? null : problem.id)}
              className={`p-6 rounded-lg border text-left transition-all ${
                selected === problem.id
                  ? 'border-[#FF5A00] bg-[#FF5A00]/10'
                  : 'border-[#BFC3C7]/10 bg-[#111111] hover:border-[#FF5A00]/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <problem.icon className={`w-8 h-8 mb-3 ${selected === problem.id ? 'text-[#FF5A00]' : 'text-[#BFC3C7]'}`} />
              <h4 className="font-heading font-bold text-sm">{problem.label}</h4>
            </motion.button>
          ))}
        </div>

        {/* Selected Problem Detail */}
        <AnimatePresence>
          {selectedProblem && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-panel rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="tech-label text-[#FF5A00]">POSSIBLE CAUSES</span>
                    <h3 className="font-heading text-2xl font-bold mt-2">{selectedProblem.label}</h3>
                    <p className="text-[#BFC3C7] text-sm mt-1">
                      Related component: <span className="text-[#F4F4F4]">{selectedProblem.component}</span>
                    </p>
                  </div>
                  <button onClick={() => setSelected(null)} className="p-2 hover:bg-[#1B1B1B] rounded">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="tech-label mb-3">WHAT MIGHT BE HAPPENING</h4>
                    <ul className="space-y-2">
                      {selectedProblem.causes.map((cause, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-sm text-[#BFC3C7]"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#FF5A00]/10 border border-[#FF5A00]/30 flex items-center justify-center text-[#FF5A00] text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          {cause}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="glass-panel p-4 rounded bg-[#FF5A00]/5 border-[#FF5A00]/20">
                      <p className="text-sm text-[#BFC3C7]">
                        <span className="text-[#FF5A00] font-semibold">Note:</span> This is a general overview. 
                        A professional diagnosis is required to accurately identify the issue and recommend the correct solution.
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-heading text-lg font-bold mb-3">LET'S DIAGNOSE IT.</p>
                      <a href="#quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A00] text-white font-heading font-bold text-sm rounded hover:bg-[#e65000] transition-all">
                        BOOK SERVICE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
