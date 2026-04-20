import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, 
  PenTool, 
  LayoutTemplate, 
  Megaphone, 
  Target, 
  Camera, 
  LineChart, 
  Search 
} from 'lucide-react';

const defaultServices = [
  { id: '1', name: 'Gestión de Redes', category: 'Social Media', basePrice: 4000, icon: Share2 },
  { id: '2', name: 'Branding e Identidad', category: 'Diseño', basePrice: 5500, icon: PenTool },
  { id: '3', name: 'Desarrollo Web', category: 'Desarrollo', basePrice: 8000, icon: LayoutTemplate },
  { id: '4', name: 'Google Ads', category: 'Publicidad', basePrice: 3500, icon: Megaphone },
  { id: '5', name: 'Meta Ads', category: 'Publicidad', basePrice: 3500, icon: Target },
  { id: '6', name: 'Creación Contenido', category: 'Multimedia', basePrice: 4500, icon: Camera },
  { id: '7', name: 'Consultoría', category: 'Estrategia', basePrice: 2000, icon: LineChart },
  { id: '8', name: 'SEO Básico', category: 'Marketing', basePrice: 3000, icon: Search },
];

export default function CartBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleService = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedServicesList = defaultServices.filter(s => selectedIds.includes(s.id));
  const totalPrice = selectedServicesList.reduce((acc, curr) => acc + curr.basePrice, 0);

  const handleCheckout = () => {
    const number = "5049586667"; 
    let message = "Hola GLE Marketing, me gustaría armar un paquete con los siguientes servicios:\n\n";
    selectedServicesList.forEach(s => {
      message += `- ${s.name} (L. ${s.basePrice})\n`;
    });
    message += `\n*Total Estimado: L. ${totalPrice}*\n\n¿Podemos hablar de los detalles?`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  // Evitar problemas de hidratación renderizando condicionalmente ciertas partes dinámicas si se necesita, 
  // pero el layout principal siempre estará presente.
  
  return (
    <div className="w-full min-h-screen bg-brand-bg relative pb-32 lg:pb-20 pt-8 lg:pt-16 px-4 sm:px-6 lg:px-8">
      {/* Glow en el fondo general */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none opacity-50 z-0 hidden lg:block"></div>

      <div className="max-w-[1500px] mx-auto w-full flex flex-col-reverse lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] gap-8 lg:gap-12 relative z-10 pt-4">
        
        {/* ==================================================== */}
        {/* SIDEBAR (Panel de Resumen - Izquierda en Desktop)     */}
        {/* ==================================================== */}
        <div className="w-full">
          {/* El contenedor principal de la sidebar que se vuelve pegajoso */}
          <div className="lg:sticky lg:top-28 w-full bg-[#030712]/80 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-6 lg:p-8 flex flex-col shadow-2xl h-auto max-h-none lg:max-h-[80vh] z-20">
            
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-white border-b border-white/5 pb-4">
              <div className="bg-brand-green/20 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              Tu Resumen
            </h2>

            {/* Lista de Servicios */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-[150px] mb-6">
              {mounted && selectedServicesList.length === 0 ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 border border-white/5 rounded-2xl bg-white/5 border-dashed">
                  <p className="text-gray-400 font-medium">Aún no has seleccionado servicios.</p>
                  <p className="text-xs text-gray-600 mt-2">Agrega los que necesites dándoles click.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence>
                    {mounted && selectedServicesList.map(s => (
                      <motion.div 
                        key={s.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5"
                      >
                        <div className="flex flex-col">
                          <span className="text-gray-200 text-sm font-bold">{s.name}</span>
                          <span className="text-xs text-brand-green/70 font-medium">{s.category}</span>
                        </div>
                        <span className="font-bold text-white text-sm bg-black/40 px-3 py-1 rounded-lg">L.{s.basePrice}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Checkout Area */}
            <div className="mt-auto border-t border-white/10 pt-6">
              <div className="flex justify-between items-end mb-6">
                <span className="text-gray-400 font-medium">Total Estimado</span>
                <span className="text-3xl font-extrabold text-brand-green drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                  L.{mounted ? totalPrice.toLocaleString() : '0'}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={!mounted || selectedIds.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2
                  ${(!mounted || selectedIds.length === 0)
                    ? 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed' 
                    : 'bg-brand-green text-brand-bg hover:bg-brand-green-hover hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(34,197,94,0.3)]'
                  }
                `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                </svg>
                Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* MAIN AREA (Tarjetas - Derecha en Desktop)          */}
        {/* ==================================================== */}
        <div className="w-full relative">
          
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
              Catálogo de <span className="text-brand-green">Servicios</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto lg:mx-0">
              Personaliza tu paquete. Al seleccionar las tarjetas se irán añadiendo a tu resumen automáticamente.
            </p>
          </div>

          {/* Grilla estilo POS */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            <AnimatePresence>
              {defaultServices.map((service, index) => {
                const isSelected = mounted && selectedIds.includes(service.id);
                const IconComponent = service.icon;
                
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`
                      relative p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer transition-all duration-300 flex flex-col items-center text-center
                      border-2 overflow-hidden group w-full aspect-[4/5] justify-between
                      ${isSelected 
                        ? 'border-brand-green bg-[#122A1E]/40 shadow-[0_10px_30px_rgba(34,197,94,0.15)] scale-[1.02]' 
                        : 'border-white/5 bg-[#0A0D14]/60 hover:border-white/20 hover:bg-[#11141D] hover:-translate-y-1 backdrop-blur-sm'
                      }
                    `}
                  >
                    {/* Indicador de check */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-brand-green text-brand-bg p-1.5 rounded-full shadow-lg z-10 transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}

                    <div className={`mt-3 lg:mt-4 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 
                      ${isSelected ? 'bg-brand-green text-brand-bg shadow-lg shadow-brand-green/40 rotate-3' : 'bg-white/5 text-gray-300 group-hover:text-brand-green group-hover:scale-110 group-hover:bg-brand-green/10'}`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col items-center w-full grow justify-center">
                      <h3 className={`text-sm lg:text-base font-extrabold mb-1 leading-tight px-1 ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                        {service.name}
                      </h3>
                      <span className="text-gray-500 text-[10px] lg:text-xs uppercase tracking-widest font-bold">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-full mt-4">
                      <div className={`text-sm lg:text-lg font-black py-2 rounded-xl transition-all ${isSelected ? 'text-brand-green bg-brand-green/10' : 'text-gray-400 bg-black/40 group-hover:text-white'}`}>
                        L. {service.basePrice.toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* MOBILE STICKY BOTTOM CHECKOUT BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#030712]/95 backdrop-blur-2xl border-t border-white/10 p-5 lg:hidden z-50 flex items-center justify-between pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">Total Estimado</span>
          <span className="text-2xl font-black text-white flex items-center gap-1">
            <span className="text-brand-green">L.</span>{mounted ? totalPrice.toLocaleString() : '0'}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={!mounted || selectedIds.length === 0}
          className={`px-6 py-3.5 rounded-xl font-bold text-[13px] transition-all flex items-center gap-2
            ${(!mounted || selectedIds.length === 0)
              ? 'bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed' 
              : 'bg-brand-green text-[#030712] hover:bg-white border border-brand-green active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
            }
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
          </svg>
          WhatsApp
        </button>
      </div>

    </div>
  );
}
