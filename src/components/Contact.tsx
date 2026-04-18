import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const handlePlanSelected = (e: any) => {
      if (e.detail?.plan) {
        setSelectedService(e.detail.plan);
      }
    };
    
    // Also check URL parameters just in case they arrived from another page
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');
    if (plan) {
      setSelectedService(plan);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('plan-selected', handlePlanSelected);
      return () => window.removeEventListener('plan-selected', handlePlanSelected);
    }
  }, []);

  return (
    <section id="contacto" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Diseñemos el futuro<br />de tu marca.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Estamos listos para transformar tu negocio al siguiente nivel operativo consultanos para ir a lo seguro.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="https://wa.me/50495866667" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-brand-card hover:bg-brand-card-hover p-4 rounded-xl border border-white/5 transition-colors w-fit group">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Escríbenos por WhatsApp</p>
                  <p className="text-lg font-bold text-white">+504 9586 6667</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-card p-8 md:p-10 rounded-2xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs text-brand-green uppercase font-semibold tracking-wider">Nombre o empresa</label>
                  <input type="text" id="nombre" className="w-full bg-brand-bg border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="Tu nombre y/o marca" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-xs text-brand-green uppercase font-semibold tracking-wider">Servicio de interés</label>
                  <select 
                    id="servicio" 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-brand-bg border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all appearance-none"
                  >
                    <option value="" disabled>Escoge una opción</option>
                    <option value="Plan 1 Mensual">Plan 1 Mensual</option>
                    <option value="Plan 2 Mensual">Plan 2 Mensual</option>
                    <option value="Plan 3 Mensual">Plan 3 Mensual</option>
                    <option value="Diseño Web">Diseño Web</option>
                    <option value="Branding y Diseño">Branding y Diseño</option>
                    <option value="Estrategia y Ads">Estrategia y Ads</option>
                    <option value="Gestión de Redes">Gestión de Redes</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="correo" className="text-xs text-brand-green uppercase font-semibold tracking-wider">Correo</label>
                <input type="email" id="correo" className="w-full bg-brand-bg border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="tucorreo@dominio.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="proyecto" className="text-xs text-brand-green uppercase font-semibold tracking-wider">Proyecto</label>
                <textarea id="proyecto" rows={4} className="w-full bg-brand-bg border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none" placeholder="¿Cómo te podemos ayudar?"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-green text-brand-bg hover:bg-brand-green-hover py-4 rounded-md font-bold transition-all duration-300 hover:box-glow flex justify-center items-center gap-2">
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
