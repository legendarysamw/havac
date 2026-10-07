import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, AlertTriangle, Thermometer, Settings, Clock, MapPin, Phone, Mail, User, CheckCircle } from 'lucide-react';

const questions = [
  { id: 'home', label: 'HOME TYPE', icon: Home, options: ['Detached', 'Semi-detached', 'Townhouse', 'Condo', 'Other'] },
  { id: 'problem', label: 'WHAT\'S THE ISSUE?', icon: AlertTriangle, options: ['Not cooling', 'Not heating', 'Weird noise', 'Weak airflow', 'High bills', 'Maintenance', 'New install', 'Other'] },
  { id: 'system', label: 'HEATING / COOLING / BOTH?', icon: Thermometer, options: ['Heating', 'Cooling', 'Both', 'Not sure'] },
  { id: 'equipment', label: 'EXISTING EQUIPMENT?', icon: Settings, options: ['Furnace + AC', 'Heat pump', 'Boiler', 'Not sure', 'New installation needed'] },
  { id: 'age', label: 'APPROXIMATE AGE?', icon: Clock, options: ['Less than 5 years', '5-10 years', '10-15 years', '15+ years', 'New construction'] },
  { id: 'action', label: 'REPAIR OR REPLACE?', icon: Settings, options: ['Repair', 'Replace', 'Not sure', 'Maintenance'] },
  { id: 'location', label: 'PROPERTY LOCATION', icon: MapPin, options: ['Oakville', 'Burlington', 'Milton', 'Halton Hills', 'Other'] },
];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((step) / (questions.length + 1)) * 100;

  return (
    <section id="quote" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tech-label text-[#FF5A00]">GET YOUR QUOTE</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">WHAT WILL YOUR<br/>HVAC PROJECT COST?</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            HVAC pricing depends on equipment, system condition, access, installation requirements and scope. 
            We provide clear pricing before work begins whenever possible.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-lg p-6 md:p-10"
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="tech-label">STEP {Math.min(step + 1, questions.length + 1)} OF {questions.length + 1}</span>
                <span className="tech-label text-[#FF5A00]">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-[#1B1B1B] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF5A00] to-[#FF8C42]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Questions */}
            <AnimatePresence mode="wait">
              {step < questions.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {(() => {
                      const Icon = questions[step].icon;
                      return <Icon className="w-6 h-6 text-[#FF5A00]" />;
                    })()}
                    <h3 className="font-heading text-xl font-bold">{questions[step].label}</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {questions[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(questions[step].id, option)}
                        className={`p-4 rounded border text-sm font-medium transition-all text-left ${
                          answers[questions[step].id] === option
                            ? 'border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]'
                            : 'border-[#333] hover:border-[#FF5A00]/40 text-[#BFC3C7]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-[#FF5A00]" />
                    <h3 className="font-heading text-xl font-bold">YOUR CONTACT INFO</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="tech-label block mb-2">NAME</label>
                      <input
                        type="text"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded text-[#F4F4F4] focus:border-[#FF5A00] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="tech-label block mb-2">PHONE</label>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded text-[#F4F4F4] focus:border-[#FF5A00] focus:outline-none transition-colors"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div>
                      <label className="tech-label block mb-2">EMAIL</label>
                      <input
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded text-[#F4F4F4] focus:border-[#FF5A00] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 p-4 bg-[#111111] rounded border border-[#1B1B1B]">
                    <h4 className="tech-label text-[#FF5A00] mb-2">YOUR SUMMARY</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(answers).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-[#555]">{questions.find(q => q.id === key)?.label}:</span>
                          <span className="text-[#F4F4F4] ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full mt-6 py-4 bg-[#FF5A00] text-white font-heading font-bold text-sm tracking-wider rounded hover:bg-[#e65000] transition-all glow-accent"
                  >
                    REQUEST YOUR QUOTE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {step > 0 && step <= questions.length && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-4 text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors"
              >
                ← Back
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel rounded-lg p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold">QUOTE REQUEST RECEIVED.</h3>
            <p className="text-[#BFC3C7] mt-4 max-w-md mx-auto">
              Thank you! A member of our team will review your information and get back to you with a detailed quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 px-6 py-3 border border-[#333] rounded hover:border-[#FF5A00] transition-all">
                <Phone className="w-4 h-4" /> CALL NOW
              </a>
              <a href="sms:+1234567890" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FF5A00] rounded font-heading font-bold text-sm">
                <Mail className="w-4 h-4" /> WE'LL BE IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
