import { motion } from 'framer-motion';
import { Smartphone, PenTool, MessageSquare, Monitor, LayoutDashboard } from 'lucide-react';

const services = [
  {
    title: 'Gestión Redes',
    desc: 'Estrategias de visibilidad masiva enfocada en tu identidad.',
    icon: <Smartphone className="w-6 h-6 text-black" />,
    className: "col-span-1 md:col-span-2 row-span-2 bg-[#0a0a0a] hover:bg-[#111]",
    image: "/gestion_redes.png", // Render 3D personalizado
  },
  {
    title: 'Branding',
    desc: 'Diseñamos visuales directos que reflejan calidad y autoridad.',
    icon: <PenTool className="w-6 h-6 text-black" />,
    className: "col-span-1 md:col-span-2 bg-[#0a0a0a] hover:bg-[#111]",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", // Branding/Colors
  },
  {
    title: 'Diseño Web',
    desc: '',
    icon: <Monitor className="w-6 h-6 text-black" />,
    className: "col-span-1 bg-[#0a0a0a] hover:bg-[#111] flex-col justify-center items-center text-center",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", // Code
  },
  {
    title: 'Asesoría',
    desc: '',
    icon: <MessageSquare className="w-6 h-6 text-black" />,
    className: "col-span-1 bg-[#0a0a0a] hover:bg-[#111] flex-col justify-center items-center text-center",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", // Strategy
  },
  {
    title: 'Google & Meta Ads',
    desc: 'Implementamos campañas que escalan tu negocio a nivel masivo.',
    icon: <LayoutDashboard className="w-6 h-6 text-brand-bg block ml-auto" />,
    className: "col-span-1 md:col-span-4 bg-white text-black flex items-end justify-between relative overflow-hidden group",
    image: "", // Custom CSS visual later
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Glow ambientales blancos y verdes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            Desarrollo Exponencial
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Espectro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-brand-green">Servicios</span>
          </h2>
        </motion.div>

        {/* Modern White-Aesthetic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 relative border border-white/10 transition-all duration-500 overflow-hidden group hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)] ${service.className}`}
            >
              {/* Image Background Layer with White/Dark Overlays */}
              {service.image && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt="" 
                      className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-700 ease-in-out group-hover:scale-105 transform"
                    />
                  </div>
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  <div className="absolute inset-0 z-0 bg-gradient-to-bl from-white/5 to-transparent"></div>
                </>
              )}

              {/* Specific White Accent details line */}
              <div className="absolute top-0 left-6 w-12 h-1 bg-white/20 group-hover:bg-white/60 transition-colors duration-300 rounded-b-full z-20"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                {service.title === 'Google & Meta Ads' ? (
                  <>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-green/20 blur-[50px] rounded-full group-hover:bg-brand-green/40 transition-colors duration-500"></div>
                    <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between h-full">
                      <div className="max-w-md">
                        <div className="mb-4 bg-black/10 backdrop-blur-md p-4 rounded-xl w-fit group-hover:scale-110 transition-transform border border-black/10">
                          <LayoutDashboard className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-4xl font-extrabold text-black mb-2 tracking-tight">{service.title}</h3>
                        <p className="text-black/70 font-medium text-lg leading-snug">{service.desc}</p>
                      </div>
                      <div className="hidden md:flex mt-4 md:mt-0 items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-brand-green hover:text-black transition-colors cursor-pointer border border-black/20">
                        Descubrir <span className="ml-2">→</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4 bg-white p-4 rounded-2xl w-fit shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
                      {service.desc && <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
