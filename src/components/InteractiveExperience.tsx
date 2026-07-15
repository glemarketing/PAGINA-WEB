import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Globe, 
  FileText, 
  Layers, 
  Activity, 
  ShoppingCart, 
  TrendingUp, 
  Heart, 
  MessageSquare, 
  Send
} from 'lucide-react';

// Custom icons for platforms
const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

type Platform = 'instagram' | 'facebook' | 'tiktok' | 'whatsapp' | 'youtube';
type ServiceType = 'web' | 'landing' | 'catalogo' | 'branding' | 'seo' | 'tienda';

export default function InteractiveExperience() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('instagram');
  const [selectedService, setSelectedService] = useState<ServiceType>('web');
  const [whatsappStep, setWhatsappStep] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax subtle effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 50;
      const y = (clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WhatsApp simulation text sequence
  useEffect(() => {
    if (selectedPlatform === 'whatsapp') {
      setWhatsappStep(0);
      const t1 = setTimeout(() => setWhatsappStep(1), 1200);
      const t2 = setTimeout(() => setWhatsappStep(2), 2800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [selectedPlatform]);

  const platforms = [
    { id: 'instagram' as Platform, name: 'Instagram', icon: <InstagramIcon className="w-5 h-5" />, color: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { id: 'facebook' as Platform, name: 'Facebook', icon: <FacebookIcon className="w-5 h-5" />, color: 'from-[#1877f2] to-[#0057b7]' },
    { id: 'tiktok' as Platform, name: 'TikTok', icon: <TikTokIcon className="w-5 h-5" />, color: 'from-[#00f2fe] to-[#4facfe]' },
    { id: 'whatsapp' as Platform, name: 'WhatsApp', icon: <WhatsAppIcon className="w-5 h-5" />, color: 'from-[#25d366] to-[#128c7e]' },
    { id: 'youtube' as Platform, name: 'YouTube', icon: <YoutubeIcon className="w-5 h-5" />, color: 'from-[#ff0000] to-[#b30000]' },
  ];

  const servicesList = [
    { id: 'web' as ServiceType, name: 'Páginas Web', icon: <Globe className="w-5 h-5" /> },
    { id: 'landing' as ServiceType, name: 'Landing Pages', icon: <FileText className="w-5 h-5" /> },
    { id: 'catalogo' as ServiceType, name: 'Catálogos', icon: <Layers className="w-5 h-5" /> },
    { id: 'branding' as ServiceType, name: 'Branding', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'seo' as ServiceType, name: 'SEO', icon: <Activity className="w-5 h-5" /> },
    { id: 'tienda' as ServiceType, name: 'Tiendas Online', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <section id="experiencia-digital" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background ambient lighting - High-end green glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#0c1e10] blur-[150px] rounded-full pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-brand-green animate-pulse" />
            Configurador Interactivo Premium
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
          >
            ¿Qué quieres construir para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-brand-green">negocio?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Selecciona las herramientas digitales que deseas potenciar y crea una presencia profesional diseñada para crecer de forma exponencial.
          </motion.p>
        </div>

        {/* TWO-COLUMN DEVICE SHOWCASE */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12 items-stretch">
          
          {/* COLUMN 1: SMARTPHONE PREMIUM (SOCIAL ECOSYSTEM) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 sm:p-12 flex flex-col justify-between items-center relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
          >
            {/* Top accent light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent"></div>
            
            <div className="w-full text-center sm:text-left mb-8 relative z-10">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">Canalización de Tráfico</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Ecosistema Social de GLE</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-md">Estrategias y embudos de contenido personalizados por plataforma.</p>
            </div>

            {/* Smartphone Container with Floating Animation and mouse Parallax */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotateX: mousePosition.y * 0.4,
                rotateY: -mousePosition.x * 0.4
              }}
              transition={{
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                rotateX: { type: "spring", stiffness: 100, damping: 20 },
                rotateY: { type: "spring", stiffness: 100, damping: 20 }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="relative my-8 z-10"
            >
              {/* External Ambient Glow behind phone */}
              <div className="absolute inset-0 bg-brand-green/10 blur-[40px] rounded-[50px] scale-95 pointer-events-none group-hover:bg-brand-green/20 transition-all duration-700"></div>

              {/* PHONE MOCKUP (iPhone 17 Pro Dark Titanium Finish) */}
              <div className="w-[280px] h-[570px] sm:w-[310px] sm:h-[630px] rounded-[48px] border-[6px] border-[#1d1f21] bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden flex flex-col p-2.5">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-40 border border-white/5 flex items-center justify-between px-2 text-[9px] text-white/50">
                  <div className="w-1.5 h-1.5 bg-blue-900 rounded-full border border-blue-400/20 shadow-[0_0_8px_#3b82f6] animate-pulse"></div>
                  <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                </div>

                {/* Titanium highlight effect inside border */}
                <div className="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none z-30"></div>

                {/* Screen Content Wrapper */}
                <div className="w-full h-full bg-[#090a0f] rounded-[38px] overflow-hidden relative flex flex-col pt-7 select-none">
                  
                  {/* Status Bar */}
                  <div className="h-6 w-full absolute top-0 left-0 px-6 flex justify-between items-center text-[10px] text-white/60 font-semibold z-30 bg-transparent">
                    <span>12:45</span>
                    <div className="flex items-center gap-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-white/40 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-2.5 h-full bg-brand-green rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE SCREEN RENDERER */}
                  <div className="flex-1 overflow-hidden relative flex flex-col text-white">
                    <AnimatePresence mode="wait">
                      {selectedPlatform === 'instagram' && (
                        <motion.div 
                          key="instagram"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-3"
                        >
                          {/* Instagram Header */}
                          <div className="px-4 pb-2 border-b border-white/5 flex justify-between items-center bg-[#090a0f]/80 backdrop-blur-md">
                            <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">glemarketing</span>
                            <div className="flex gap-3 text-white/80">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green font-bold uppercase tracking-wider">VIP</span>
                            </div>
                          </div>

                          {/* Profile Section */}
                          <div className="p-4 flex gap-4 items-center">
                            {/* Avatar with active glowing story ring */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-[0_0_12px_rgba(238,42,123,0.3)]">
                              <div className="w-full h-full rounded-full bg-black p-[2px]">
                                <div className="w-full h-full rounded-full bg-brand-green-dark flex items-center justify-center font-bold text-white text-base">GL</div>
                              </div>
                            </div>
                            <div className="flex-1 flex justify-around text-center">
                              <div>
                                <p className="text-xs font-black">148</p>
                                <p className="text-[8px] text-white/50">Posts</p>
                              </div>
                              <div>
                                <p className="text-xs font-black">48.6K</p>
                                <p className="text-[8px] text-white/50">Fans</p>
                              </div>
                              <div>
                                <p className="text-xs font-black text-brand-green">+385%</p>
                                <p className="text-[8px] text-brand-green font-semibold">Alcance</p>
                              </div>
                            </div>
                          </div>

                          {/* Bio */}
                          <div className="px-4 text-[10px] leading-relaxed">
                            <p className="font-bold">GLE Marketing | Agencia Premium</p>
                            <p className="text-white/60">Crecemos tu marca de forma exponencial.</p>
                            <a href="#contacto" className="text-blue-400">linkin.bio/gle_marketing</a>
                          </div>

                          {/* Live Engagement Metric Widget */}
                          <div className="mx-4 mt-3 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                                <TrendingUp className="w-3.5 h-3.5 text-brand-green" />
                              </div>
                              <div>
                                <p className="text-[8px] text-white/40">Tasa de Engagement</p>
                                <p className="text-[10px] font-bold text-brand-green">14.8% (Exponencial)</p>
                              </div>
                            </div>
                            <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded text-white/70">Top 1%</span>
                          </div>

                          {/* Feed Grid Preview */}
                          <div className="flex-1 bg-black/40 mt-3 p-1.5 grid grid-cols-3 gap-1 overflow-y-auto">
                            {[
                              { label: 'VISIÓN', color: 'from-[#051a08] to-[#12571b]' },
                              { label: 'BRANDING', color: 'from-black to-[#111]' },
                              { label: 'CREATIVIDAD', color: 'from-[#021327] to-[#04284d]' },
                              { label: 'ADS', color: 'from-[#12571b] to-brand-green-dark' },
                              { label: 'WEB', color: 'from-[#0b0c10] to-[#1c1f20]' },
                              { label: 'DISEÑO', color: 'from-gray-900 to-black' }
                            ].map((item, i) => (
                              <div key={i} className="aspect-square rounded-md overflow-hidden relative group/post border border-white/5 bg-gradient-to-br from-brand-card to-black">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40`}></div>
                                <div className="absolute inset-0 flex flex-col justify-between p-1.5 z-10">
                                  <div className="flex justify-between items-center w-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                                    <Sparkles className="w-2.5 h-2.5 text-white/30" />
                                  </div>
                                  <span className="text-[7px] font-bold text-white/80 tracking-wider text-center">{item.label}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {selectedPlatform === 'facebook' && (
                        <motion.div 
                          key="facebook"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-3"
                        >
                          {/* Facebook Header */}
                          <div className="px-4 pb-2 border-b border-white/5 flex items-center justify-between bg-[#1877f2]/10">
                            <span className="font-extrabold text-sm text-[#1877f2]">facebook</span>
                            <span className="text-[8px] bg-blue-500/20 text-[#1877f2] font-extrabold px-2 py-0.5 rounded-full">BUSINESS</span>
                          </div>

                          {/* Page Stats Widget */}
                          <div className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center font-bold border border-white/10 text-brand-green">GL</div>
                              <div>
                                <h4 className="text-xs font-bold">GLE Marketing Solutions</h4>
                                <p className="text-[8px] text-white/50">Página de Agencia Digital • Verificada</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mt-4">
                              <div className="bg-white/5 border border-white/5 p-2 rounded-xl text-center">
                                <p className="text-[8px] text-white/40">Me Gusta</p>
                                <p className="text-xs font-black">15.4K</p>
                              </div>
                              <div className="bg-white/5 border border-white/5 p-2 rounded-xl text-center">
                                <p className="text-[8px] text-white/40">Recomendaciones</p>
                                <p className="text-xs font-black text-brand-green">98%</p>
                              </div>
                              <div className="bg-white/5 border border-white/5 p-2 rounded-xl text-center">
                                <p className="text-[8px] text-white/40">ROAS Promedio</p>
                                <p className="text-xs font-black text-brand-green">4.8x</p>
                              </div>
                            </div>
                          </div>

                          {/* Facebook Simulated Sponsored Feed */}
                          <div className="flex-1 bg-black/20 p-4 border-t border-white/5 overflow-y-auto">
                            <div className="bg-brand-card border border-white/10 rounded-xl p-3">
                              <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-4 h-4 bg-brand-green rounded-full flex items-center justify-center text-[7px] font-bold text-black">GL</div>
                                  <div>
                                    <p className="text-[8px] font-bold">GLE Marketing</p>
                                    <p className="text-[6px] text-white/40">Patrocinado • 🌐</p>
                                  </div>
                                </div>
                                <span className="text-[8px] text-brand-green font-bold">En campaña</span>
                              </div>
                              <p className="text-[9px] leading-relaxed mb-3 text-white/90">
                                ¿Listo para ver tus ventas despegar? Diseñamos campañas de Google & Meta Ads optimizadas para ROI masivo.
                              </p>
                              <div className="w-full aspect-[16/9] bg-gradient-to-r from-brand-green-dark to-[#081f0d] rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center p-3">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                                <div className="text-center relative z-10">
                                  <p className="text-[10px] font-extrabold tracking-wider text-brand-green uppercase">META ADS PERFORMANCE</p>
                                  <div className="flex justify-center items-end gap-1.5 h-12 mt-2">
                                    {[20, 35, 25, 45, 60, 50, 85].map((h, idx) => (
                                      <div key={idx} style={{ height: `${h}%` }} className="w-2.5 bg-brand-green rounded-t-sm shadow-[0_0_8px_rgba(91,248,96,0.3)]"></div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-white/5">
                                <div className="text-[8px] text-white/50 flex gap-2">
                                  <span>👍 412</span>
                                  <span>💬 84 comentarios</span>
                                </div>
                                <span className="text-[8px] bg-brand-green text-black font-bold px-2.5 py-1 rounded-md">Enviar Mensaje</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedPlatform === 'tiktok' && (
                        <motion.div 
                          key="tiktok"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-3 relative"
                        >
                          {/* TikTok Background/Main video screen */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-[#051107] to-[#000] z-0"></div>
                          
                          {/* Content Overlay */}
                          <div className="relative z-10 flex-1 flex flex-col justify-between p-4 h-full">
                            {/* Top tabs */}
                            <div className="flex justify-center gap-4 text-xs font-bold text-white/80 mt-1">
                              <span className="text-white/40">Siguiendo</span>
                              <span className="border-b-2 border-white pb-1">Para ti</span>
                            </div>

                            {/* Center Radar / Wave Chart simulating video content */}
                            <div className="flex-1 flex flex-col items-center justify-center my-6 relative">
                              <div className="w-36 h-36 rounded-full border border-brand-green/20 flex items-center justify-center animate-ping absolute opacity-30"></div>
                              <div className="w-28 h-28 rounded-full border border-brand-green/40 flex items-center justify-center absolute bg-brand-green/5">
                                <div className="w-16 h-16 rounded-full border border-brand-green/60 flex items-center justify-center bg-brand-green/10 shadow-[0_0_15px_rgba(91,248,96,0.2)]">
                                  <TikTokIcon className="w-6 h-6 text-brand-green" />
                                </div>
                              </div>
                              
                              {/* Glowing stats overlay */}
                              <div className="absolute bottom-[-10px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[9px] text-brand-green font-bold shadow-lg">
                                Video Viral • 2.1M views
                              </div>
                            </div>

                            {/* Sidebar Interaction Buttons */}
                            <div className="absolute right-4 bottom-24 flex flex-col gap-4 items-center z-20">
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-red-500 transition-colors">
                                  <Heart className="w-4 h-4 fill-current text-brand-green" />
                                </div>
                                <span className="text-[8px] font-semibold">142K</span>
                              </div>
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                  <MessageSquare className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-[8px] font-semibold">2,840</span>
                              </div>
                              <div className="flex flex-col items-center gap-1 animate-spin-slow">
                                <div className="w-9 h-9 rounded-full bg-brand-green/30 border border-brand-green/50 flex items-center justify-center">
                                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center font-bold text-[7px] text-brand-green">GL</div>
                                </div>
                              </div>
                            </div>

                            {/* Footer video description */}
                            <div className="text-[9px] text-white/90 max-w-[80%] mt-auto bg-black/40 p-2.5 rounded-xl backdrop-blur-sm border border-white/5">
                              <p className="font-extrabold text-xs mb-1">@glemarketing</p>
                              <p className="leading-snug">El secreto detrás del crecimiento exponencial de marcas digitales 🚀 #viral #aesthetic #marketing</p>
                              <div className="flex items-center gap-2 mt-2 text-white/50 text-[7px] overflow-hidden whitespace-nowrap text-ellipsis">
                                <TrendingUp className="w-3 h-3 text-brand-green" />
                                <span>Sonido original - GLE Marketing VIP</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedPlatform === 'whatsapp' && (
                        <motion.div 
                          key="whatsapp"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-3 bg-[#0b0e14]"
                        >
                          {/* WhatsApp Header */}
                          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between bg-[#121b22]">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-brand-green-dark border border-brand-green/30 flex items-center justify-center text-[10px] font-bold text-white">GL</div>
                              <div>
                                <h4 className="text-xs font-bold">GLE Soporte VIP</h4>
                                <div className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse"></span>
                                  <span className="text-[7px] text-brand-green font-bold uppercase tracking-wider">En línea</span>
                                </div>
                              </div>
                            </div>
                            <WhatsAppIcon className="w-5 h-5 text-brand-green" />
                          </div>

                          {/* Chat Messages Simulation */}
                          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
                            {/* Message 1: Client */}
                            {whatsappStep >= 1 && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="max-w-[85%] self-end bg-[#005c4b] text-white p-2.5 rounded-2xl rounded-tr-none text-[9px] leading-relaxed shadow-md border border-brand-green/20"
                              >
                                <p>Hola, vi su experiencia digital interactiva. Me interesa estructurar una presencia digital premium para mi marca y captar clientes calificados. ¿Me apoyan?</p>
                                <span className="text-[6px] text-white/60 block text-right mt-1">12:45 p.m. ✓✓</span>
                              </motion.div>
                            )}

                            {/* Message 2: GLE automated premium response */}
                            {whatsappStep >= 2 && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="max-w-[85%] self-start bg-[#202c33] text-white p-2.5 rounded-2xl rounded-tl-none text-[9px] leading-relaxed shadow-md border border-white/5"
                              >
                                <p>¡Hola! Un placer saludarte. 🚀 Diseñamos estrategias integrales de alta gama para posicionar tu negocio. Analizaremos tu marca y diseñaremos una propuesta a tu medida.</p>
                                <p className="mt-1 font-bold text-brand-green">¿Cuándo tienes 15 minutos para una llamada de diagnóstico?</p>
                                <span className="text-[6px] text-white/40 block text-right mt-1">12:46 p.m.</span>
                              </motion.div>
                            )}
                          </div>

                          {/* Premium Stats Box */}
                          <div className="mx-4 mb-3 p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-around text-center">
                            <div>
                              <p className="text-[8px] text-white/40">Respuesta</p>
                              <p className="text-xs font-black text-brand-green">&lt; 1 min</p>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10"></div>
                            <div>
                              <p className="text-[8px] text-white/40">Conversión</p>
                              <p className="text-xs font-black text-brand-green">84.2%</p>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10"></div>
                            <div>
                              <p className="text-[8px] text-white/40">Automatización</p>
                              <p className="text-xs font-black text-brand-green">Activo</p>
                            </div>
                          </div>

                          {/* Input Bar */}
                          <div className="p-3 bg-[#1f2c34] flex items-center gap-2">
                            <input 
                              type="text" 
                              placeholder="Escribe un mensaje..." 
                              disabled 
                              className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[9px] text-white/40 border-none outline-none"
                            />
                            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_10px_rgba(91,248,96,0.3)]">
                              <Send className="w-3.5 h-3.5 text-black" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedPlatform === 'youtube' && (
                        <motion.div 
                          key="youtube"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-3 bg-black"
                        >
                          {/* Youtube Header */}
                          <div className="px-4 pb-2 border-b border-white/5 flex justify-between items-center">
                            <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1">
                              <span className="bg-red-600 px-1.5 py-0.5 rounded-md text-[9px]">YT</span>
                              <span>Premium Channel</span>
                            </span>
                            <span className="text-[8px] bg-red-600/20 text-red-500 font-extrabold px-2 py-0.5 rounded-full">LIVE DATA</span>
                          </div>

                          {/* Video player simulation */}
                          <div className="w-full aspect-[16/10] bg-[#0b0c10] border-b border-white/10 relative group/player overflow-hidden flex flex-col justify-end">
                            {/* Graphic simulation of modern video */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#12571b]/20 to-black z-0"></div>
                            
                            {/* Visual chart representing organic view growth */}
                            <div className="absolute inset-x-0 top-1/2 bottom-0 z-10 flex items-end px-4 opacity-50">
                              <svg className="w-full h-full text-brand-green" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <path d="M0,50 Q25,30 50,20 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>

                            <div className="relative z-20 p-3 bg-gradient-to-t from-black via-black/80 to-transparent w-full text-left">
                              <p className="text-[10px] font-extrabold text-white leading-tight">Embudo Exponencial: Multiplicando visitas por 10 con contenido estructurado</p>
                              <div className="flex justify-between items-center mt-2.5 text-[8px] text-white/60">
                                <div className="flex gap-2">
                                  <span>03:45 / 12:30</span>
                                </div>
                                <div className="flex items-center gap-1 text-brand-green font-bold">
                                  <span>• 10.4K viendo</span>
                                </div>
                              </div>
                              {/* Seek Bar */}
                              <div className="w-full h-1 bg-white/20 rounded-full mt-2 relative">
                                <div className="absolute top-0 left-0 w-[30%] h-full bg-brand-green rounded-full shadow-[0_0_8px_rgba(91,248,96,0.6)]"></div>
                              </div>
                            </div>
                          </div>

                          {/* YouTube Analytics Dashboard */}
                          <div className="flex-1 p-4 overflow-y-auto">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                              <h5 className="text-[9px] font-bold text-white/50 uppercase tracking-widest mb-2">Métricas Exponenciales del Canal</h5>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                                  <p className="text-[8px] text-white/40">Visualizaciones</p>
                                  <p className="text-xs font-black text-white">+512K</p>
                                </div>
                                <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                                  <p className="text-[8px] text-white/40">CTR de Miniaturas</p>
                                  <p className="text-xs font-black text-brand-green">12.8%</p>
                                </div>
                                <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                                  <p className="text-[8px] text-white/40">Tasa de Retención</p>
                                  <p className="text-xs font-black text-brand-green">64.5%</p>
                                </div>
                                <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                                  <p className="text-[8px] text-white/40">Suscriptores Mensuales</p>
                                  <p className="text-xs font-black text-white">+12.4K</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Platform Control Buttons Selector Panel */}
            <div className="w-full relative z-10">
              <div className="flex flex-wrap justify-center gap-2 bg-black/40 p-2 rounded-3xl border border-white/5 backdrop-blur-md">
                {platforms.map((plat) => {
                  const isActive = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-green text-black font-extrabold shadow-[0_0_15px_rgba(91,248,96,0.3)] scale-105' 
                          : 'text-white/60 hover:text-white hover:bg-white/5 bg-transparent'
                      }`}
                    >
                      <span className={isActive ? 'text-black' : 'text-white/50 group-hover:text-white'}>
                        {plat.icon}
                      </span>
                      <span className="hidden sm:inline">{plat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: LAPTOP PREMIUM (WEB & SYSTEM SHOWCASE) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 sm:p-12 flex flex-col justify-between items-center relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
          >
            {/* Top accent light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent"></div>
            
            <div className="w-full text-center sm:text-left mb-8 relative z-10">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">Conversión e Infraestructura</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Sistemas Web & Marca GLE</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-md">Diseño e ingeniería digital centrada en retención y conversión extrema.</p>
            </div>

            {/* Laptop Container with Floating Animation and mouse Parallax */}
            <motion.div 
              animate={{ 
                y: [0, 8, 0],
                rotateX: mousePosition.y * 0.2,
                rotateY: -mousePosition.x * 0.2
              }}
              transition={{
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotateX: { type: "spring", stiffness: 100, damping: 20 },
                rotateY: { type: "spring", stiffness: 100, damping: 20 }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="relative my-8 z-10 w-full flex flex-col items-center max-w-[540px]"
            >
              {/* Laptop Screen Shadow & Glow */}
              <div className="absolute inset-0 w-[95%] h-[75%] top-[5%] bg-brand-green/5 blur-[50px] scale-90 pointer-events-none group-hover:bg-brand-green/10 transition-all duration-700"></div>

              {/* LAPTOP SCREEN (MacBook Pro Aluminum Dark Finish) */}
              <div className="w-full aspect-[16/10] bg-[#0d0d0d] rounded-2xl p-[6px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col overflow-hidden">
                {/* Upper camera notch dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-40 border border-white/10 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse opacity-60"></div>
                </div>

                {/* Screen Content Wrapper */}
                <div className="w-full h-full bg-[#07090a] rounded-lg overflow-hidden relative flex flex-col text-white select-none border border-white/5">
                  
                  {/* Web Browser bar */}
                  <div className="h-6 w-full bg-[#0a0a0f] border-b border-white/5 px-3 flex items-center justify-between z-30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="bg-[#12141c] border border-white/5 rounded-md px-16 py-0.5 text-[8px] text-white/40 flex items-center gap-1.5">
                      <span className="text-brand-green">🔒</span>
                      <span>glemarketing.com/proyecto</span>
                    </div>
                    <div className="w-4"></div>
                  </div>

                  {/* ACTIVE SCREEN CONTENT */}
                  <div className="flex-1 overflow-hidden relative flex flex-col">
                    <AnimatePresence mode="wait">
                      {selectedService === 'web' && (
                        <motion.div 
                          key="web"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left"
                        >
                          {/* SaaS Corporate Dashboard */}
                          <div className="flex-1 flex text-[9px]">
                            {/* Mini Sidebar */}
                            <div className="w-[64px] border-r border-white/5 bg-[#0a0c10] p-2 flex flex-col gap-2">
                              <span className="font-extrabold text-[10px] text-brand-green tracking-wide block mb-1">GLE.dev</span>
                              <div className="h-3.5 bg-brand-green/10 text-brand-green rounded px-1.5 py-0.5 font-bold flex items-center gap-1 border border-brand-green/20">
                                📊 Resumen
                              </div>
                              <span className="text-white/40 px-1.5 py-0.5">🚀 Canales</span>
                              <span className="text-white/40 px-1.5 py-0.5">👤 Leads</span>
                              <span className="text-white/40 px-1.5 py-0.5">⚙️ Ajustes</span>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 p-3 bg-[#08090d] flex flex-col gap-3 overflow-y-auto">
                              {/* Welcome widget */}
                              <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/10">
                                <div>
                                  <h4 className="font-bold text-[10px] text-white">Panel Corporativo</h4>
                                  <p className="text-[7px] text-white/40">Ventas, velocidad e infraestructura optimizadas.</p>
                                </div>
                                <span className="text-[7px] bg-brand-green text-black font-extrabold px-1.5 py-0.5 rounded-full shadow-[0_0_8px_rgba(91,248,96,0.3)]">Active Dev</span>
                              </div>

                              {/* Analytics charts grid */}
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-brand-card p-2 rounded-lg border border-white/5">
                                  <p className="text-[7px] text-white/40">Conversión Web</p>
                                  <p className="text-[11px] font-black text-brand-green">8.42%</p>
                                </div>
                                <div className="bg-brand-card p-2 rounded-lg border border-white/5">
                                  <p className="text-[7px] text-white/40">Velocidad LCP</p>
                                  <p className="text-[11px] font-black text-brand-green">0.4s (Ultra)</p>
                                </div>
                                <div className="bg-brand-card p-2 rounded-lg border border-white/5">
                                  <p className="text-[7px] text-white/40">Visitas Diarias</p>
                                  <p className="text-[11px] font-black text-white">12.8K</p>
                                </div>
                              </div>

                              {/* Main Growth Curve chart */}
                              <div className="bg-brand-card p-2.5 rounded-xl border border-white/10 flex-1 flex flex-col justify-between">
                                <span className="font-bold text-white/60 text-[7px] block mb-1">Crecimiento de Tránsito Orgánico</span>
                                <div className="flex-1 w-full relative flex items-end gap-1 px-2 h-14 mt-1 border-b border-white/5">
                                  {/* Curve svg grid representation */}
                                  <svg className="absolute inset-0 w-full h-full text-brand-green opacity-80" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <path d="M0,45 Q20,38 40,25 T80,15 T100,2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                                    <path d="M0,45 Q20,38 40,25 T80,15 T100,2 L100,50 L0,50 Z" fill="url(#green-glow-grad)" className="opacity-10" />
                                    <defs>
                                      <linearGradient id="green-glow-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5bf860" />
                                        <stop offset="100%" stopColor="#5bf860" stopOpacity="0" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="flex justify-between items-center text-[6px] text-white/40 mt-1.5">
                                  <span>Ene</span>
                                  <span>Feb</span>
                                  <span>Mar</span>
                                  <span>Abr</span>
                                  <span>May (Actual)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedService === 'landing' && (
                        <motion.div 
                          key="landing"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left overflow-y-auto"
                        >
                          {/* Landing Page Mockup Showcase */}
                          <div className="p-4 flex-1 flex flex-col justify-center items-center text-center max-w-md mx-auto gap-3">
                            <span className="text-[7px] text-brand-green font-bold tracking-widest uppercase border border-brand-green/20 px-2 py-0.5 rounded-full bg-brand-green/5">
                              EMBUDO ALTAMENTE OPTIMIZADO
                            </span>
                            <h4 className="text-base sm:text-lg font-black tracking-tight leading-tight">
                              Escale su Empresa al <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Siguiente Nivel</span>
                            </h4>
                            <p className="text-[8px] leading-relaxed text-gray-400 max-w-[90%]">
                              Implementamos landing pages de alto rendimiento con copys persuasivos diseñados para maximizar conversiones y leads calificados de forma constante.
                            </p>
                            
                            {/* Premium Mock Form Inputs */}
                            <div className="w-full max-w-[200px] flex flex-col gap-1.5 mt-2">
                              <input 
                                type="text" 
                                placeholder="Tu correo corporativo" 
                                disabled 
                                className="w-full bg-white/5 border border-white/10 rounded-md p-1 text-[7px] outline-none text-center"
                              />
                              <button className="w-full bg-brand-green text-black font-extrabold p-1 rounded-md text-[7px] shadow-[0_0_12px_rgba(91,248,96,0.3)] hover:bg-brand-green-hover transition-colors">
                                Agendar Diagnóstico Gratuito →
                              </button>
                            </div>

                            {/* Trust badges */}
                            <div className="flex gap-4 items-center mt-3 pt-3 border-t border-white/5 w-full justify-center">
                              <span className="text-[6px] text-white/30 tracking-wider">STRIPE CONNECT</span>
                              <span className="text-[6px] text-white/30 tracking-wider">LINEAR ALIGN</span>
                              <span className="text-[6px] text-white/30 tracking-wider">VERCEL PLATFORMS</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedService === 'catalogo' && (
                        <motion.div 
                          key="catalogo"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left"
                        >
                          {/* Catalog Showcase */}
                          <div className="p-3 border-b border-white/5 flex justify-between items-center bg-[#0a0a0f]">
                            <span className="text-[8px] font-bold tracking-wide">CATÁLOGO EXCLUSIVO</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[7px] text-brand-green font-bold">🛒 Bolsa ({cartCount})</span>
                            </div>
                          </div>

                          <div className="flex-1 p-3 overflow-y-auto bg-[#08090d]">
                            <div className="grid grid-cols-2 gap-2.5">
                              {[
                                { title: "Modelo Titanium Black", desc: "Premium Hardware", price: "$1,499.00", color: "from-[#08150c] to-black" },
                                { title: "Ecosistema Pro Plus", desc: "Full Integration", price: "$2,899.00", color: "from-black to-brand-card" },
                                { title: "Branding Elite Pack", desc: "Corporate Identity", price: "$999.00", color: "from-brand-card to-[#04101a]" },
                                { title: "SEO Master Stack", desc: "Permanent Organic", price: "$1,200.00", color: "from-[#0d1c0f] to-[#040e06]" }
                              ].map((prod, idx) => (
                                <div key={idx} className="bg-brand-card rounded-xl p-2.5 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
                                  <div className={`w-full aspect-[16/10] bg-gradient-to-tr ${prod.color} rounded-lg border border-white/5 mb-2 relative overflow-hidden flex items-center justify-center`}>
                                    <Sparkles className="w-5 h-5 text-white/10" />
                                  </div>
                                  <div>
                                    <p className="text-[8px] font-black text-white">{prod.title}</p>
                                    <p className="text-[6px] text-white/40">{prod.desc}</p>
                                  </div>
                                  <div className="flex justify-between items-center mt-2">
                                    <span className="text-[8px] font-extrabold text-brand-green">{prod.price}</span>
                                    <button 
                                      onClick={() => setCartCount(c => c + 1)}
                                      className="text-[6px] bg-white/5 hover:bg-brand-green hover:text-black border border-white/15 px-2 py-0.5 rounded transition-all font-bold"
                                    >
                                      + Agregar
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedService === 'branding' && (
                        <motion.div 
                          key="branding"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left"
                        >
                          {/* Brandbook & Guidelines */}
                          <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto bg-[#08090d]">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-[6px] text-brand-green font-bold tracking-widest block uppercase">GUÍA DE MARCA ELITE</span>
                                <h4 className="text-sm font-black text-white mt-1">Identidad Visual GLE</h4>
                              </div>
                              <span className="text-[6px] border border-white/10 px-2 py-0.5 rounded text-white/50">V.1.0 (2026)</span>
                            </div>

                            {/* Color Grid */}
                            <div>
                              <p className="text-[7px] text-white/40 font-bold mb-1.5 uppercase">Paleta de Colores Corporativos</p>
                              <div className="grid grid-cols-4 gap-2">
                                {[
                                  { name: "Brand Green", hex: "#5bf860", bg: "bg-[#5bf860]", text: "text-black" },
                                  { name: "Brand BG", hex: "#07090a", bg: "bg-[#07090a]", text: "text-white" },
                                  { name: "Card Dark", hex: "#121415", bg: "bg-[#121415]", text: "text-white" },
                                  { name: "Accent White", hex: "#ffffff", bg: "bg-[#ffffff]", text: "text-black" }
                                ].map((col, idx) => (
                                  <div key={idx} className="bg-brand-card p-1.5 rounded-lg border border-white/5 flex flex-col justify-between gap-2">
                                    <div className={`w-full aspect-[2/1] ${col.bg} rounded border border-white/10`}></div>
                                    <div>
                                      <p className="text-[6px] font-bold text-white/80">{col.name}</p>
                                      <p className="text-[5px] text-white/40 font-mono">{col.hex}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Typography / Assets */}
                            <div className="bg-brand-card p-3 rounded-xl border border-white/5">
                              <p className="text-[7px] text-white/40 font-bold mb-2 uppercase">Estructura Tipográfica</p>
                              <div className="flex flex-col gap-2">
                                <div className="border-b border-white/5 pb-1.5">
                                  <p className="text-[7px] text-white/40 font-mono">Principal Header: Montserrat Bold</p>
                                  <p className="text-sm font-black text-white tracking-tight leading-tight">GLE Marketing</p>
                                </div>
                                <div>
                                  <p className="text-[7px] text-white/40 font-mono">Secondary Content: UI System Sans</p>
                                  <p className="text-[8px] text-white/80 leading-relaxed font-sans">
                                    Diseño premium enfocado en simplicidad y conversión extremo.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedService === 'seo' && (
                        <motion.div 
                          key="seo"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left"
                        >
                          {/* SEO Audit & Performance dashboard */}
                          <div className="flex-1 p-3 bg-[#08090d] flex flex-col gap-3 overflow-y-auto">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="text-[6px] text-brand-green font-bold uppercase tracking-widest block">AUDITORÍA SEO DE MARCA</span>
                                <h4 className="text-xs font-black text-white mt-1">SEO Health Dashboard</h4>
                              </div>
                              <span className="text-[8px] bg-brand-green/20 text-brand-green px-2 py-0.5 rounded font-bold border border-brand-green/20">Optimizado</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              {/* Radial Health score simulator */}
                              <div className="bg-brand-card p-2 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
                                <p className="text-[6px] text-white/40 mb-1.5 uppercase">Salud del Sitio</p>
                                <div className="w-10 h-10 rounded-full border-2 border-brand-green flex items-center justify-center shadow-[0_0_10px_rgba(91,248,96,0.2)]">
                                  <span className="text-[9px] font-black text-brand-green">99%</span>
                                </div>
                              </div>

                              {/* Metric 2 */}
                              <div className="bg-brand-card p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                                <p className="text-[6px] text-white/40 uppercase">Backlinks Elite</p>
                                <div>
                                  <p className="text-[12px] font-black text-white">4,812</p>
                                  <span className="text-[5px] text-brand-green font-bold">↑ 14% este mes</span>
                                </div>
                              </div>

                              {/* Metric 3 */}
                              <div className="bg-brand-card p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                                <p className="text-[6px] text-white/40 uppercase">Tránsito Orgánico</p>
                                <div>
                                  <p className="text-[12px] font-black text-white">48.2K/m</p>
                                  <span className="text-[5px] text-brand-green font-bold">↑ 85% este mes</span>
                                </div>
                              </div>
                            </div>

                            {/* Top Search Keywords Performance list */}
                            <div className="bg-brand-card p-2.5 rounded-xl border border-white/5 flex-1 flex flex-col justify-between">
                              <span className="font-bold text-white/50 text-[7px] uppercase block mb-1.5">Top Keywords en Google</span>
                              <div className="flex flex-col gap-1">
                                {[
                                  { kw: "agencia de marketing premium", pos: "#1", volume: "2,400", change: "↑ 4 pos" },
                                  { kw: "diseño web de alta gama", pos: "#1", volume: "1,800", change: "↑ 8 pos" },
                                  { kw: "desarrollo web vercel stripe", pos: "#2", volume: "950", change: "↑ 12 pos" }
                                ].map((item, idx) => (
                                  <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                                    <div className="flex gap-1.5 items-center">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                                      <span className="text-[7px] font-bold text-white/90">{item.kw}</span>
                                    </div>
                                    <div className="flex gap-3 text-[6px]">
                                      <span className="text-brand-green font-black">{item.pos}</span>
                                      <span className="text-white/40">{item.volume}/m</span>
                                      <span className="text-brand-green font-bold">{item.change}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedService === 'tienda' && (
                        <motion.div 
                          key="tienda"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col pt-2 text-left"
                        >
                          {/* E-commerce Store Operations */}
                          <div className="flex-1 p-3 bg-[#08090d] flex flex-col gap-3 overflow-y-auto">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="text-[6px] text-brand-green font-bold uppercase tracking-widest block">OPERACIONES DE E-COMMERCE</span>
                                <h4 className="text-xs font-black text-white mt-1">E-commerce Panel Integrado</h4>
                              </div>
                              <div className="flex items-center gap-1 text-[7px] text-brand-green font-extrabold border border-brand-green/20 bg-brand-green/5 px-2 py-0.5 rounded">
                                🟢 Stripe Conectado
                              </div>
                            </div>

                            {/* Revenue & Growth metrics */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-brand-card p-2.5 rounded-xl border border-white/5">
                                <p className="text-[7px] text-white/40 uppercase">Facturación Mensual</p>
                                <p className="text-sm font-black text-white">$48,210.00</p>
                                <span className="text-[5px] text-brand-green font-bold">↑ 22% (Sobre meta)</span>
                              </div>
                              <div className="bg-brand-card p-2.5 rounded-xl border border-white/5">
                                <p className="text-[7px] text-white/40 uppercase">Tasa de Abandono</p>
                                <p className="text-sm font-black text-brand-green">24.5% (Mínima)</p>
                                <span className="text-[5px] text-brand-green font-bold">↓ 12% por optimización</span>
                              </div>
                            </div>

                            {/* Live Purchase Activity list */}
                            <div className="bg-brand-card p-2.5 rounded-xl border border-white/5 flex-1 flex flex-col justify-between">
                              <span className="font-bold text-white/50 text-[7px] uppercase block mb-1.5">Actividad de Ventas en Vivo</span>
                              <div className="flex flex-col gap-1.5">
                                {[
                                  { order: "#59402", location: "Madrid, ES", amount: "$1,499.00", time: "Hace 2 min", status: "Completado" },
                                  { order: "#59401", location: "CDMX, MX", amount: "$2,899.00", time: "Hace 14 min", status: "Completado" },
                                  { order: "#59400", location: "Miami, US", amount: "$999.00", time: "Hace 42 min", status: "Procesando" }
                                ].map((ord, idx) => (
                                  <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0 text-[7px]">
                                    <div>
                                      <span className="font-bold text-white">{ord.order}</span>
                                      <span className="text-white/40 ml-1.5">({ord.location})</span>
                                    </div>
                                    <div className="flex gap-3">
                                      <span className="font-black text-brand-green">{ord.amount}</span>
                                      <span className="text-white/30">{ord.time}</span>
                                      <span className="text-[6px] bg-brand-green/10 text-brand-green font-bold px-1.5 rounded">{ord.status}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* LAPTOP LOWER KEYBOARD & TRACKPAD MOCKUP BASE */}
              <div className="w-[108%] h-[12px] bg-[#1a1a1e] rounded-b-2xl border-t border-white/10 relative shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-20">
                {/* Center opening groove */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#0a0a0f] rounded-b-[4px]"></div>
                {/* Visual indicator of keyboard key rows */}
                <div className="absolute inset-x-2.5 top-[1px] h-[2px] bg-white/5 rounded-full"></div>
              </div>
            </motion.div>

            {/* Services Selector Grid Control Panel */}
            <div className="w-full relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-black/40 p-2 rounded-3xl border border-white/5 backdrop-blur-md">
                {servicesList.map((serv) => {
                  const isActive = selectedService === serv.id;
                  return (
                    <button
                      key={serv.id}
                      onClick={() => setSelectedService(serv.id)}
                      className={`flex items-center justify-center sm:justify-start gap-2 px-3 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-green text-black font-extrabold shadow-[0_0_15px_rgba(91,248,96,0.3)] scale-105' 
                          : 'text-white/60 hover:text-white hover:bg-white/5 bg-transparent'
                      }`}
                    >
                      <span className={isActive ? 'text-black' : 'text-white/50 group-hover:text-white'}>
                        {serv.icon}
                      </span>
                      <span>{serv.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
