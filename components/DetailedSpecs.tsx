import React, { useState, useRef, useEffect } from 'react';
import { Sun, Battery, ChevronLeft, ChevronRight, Download, Cpu } from 'lucide-react';
import { PV_SPECS, BATTERY_SPECS, CONTROLLER_SPECS } from '../constants';
import gsap from 'gsap';

export const DetailedSpecs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<(HTMLImageElement | null)[]>([]);

  const slides = [
    {
      id: 'pv',
      icon: Sun,
      title: 'TopCon N-Type 光伏组件',
      subtitle: 'Weak Light Performance',
      description: '采用最新的N型TopCon电池技术，在弱光和高温环境下表现卓越，是高原和沙漠离网系统的首选。',
      specs: PV_SPECS,
      image: 'https://img.lenyiin.com/app/hide.php?key=emZubTY5YUxVa0ZJTHdESjI5bjdrN1FvY0ZZOFVZK1VGcWl0bGw0PQ==',
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/30'
    },
    {
      id: 'controller',
      icon: Cpu,
      title: 'AGP-SmartHub 智能中枢',
      subtitle: 'All-in-One Integration',
      description: '高度集成的能源管理大脑。将逆变器、MPPT控制器与能源分配系统完美融合，采用第三代碳化硅(SiC)功率器件，转换效率突破99%。',
      specs: CONTROLLER_SPECS,
      image: 'https://img.lenyiin.com/app/hide.php?key=L3I5SERSd1dmVVZrRW9uQ2hCUjJFYlFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/30'
    },
    {
      id: 'battery',
      icon: Battery,
      title: 'LiFePO4 LFP-100 储能电池',
      subtitle: '6000+ Cycles Lifespan',
      description: 'A级电芯，配合智能BMS系统，提供高达6000次的深循环寿命，确保15年以上的稳定运行。',
      specs: BATTERY_SPECS,
      image: 'https://img.lenyiin.com/app/hide.php?key=b3lLWVZEOE1vYUxaTWFMV3RjTXVUYlFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      color: 'text-green-400',
      bgGradient: 'from-green-500/30'
    }
  ];

  const slideCount = slides.length;

  useEffect(() => {
    slides.forEach((_, index) => {
      const card = cardsRef.current[index];
      const content = contentRef.current[index];
      const img = imageRef.current[index];
      
      if (!card) return;

      // Determine position in the cycle: 0 (Center), 1 (Right), 2 (Left)
      // We map the indices to relative positions.
      // (index - currentIndex + 3) % 3
      // 0 -> Center
      // 1 -> Right
      // 2 -> Left
      
      const posIndex = (index - currentIndex + slideCount) % slideCount;
      
      let xPercent = 0;
      let scale = 1;
      let zIndex = 0;
      let opacity = 1;
      let brightness = 1;
      let rotationY = 0;
      let blur = 0;

      if (posIndex === 0) {
        // Center
        xPercent = 0;
        scale = 1;
        zIndex = 20;
        opacity = 1;
        brightness = 1;
        rotationY = 0;
        blur = 0;
      } else if (posIndex === 1) {
        // Right
        xPercent = 65; // Push to right
        scale = 0.85;
        zIndex = 10;
        opacity = 0.7; // Increased visibility
        brightness = 0.7; // Increased brightness
        rotationY = -15; // Face inwards
        blur = 1; // Reduced blur slightly
      } else if (posIndex === 2) {
        // Left
        xPercent = -65; // Push to left
        scale = 0.85;
        zIndex = 10;
        opacity = 0.7; // Increased visibility
        brightness = 0.7; // Increased brightness
        rotationY = 15; // Face inwards
        blur = 1; // Reduced blur slightly
      }

      // GSAP Animation
      gsap.to(card, {
        xPercent: xPercent,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        rotationY: rotationY,
        filter: `brightness(${brightness}) blur(${blur}px)`,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto"
      });

      // Animate Internal Content only for center
      if (posIndex === 0 && content && img) {
        gsap.to(content, { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            delay: 0.2 
        });
        gsap.to(img, { 
            scale: 1.0, 
            duration: 1.2 
        });
      } else if (content && img) {
        // Reset or hide content for side cards
        gsap.to(content, { y: 20, opacity: 0, duration: 0.3 });
        gsap.to(img, { scale: 1.1, duration: 0.5 });
      }

      // Pointer events
      card.style.pointerEvents = posIndex === 0 ? 'auto' : 'auto'; // Allow clicking side cards
      card.style.cursor = posIndex === 0 ? 'default' : 'pointer';
    });
  }, [currentIndex, slideCount]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden md:overflow-visible">
      <div className="flex items-end justify-between mb-12 px-2">
         <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">核心组件技术参数</h2>
            <p className="text-gray-400">滑动查看光伏、控制器与储能电池的核心技术指标</p>
         </div>
         {/* Top Navigation */}
         <div className="hidden md:flex space-x-3 relative z-10">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/10 bg-surface-800 text-white hover:bg-lumina-500 hover:text-black transition-all active:scale-95 shadow-lg group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 bg-surface-800 text-white hover:bg-lumina-500 hover:text-black transition-all active:scale-95 shadow-lg group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
         </div>
      </div>

      {/* 
        Stack Container 
        Using perspective for 3D effect.
      */}
      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 h-[650px] md:h-[550px] perspective-[1000px] items-center">
        {slides.map((slide, index) => {
           return (
            <div 
              key={slide.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => handleCardClick(index)}
              className="col-start-1 row-start-1 w-full h-full md:h-auto absolute md:relative will-change-transform"
            >
               {/* Card Content */}
               <div className="w-full h-full bg-surface-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row backface-hidden">
                     {/* Left Side: Image */}
                      <div className="relative w-full md:w-5/12 overflow-hidden bg-surface-800 min-h-[250px] md:min-h-auto flex-shrink-0 group">
                        <div className="absolute inset-0 z-0">
                            <img 
                              ref={(el) => { imageRef.current[index] = el; }}
                              src={slide.image} 
                              alt={slide.title} 
                              className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* 
                           Improved Gradients to show more image:
                           1. Tint: Subtle color tint, no masking.
                           2. Side Mask: Pushed to the right using 'via-transparent'.
                           3. Text Protection: Separate bottom gradient for text readability.
                        */}
                        
                        {/* 1. Color Tint */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} to-transparent opacity-40 mix-blend-screen pointer-events-none`}></div>

                        {/* 2. Side Mask (Desktop) & Bottom Mask (Mobile) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-surface-900 pointer-events-none"></div>
                        
                        {/* 3. Dedicated Bottom Text Protection Gradient (Always active for text contrast) */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface-900/90 via-surface-900/40 to-transparent pointer-events-none"></div>
                        
                        <div 
                          ref={(el) => { contentRef.current[index] = el; }}
                          className="absolute bottom-6 left-6 right-6 z-10"
                        >
                           <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 mb-4 shadow-lg ${slide.color}`}>
                              <slide.icon className="w-6 h-6" />
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{slide.title}</h3>
                           <p className="text-[10px] font-mono text-lumina-400 uppercase tracking-[0.2em] mb-3 opacity-90 drop-shadow-md">{slide.subtitle}</p>
                           <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 md:line-clamp-none drop-shadow-sm">
                             {slide.description}
                           </p>
                        </div>
                      </div>

                      {/* Right Side: Data Table */}
                      <div className="w-full md:w-7/12 p-6 md:p-10 bg-surface-900 flex flex-col relative">
                         <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <slide.icon className="w-48 h-48 text-white" />
                         </div>

                         <div className="flex-1 relative z-10 flex flex-col justify-center">
                            <div className="grid grid-cols-1 gap-y-1">
                              {slide.specs.map((item, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 rounded-lg transition-colors"
                                >
                                  <span className="text-gray-400 text-xs font-medium">{item.label}</span>
                                  <span className="text-white font-mono text-xs font-bold tracking-wide group-hover:text-lumina-400 transition-colors text-right pl-4">
                                    {item.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                         </div>

                         <div className="mt-6 pt-4 border-t border-white/10 flex justify-end items-center relative z-10">
                            <button className="text-gray-400 hover:text-white text-xs flex items-center transition-colors px-4 py-2 rounded-full hover:bg-white/5 bg-surface-800/50">
                              <Download className="w-3.5 h-3.5 mr-2" />
                              下载完整规格书
                            </button>
                         </div>
                      </div>
                  </div>
            </div>
           )
        })}
      </div>

       {/* Mobile Navigation */}
       <div className="md:hidden flex justify-center space-x-6 mt-8 relative z-20">
            <button 
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/10 bg-surface-800 text-white active:bg-lumina-500 active:text-black transition-all shadow-lg"
            >
            <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
            onClick={handleNext}
            className="p-3 rounded-full border border-white/10 bg-surface-800 text-white active:bg-lumina-500 active:text-black transition-all shadow-lg"
            >
            <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    </div>
  );
};