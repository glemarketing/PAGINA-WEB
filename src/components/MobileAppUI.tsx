import { motion } from 'framer-motion';
import { Home, Search, BarChart2, User, Send, Download, Plus, ArrowRight, MapPin, Package, MessageSquare } from 'lucide-react';

export default function MobileAppUI() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="bg-[#030712] w-full relative font-sans text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full rounded-b-[30px] sm:rounded-b-[40px] overflow-hidden shadow-2xl pt-12 sm:pt-16 pb-12 px-5 sm:px-6">
        <img 
          src={`${baseUrl}catalogo.webp`} 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        
        <div className="relative z-10 mt-4 sm:mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight mb-2 sm:mb-3"
          >
            Tu producto, en el <br />
            <span className="text-brand-green italic">centro</span> de todo.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-[13px] sm:text-[14px] mb-5 sm:mb-6 leading-relaxed max-w-[95%]"
          >
            Manejo de redes sociales enfocado en diseño, fotografía y exposición de catálogos.
          </motion.p>
          <motion.a 
            href="#contacto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex bg-brand-green text-brand-bg px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm items-center gap-2 shadow-[0_0_20px_rgba(91,248,96,0.3)] hover:scale-105 active:scale-95 transition-all text-center"
          >
            Inicia tu Proyecto <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* 2 & 3. DASHBOARD ESTILO FINANCIERO */}
      <section className="px-6 -mt-4 relative z-10">
        <div className="bg-brand-card/80 backdrop-blur-3xl rounded-[30px] p-6 border border-white/5 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/60 text-[13px] font-medium mb-1">Agencia Digital</p>
              <h2 className="text-3xl font-black text-white">GLE Marketing</h2>
              <p className="text-brand-green text-xs font-bold mt-1">Líderes en crecimiento</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-brand-green/20 to-brand-green/5 rounded-full border border-brand-green/30 flex items-center justify-center shadow-inner overflow-hidden">
              <span className="text-brand-green font-bold">GL</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-2 mb-2">
            {[
              { icon: Home, label: 'Inicio', link: '#inicio' },
              { icon: User, label: 'Nosotros', link: '#nosotros' },
              { icon: BarChart2, label: 'Servicios', link: '#servicios' },
              { icon: Plus, label: 'Precios', link: '#precios' },
            ].map((action, i) => (
              <a href={action.link} key={i} className="flex flex-col items-center gap-2 group cursor-pointer decoration-transparent">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 active:scale-95 transition-all">
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-brand-green transition-colors" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-white/60">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="mt-6 bg-gradient-to-r from-brand-green to-teal-400 rounded-[24px] p-6 flex justify-between items-center relative overflow-hidden shadow-[0_10px_30px_rgba(91,248,96,0.2)]">
          <div className="absolute right-[-20%] top-[-50%] w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none" />
          <div className="z-10 relative">
            <h3 className="text-[#030712] font-black tracking-tight text-lg mb-1 leading-tight">DISEÑO Y<br/>EXPOSICIÓN</h3>
            <p className="text-[#030712]/80 text-xs font-bold">Arma tu cotización hoy.</p>
          </div>
          <a href={baseUrl + "cotizador"} className="z-10 inline-block bg-[#030712] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shrink-0 hover:bg-[#111] active:scale-95 transition-transform decoration-transparent">
            Cotizar
          </a>
        </div>
      </section>

        {/* Section deleted correctly */}

      {/* 5. BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 w-full bg-[#030712]/90 backdrop-blur-2xl border-t border-white/5 pb-safe pt-3 pb-5 px-6 z-50">
        <div className="flex justify-around items-center w-full px-4">
          {[
            { icon: Home, link: '#inicio', active: true },
            { icon: Package, link: '#precios', active: false },
            { icon: MessageSquare, link: '#contacto', active: false },
          ].map((item, i) => (
            <a href={item.link} key={i} className="flex flex-col items-center justify-center p-2 cursor-pointer group decoration-transparent">
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${item.active ? 'bg-brand-green/10 text-brand-green' : 'text-white/40 group-hover:text-white/80'}`}>
                <item.icon className={`w-5 h-5 ${item.active ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                {item.active && (
                  <span className="absolute -bottom-2 w-1 h-1 bg-brand-green rounded-full" />
                )}
              </div>
            </a>
          ))}
        </div>
      </nav>
      
    </div>
  );
}
