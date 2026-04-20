import { motion } from 'framer-motion';
import { Home, Search, BarChart2, User, Send, Download, Plus, ArrowRight, MapPin } from 'lucide-react';

export default function MobileAppUI() {
  const baseUrl = typeof window !== 'undefined' ? import.meta.env.BASE_URL : '/';

  return (
    <div className="bg-[#030712] min-h-screen w-full relative pb-24 font-sans text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[55vh] w-full rounded-b-[40px] overflow-hidden shadow-2xl">
        <img 
          src={`${baseUrl}catalogo.webp`} 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />
        
        <div className="absolute bottom-10 left-6 right-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight mb-3"
          >
            Explore.<br />Travel.<br />
            <span className="text-brand-green">Inspire.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-[15px] mb-6"
          >
            Encuentra experiencias únicas
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-green text-brand-bg px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(91,248,96,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            Comenzar <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* 2 & 3. DASHBOARD ESTILO FINANCIERO */}
      <section className="px-6 -mt-4 relative z-10">
        <div className="bg-brand-card/80 backdrop-blur-3xl rounded-[30px] p-6 border border-white/5 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/60 text-[13px] font-medium mb-1">Crecimiento Actual</p>
              <h2 className="text-3xl font-black text-white">$6,304,678</h2>
              <p className="text-brand-green text-xs font-bold mt-1">+14.5% este mes</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-brand-green/20 to-brand-green/5 rounded-full border border-brand-green/30 flex items-center justify-center shadow-inner overflow-hidden">
              <span className="text-brand-green font-bold">GB</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 mb-2">
            {[
              { icon: Send, label: 'Enviar' },
              { icon: Download, label: 'Recibir' },
              { icon: BarChart2, label: 'Stats' },
              { icon: Plus, label: 'Más' },
            ].map((action, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-active:scale-95 transition-all">
                  <action.icon className="w-6 h-6 text-white group-hover:text-brand-green transition-colors" />
                </div>
                <span className="text-[11px] font-medium text-white/50">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="mt-6 bg-gradient-to-r from-brand-green to-teal-400 rounded-[24px] p-6 flex justify-between items-center relative overflow-hidden shadow-[0_10px_30px_rgba(91,248,96,0.2)]">
          <div className="absolute right-[-20%] top-[-50%] w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none" />
          <div className="z-10 relative">
            <h3 className="text-[#030712] font-black text-lg mb-1 leading-tight">THE FUTURE<br/>ASSETS</h3>
            <p className="text-[#030712]/80 text-xs font-bold">Descubre los planes premium</p>
          </div>
          <button className="z-10 bg-[#030712] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shrink-0 hover:bg-[#111] active:scale-95 transition-transform">
            Ver más
          </button>
        </div>
      </section>

      {/* 4. SECCIÓN DE CONTENIDO (CARDS HORIZONTALES) */}
      <section className="mt-8 pl-6">
        <h3 className="text-xl font-bold mb-4 tracking-tight flex justify-between items-center pr-6">
          Explorar
          <span className="text-brand-green text-sm font-semibold">Ver todo</span>
        </h3>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { img: 'portfolio/media__1775246265863.webp', title: 'Vestrahorn', subtitle: 'Islandia' },
            { img: 'portfolio/media__1775247707032.webp', title: 'Montañas', subtitle: 'Europa' },
            { img: 'portfolio/media__1775246211937.webp', title: 'Paraíso', subtitle: 'Caribe' },
          ].map((card, i) => (
            <div key={i} className="snap-center shrink-0 w-[240px] bg-brand-card rounded-[24px] overflow-hidden border border-white/5 shadow-xl">
              <div className="h-[140px] w-full relative overflow-hidden">
                <img 
                  src={`${baseUrl}${card.img}`} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 border border-white/10">
                  ★ 4.9
                </div>
              </div>
              <div className="p-5 relative">
                <h4 className="font-bold text-lg leading-tight mb-1">{card.title}</h4>
                <p className="text-brand-green flex items-center gap-1 text-[13px] font-medium mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {card.subtitle}
                </p>
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/5 py-2.5 rounded-xl text-[13px] font-bold active:scale-95 transition-transform">
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 w-full bg-[#030712]/90 backdrop-blur-2xl border-t border-white/5 pb-safe pt-3 pb-5 px-6 z-50">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          {[
            { icon: Home, active: true },
            { icon: Search, active: false },
            { icon: BarChart2, active: false },
            { icon: User, active: false },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-2 cursor-pointer group">
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${item.active ? 'bg-brand-green/10 text-brand-green' : 'text-white/40 group-hover:text-white/80'}`}>
                <item.icon className={`w-5 h-5 ${item.active ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                {item.active && (
                  <span className="absolute -bottom-2 w-1 h-1 bg-brand-green rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </nav>
      
    </div>
  );
}
