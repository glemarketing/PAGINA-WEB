import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const images = [
  { src: "/PAGINA-WEB/portfolio/media__1775247707032.webp", title: 'Logo 1' },
  { src: "/PAGINA-WEB/portfolio/media__1775247706759.webp", title: 'Logo 2' },
  { src: "/PAGINA-WEB/portfolio/media__1775247706561.webp", title: 'Logo 3' },
  { src: "/PAGINA-WEB/portfolio/media__1775247706479.webp", title: 'Logo 4' },
  { src: "/PAGINA-WEB/portfolio/media__1775247705827.webp", title: 'Logo 5' }
];

export default function BrandSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    
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
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-brand-card/50 ring-1 ring-white/10 shadow-[0_0_50px_rgba(34,197,94,0.1)] group">
      
      <div className="relative aspect-square md:aspect-video w-full overflow-hidden flex items-center justify-center bg-white">
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
            className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
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
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex justify-between z-20 pointer-events-none">
        <button 
          onClick={handlePrev}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:text-black hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <span className="sr-only">Anterior</span>
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:text-black hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <span className="sr-only">Siguiente</span>
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};




