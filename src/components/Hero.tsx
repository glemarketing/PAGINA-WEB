import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030712]">
      {/* Background glow and subtle elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] z-10 transition-opacity duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block py-1 px-3 border border-brand-green/30 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider mb-6">
                Especialistas en Catálogos
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Tu producto, en el <br />
                <span className="text-brand-green italic mr-2 text-glow">centro</span>
                de todo.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Servicio experto de manejo de redes sociales enfocado en el diseño, fotografía y exposición de catálogos de producto. Hacemos que tu inventario destaque y convierta seguidores en compradores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contacto" className="bg-brand-green text-brand-bg hover:bg-brand-green-hover px-8 py-4 rounded-sm font-bold text-sm transition-all duration-300 hover:box-glow">
                Inicia tu Proyecto
              </a>
              <a href="#portafolio" className="border border-white/20 hover:border-white/50 text-white bg-white/5 backdrop-blur-sm px-8 py-4 rounded-sm font-bold text-sm transition-all duration-300">
                Ver Portafolio
              </a>
            </motion.div>
          </div>
          
          {/* Right Column - Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 group mt-10 md:mt-0"
          >
            {/* Green gradient overlay for brand identity */}
            <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay z-10 group-hover:bg-brand-green/5 transition-colors duration-500 pointer-events-none"></div>
            {/* Static Catalog Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <img 
                src="/catalogo.png"
                className="w-full h-full object-cover"
                alt="Catálogo de Productos - Manejo de Redes"
              />
            </motion.div>
            
            {/* Inner glow border effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20 pointer-events-none"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
