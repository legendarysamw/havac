import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Activity } from 'lucide-react';

const diagnosticSteps = [
  { label: 'THERMOSTAT', status: 'online', delay: 0 },
  { label: 'AIRFLOW', status: 'check', delay: 800 },
  { label: 'FILTER', status: 'check', delay: 1600 },
  { label: 'TEMPERATURE', status: 'check', delay: 2400 },
  { label: 'EQUIPMENT', status: 'inspection', delay: 3200 },
];

export default function DiagnosticInterface() {
  const [activeStep, setActiveStep] = useState(-1);
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && activeStep === -1) {
          diagnosticSteps.forEach((step, i) => {
            setTimeout(() => setActiveStep(i), step.delay);
          });
          setTimeout(() => setScanComplete(true), 4000);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('diagnostic-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [activeStep]);

  const getStatusIcon = (status: string, isActive: boolean) => {
    if (!isActive) return <div className="w-4 h-4 rounded-full border border-[#333]" />;
    switch (status) {
      case 'online': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'check': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'inspection': return <AlertCircle className="w-5 h-5 text-[#FF5A00]" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'ONLINE';
      case 'check': return 'CHECKED';
      case 'inspection': return 'INSPECTION REQUIRED';
      default: return 'WAITING';
    }
  };

  return (
    <section id="diagnostic-section" className="py-24 px-4 relative overflow-hidden">
      {/* Background scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A00]/30 to-transparent"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tech-label text-[#FF5A00]">SYSTEM DIAGNOSTICS</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">YOUR HVAC SYSTEM<br/>SHOULDN'T BE A MYSTERY.</h2>
        </motion.div>

        {/* Diagnostic Interface Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-lg overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#111111] border-b border-[#1B1B1B]">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-[#FF5A00]" />
              <span className="font-heading text-sm font-bold tracking-wider">SYSTEM SCAN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="tech-label">SCANNING</span>
            </div>
          </div>

          {/* Diagnostic steps */}
          <div className="p-6 md:p-8 space-y-4">
            {diagnosticSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={i <= activeStep ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between py-3 border-b border-[#1B1B1B] last:border-0"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(step.status, i <= activeStep)}
                  <span className={`font-heading font-semibold text-sm ${i <= activeStep ? 'text-[#F4F4F4]' : 'text-[#555]'}`}>
                    {step.label}
                  </span>
                </div>
                <span className={`tech-label ${
                  step.status === 'inspection' && i <= activeStep ? 'text-[#FF5A00]' : 
                  i <= activeStep ? 'text-green-400' : 'text-[#333]'
                }`}>
                  {i <= activeStep ? getStatusText(step.status) : 'WAITING'}
                </span>
              </motion.div>
            ))}

            {/* Progress bar */}
            <div className="mt-6">
              <div className="h-1 bg-[#1B1B1B] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF5A00] to-[#FF8C42]"
                  initial={{ width: '0%' }}
                  animate={{ width: scanComplete ? '100%' : `${(activeStep / diagnosticSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Result */}
          {scanComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 md:px-8 pb-8"
            >
              <div className="p-6 bg-[#FF5A00]/5 border border-[#FF5A00]/20 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-[#FF5A00] flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-lg">THE SYSTEM NEEDS A PROFESSIONAL DIAGNOSIS.</h4>
                    <p className="text-[#BFC3C7] text-sm mt-2">
                      Our technicians use professional-grade diagnostic equipment to accurately identify issues 
                      and recommend the right solution for your home.
                    </p>
                    <a href="#quote" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#FF5A00] text-white font-heading font-bold text-sm rounded hover:bg-[#e65000] transition-all">
                      BOOK A TECHNICIAN
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
