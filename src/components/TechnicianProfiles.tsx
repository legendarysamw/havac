import { motion } from 'framer-motion';
import { Wrench, Award, Clock } from 'lucide-react';

const technicians = [
  {
    name: 'Marcus Chen',
    role: 'Lead HVAC Technician',
    experience: '12+ years',
    specialties: ['Furnace diagnostics', 'Heat pump systems', 'Commercial HVAC'],
    background: 'Specializes in high-efficiency system installation and complex diagnostics.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Service Technician',
    experience: '8+ years',
    specialties: ['AC systems', 'Indoor air quality', 'Smart thermostats'],
    background: 'Expert in residential comfort systems and air quality solutions.',
  },
  {
    name: 'David Okafor',
    role: 'Installation Specialist',
    experience: '10+ years',
    specialties: ['New construction', 'System design', 'Ductwork engineering'],
    background: 'Leads complex installations and renovation projects across Halton Region.',
  },
  {
    name: 'James Park',
    role: 'Maintenance Technician',
    experience: '6+ years',
    specialties: ['Preventative maintenance', 'System optimization', 'Energy efficiency'],
    background: 'Focused on keeping systems running at peak performance year-round.',
  },
];

export default function TechnicianProfiles() {
  return (
    <section id="team" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tech-label text-[#FF5A00]">OUR TEAM</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-4">THE PEOPLE BEHIND<br/>THE COMFORT.</h2>
          <p className="text-[#BFC3C7] mt-4 max-w-xl mx-auto">
            Professional technicians who understand your home, your equipment, and your comfort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicians.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flip-card h-80"
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 glass-panel rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B1B1B] to-[#333] flex items-center justify-center mb-4 border border-[#BFC3C7]/10">
                    <span className="font-heading text-2xl font-bold text-[#FF5A00]">
                      {tech.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg">{tech.name}</h3>
                  <p className="tech-label text-[#FF5A00] mt-1">{tech.role}</p>
                  <div className="flex items-center gap-2 mt-3 text-[#BFC3C7] text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{tech.experience}</span>
                  </div>
                  <p className="tech-label mt-4 text-[#555]">HOVER FOR DETAILS</p>
                </div>

                {/* Back */}
                <div className="flip-card-back absolute inset-0 glass-panel rounded-lg p-6 flex flex-col justify-center border-[#FF5A00]/20">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#FF5A00]" />
                      <span className="tech-label text-[#FF5A00]">EXPERIENCE</span>
                    </div>
                    <p className="text-sm text-[#F4F4F4]">{tech.experience} in HVAC</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-4 h-4 text-[#FF5A00]" />
                      <span className="tech-label text-[#FF5A00]">SPECIALTIES</span>
                    </div>
                    <ul className="space-y-1">
                      {tech.specialties.map((s, j) => (
                        <li key={j} className="text-xs text-[#BFC3C7] flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#FF5A00] rounded-full" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[#BFC3C7] leading-relaxed">{tech.background}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
