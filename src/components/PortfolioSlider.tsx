import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const images = [
  { src: '/portfolio/media__1775246265863.jpg', category: 'Social Media', title: 'Golf Kids' },
  { src: '/portfolio/media__1775246211937.png', category: 'Branding', title: 'Costas Garden' },
  { src: '/portfolio/media__1775246211970.png', category: 'Diseño Gráfico', title: 'Dubai Restaurant' },
  { src: '/portfolio/media__1775246211999.png', category: 'Feed Management', title: 'Costas Garden App' },
  { src: '/portfolio/media__1775246212033.png', category: 'Content Creation', title: 'Promoción Dubai' },
  { src: '/portfolio/media__1775246212047.jpg', category: 'Campaigns', title: 'UTravel' },
  { src: '/portfolio/media__1775246232572.png', category: 'Estrategia Digital', title: 'Feed Profesional' },
  { src: '/portfolio/media__1775246264576.png', category: 'Producción Audiovisual', title: 'Ingeca' },
  { src: '/portfolio/media__1775246265594.jpg', category: 'Meta Ads', title: 'UTravel Destinos' },
  { src: '/portfolio/media__1775246283694.png', category: 'Shows & Eventos', title: 'Barry Mendieta' }
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4500); // 4.5 seconds per slide
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const variants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    }),
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-brand-card/50 ring-1 ring-white/10 shadow-[0_0_50px_rgba(34,197,94,0.1)] group">
      
      {/* Slider Container */}
      <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center bg-black/80">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 filter drop-shadow-2xl"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
          />
        </AnimatePresence>

        {/* Overlay Info Layer */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent p-6 md:p-12 z-10 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <motion.span 
            key={`cat-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-green text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2"
          >
            {images[currentIndex].category}
          </motion.span>
          <motion.h3 
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl font-black text-white"
          >
            {images[currentIndex].title}
          </motion.h3>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex justify-between z-20 pointer-events-none">
        <button 
          onClick={handlePrev}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:text-black hover:scale-110 hover:border-brand-green transition-all duration-300 shadow-xl"
        >
          <span className="sr-only">Anterior</span>
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:text-black hover:scale-110 hover:border-brand-green transition-all duration-300 shadow-xl"
        >
          <span className="sr-only">Siguiente</span>
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Progress / Playback Controls */}
      <div className="absolute top-6 right-6 z-20 pointer-events-auto">
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black/50 backdrop-blur-md border border-white/10 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`transition-all duration-500 rounded-full ${
              i === currentIndex ? 'w-8 h-2 bg-brand-green shadow-[0_0_10px_rgba(34,197,94,1)]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
