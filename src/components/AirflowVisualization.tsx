import { motion } from 'framer-motion';

const stages = [
  { label: 'OUTDOOR AIR', desc: 'Fresh air intake', y: 0 },
  { label: 'HVAC SYSTEM', desc: 'Conditioning unit', y: 1 },
  { label: 'FILTER', desc: 'Particle removal', y: 2 },
  { label: 'HEATING / COOLING', desc: 'Temperature control', y: 3 },
  { label: 'DUCTWORK', desc: 'Air distribution', y: 4 },
  { label: 'ROOMS', desc: 'Delivered comfort', y: 5 },
  { label: 'RETURN AIR', desc: 'Air recirculation', y: 6 },
  { label: 'SYSTEM', desc: 'Cycle continues', y: 7 },
];

export default function AirflowVisualization() {
  return (
    <section className="py-24 px-4 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tech-label text-[#FF5A00]">AIRFLOW DYNAMICS</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">HOW AIR MOVES<br/>THROUGH YOUR HOME.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Understanding the path of conditioned air helps you appreciate why system design matters.
          </p>
        </motion.div>

        {/* Airflow Path Visualization */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF5A00]/50 via-[#BFC3C7]/20 to-[#FF5A00]/50" />

          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="glass-panel p-4 rounded inline-block">
                  <h4 className="font-heading font-bold text-sm">{stage.label}</h4>
                  <p className="tech-label mt-1">{stage.desc}</p>
                </div>
              </div>

              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#FF5A00]"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#FF5A00]/30 animate-ping" />
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1" />

              {/* Flowing particle */}
              <motion.div
                className="absolute left-1/2 w-2 h-2 bg-[#FF5A00]/60 rounded-full -translate-x-1/2"
                animate={{
                  y: [0, 60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          ))}

          {/* Cycle arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="text-[#FF5A00]"
              >
                ↻
              </motion.span>
              <span className="tech-label">CONTINUOUS CYCLE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
