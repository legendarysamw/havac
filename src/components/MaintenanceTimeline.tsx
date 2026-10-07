import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  { id: 'install', label: 'INSTALL', desc: 'Professional installation of new HVAC equipment. Proper sizing, placement and setup for optimal performance.' },
  { id: 'setup', label: 'SETUP', desc: 'System configuration, thermostat programming, airflow balancing and initial performance testing.' },
  { id: 'maintain', label: 'MAINTAIN', desc: 'Regular filter changes, cleaning, and minor adjustments to keep the system running at peak efficiency.' },
  { id: 'inspect', label: 'INSPECT', desc: 'Annual professional inspection to identify wear, potential issues, and safety concerns before they become problems.' },
  { id: 'optimize', label: 'OPTIMIZE', desc: 'Fine-tuning system performance, upgrading components, and improving efficiency as your needs change.' },
  { id: 'repair', label: 'REPAIR', desc: 'Professional diagnosis and repair when components fail or performance degrades beyond normal wear.' },
  { id: 'replace', label: 'REPLACE', desc: 'When repair costs exceed value or equipment reaches end of life, professional replacement with modern efficient systems.' },
];

export default function MaintenanceTimeline() {
  const [activeStage, setActiveStage] = useState('maintain');
  const currentStage = stages.find(s => s.id === activeStage)!;

  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tech-label text-[#FF5A00]">SYSTEM LIFE CYCLE</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">YOUR HVAC SYSTEM<br/>HAS A LIFE CYCLE.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Understanding where your system is in its lifecycle helps you make better decisions about maintenance, repair, and replacement.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#1B1B1B]" />
          
          {/* Timeline nodes */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:justify-between mb-12">
            {stages.map((stage, i) => (
              <motion.button
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveStage(stage.id)}
                className="relative flex flex-col items-center gap-2 px-3 py-2 md:px-4"
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                  activeStage === stage.id 
                    ? 'bg-[#FF5A00] border-[#FF5A00] scale-125' 
                    : 'bg-[#111111] border-[#333] hover:border-[#FF5A00]/50'
                }`} />
                <span className={`font-heading text-xs font-bold transition-colors ${
                  activeStage === stage.id ? 'text-[#FF5A00]' : 'text-[#BFC3C7]'
                }`}>
                  {stage.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active stage detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-lg p-8 md:p-12 text-center"
            >
              <span className="tech-label text-[#FF5A00]">STAGE: {currentStage.label}</span>
              <p className="text-[#F4F4F4] text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
                {currentStage.desc}
              </p>
              <a href="#quote" className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[#FF5A00] text-[#FF5A00] font-heading font-bold text-sm rounded hover:bg-[#FF5A00] hover:text-white transition-all">
                DISCUSS YOUR SYSTEM
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
