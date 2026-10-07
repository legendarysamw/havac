import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Calendar, ChevronDown, Wind, Thermometer, Filter, Zap, Home, Settings, Shield, Clock, ArrowRight, X, Menu, MapPin, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import InteractiveHouse from './components/InteractiveHouse';
import AirflowVisualization from './components/AirflowVisualization';
import ServicesSection from './components/ServicesSection';
import ProblemVisualizer from './components/ProblemVisualizer';
import DiagnosticInterface from './components/DiagnosticInterface';
import SeasonalControl from './components/SeasonalControl';
import MaintenanceTimeline from './components/MaintenanceTimeline';
import TechnicianProfiles from './components/TechnicianProfiles';
import CaseStudies from './components/CaseStudies';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F4F4] font-body relative">
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      {/* Blueprint grid background */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-sm flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg tracking-tight">CLIMATECORE</span>
                <span className="tech-label block -mt-1">HVAC SYSTEMS</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">Services</a>
              <a href="#system" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">System</a>
              <a href="#diagnostics" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">Diagnostics</a>
              <a href="#team" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">Team</a>
              <a href="#quote" className="text-sm text-[#BFC3C7] hover:text-[#FF5A00] transition-colors">Get Quote</a>
              <a href="tel:+1234567890" className="flex items-center gap-2 px-5 py-2.5 bg-[#FF5A00] text-white font-semibold text-sm rounded hover:bg-[#e65000] transition-all">
                <Phone className="w-4 h-4" />
                BOOK SERVICE
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#111111] border-t border-[#1B1B1B]"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="block text-[#BFC3C7] hover:text-[#FF5A00]" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#system" className="block text-[#BFC3C7] hover:text-[#FF5A00]" onClick={() => setMobileMenuOpen(false)}>System</a>
                <a href="#diagnostics" className="block text-[#BFC3C7] hover:text-[#FF5A00]" onClick={() => setMobileMenuOpen(false)}>Diagnostics</a>
                <a href="#team" className="block text-[#BFC3C7] hover:text-[#FF5A00]" onClick={() => setMobileMenuOpen(false)}>Team</a>
                <a href="#quote" className="block text-[#BFC3C7] hover:text-[#FF5A00]" onClick={() => setMobileMenuOpen(false)}>Get Quote</a>
                <a href="tel:+1234567890" className="flex items-center justify-center gap-2 px-5 py-3 bg-[#FF5A00] text-white font-semibold rounded">
                  <Phone className="w-4 h-4" />
                  BOOK SERVICE
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        {/* Trust Indicators */}
        <section className="py-12 px-4 border-b border-[#1B1B1B]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '24/7', label: 'EMERGENCY SERVICE' },
                { value: '100%', label: 'SATISFACTION FOCUSED' },
                { value: 'OAKVILLE', label: 'LOCALLY OPERATED' },
                { value: 'PRO', label: 'LICENSED TECHNICIANS' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-4"
                >
                  <div className="font-heading text-2xl md:text-3xl font-bold text-[#FF5A00]">{stat.value}</div>
                  <div className="tech-label mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />
        <InteractiveHouse />
        <div className="section-divider" />
        <AirflowVisualization />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <ProblemVisualizer />
        <div className="section-divider" />
        <DiagnosticInterface />
        <div className="section-divider" />
        
        {/* HVAC System Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="tech-label text-[#FF5A00]">ENGINEERED COMFORT</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">HVAC IS A SYSTEM.</h2>
              <p className="text-[#BFC3C7] mt-4 max-w-2xl mx-auto">
                Your home comfort depends on the integration of multiple components working together. 
                Changing one piece isn't always the entire solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {[
                { icon: Thermometer, label: 'Thermostat', desc: 'Temperature control' },
                { icon: Settings, label: 'Equipment', desc: 'Heating & cooling' },
                { icon: Wind, label: 'Airflow', desc: 'Air distribution' },
                { icon: Home, label: 'Ductwork', desc: 'Delivery network' },
                { icon: Filter, label: 'Filters', desc: 'Air purification' },
                { icon: Zap, label: 'Controls', desc: 'Smart integration' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 text-center group hover:border-[#FF5A00]/30 transition-all"
                >
                  <item.icon className="w-8 h-8 mx-auto text-[#FF5A00] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading font-semibold text-sm">{item.label}</h4>
                  <p className="tech-label mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 glass-panel rounded-full">
                <span className="text-[#BFC3C7] text-sm">All components</span>
                <span className="text-[#FF5A00] font-heading font-bold">=</span>
                <span className="text-[#F4F4F4] font-heading font-semibold">HOME COMFORT</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Home Comfort Profiles */}
        <section className="py-24 px-4 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="tech-label text-[#FF5A00]">SOLUTIONS FOR EVERY HOME</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">EVERY HOME HAS A<br/>DIFFERENT CLIMATE.</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'NEW HOMEOWNER', desc: "Get your system inspected and understand what you're actually operating.", icon: '🏠' },
                { title: 'FAMILY HOME', desc: 'Reliable comfort across bedrooms, living spaces and high-use areas.', icon: '👨‍👩‍👧‍👦' },
                { title: 'OLDER HOME', desc: 'Diagnose airflow, efficiency and aging equipment.', icon: '🏚️' },
                { title: 'RENOVATION', desc: 'Plan HVAC around the new layout before walls are closed.', icon: '🔨' },
                { title: 'LANDLORD / PROPERTY MANAGER', desc: 'Keep multiple properties maintained and comfortable.', icon: '🏢' },
                { title: 'ENERGY-CONSCIOUS', desc: 'Optimize efficiency and reduce energy consumption.', icon: '⚡' },
              ].map((profile, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 group hover:border-[#FF5A00]/30 transition-all cursor-pointer"
                >
                  <span className="text-3xl mb-4 block">{profile.icon}</span>
                  <h3 className="font-heading font-bold text-lg mb-2">{profile.title}</h3>
                  <p className="text-[#BFC3C7] text-sm leading-relaxed">{profile.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#FF5A00] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SeasonalControl />
        <MaintenanceTimeline />
        <CaseStudies />
        <TechnicianProfiles />
        <QuoteForm />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`sticky-cta lg:hidden ${showStickyCta ? 'visible' : ''}`}>
        <div className="flex gap-2">
          <a href="tel:+1234567890" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1B1B1B] border border-[#333] rounded text-sm font-semibold">
            <Phone className="w-4 h-4" /> CALL
          </a>
          <a href="sms:+1234567890" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1B1B1B] border border-[#333] rounded text-sm font-semibold">
            <MessageSquare className="w-4 h-4" /> TEXT
          </a>
          <a href="#quote" className="flex-[2] flex items-center justify-center gap-2 py-3 bg-[#FF5A00] rounded text-sm font-bold">
            <Calendar className="w-4 h-4" /> BOOK SERVICE
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
