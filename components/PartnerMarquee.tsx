import React from 'react';

const PARTNERS = [
  { name: 'CATL 宁德时代', logo: 'https://logo.clearbit.com/catl.com' },
  { name: 'TONGWEI 通威股份', logo: 'https://logo.clearbit.com/tongwei.com' },
  { name: 'LONGi 隆基绿能', logo: 'https://logo.clearbit.com/longi.com' },
  { name: 'BYD 比亚迪', logo: 'https://logo.clearbit.com/byd.com' },
  { name: 'HUAWEI 华为数字能源', logo: 'https://logo.clearbit.com/huawei.com' },
  { name: 'SUNGROW 阳光电源', logo: 'https://logo.clearbit.com/sungrowpower.com' },
  { name: 'Ginlong 锦浪科技', logo: 'https://logo.clearbit.com/ginlong.com' },
  { name: 'Trina Solar 天合光能', logo: 'https://logo.clearbit.com/trinasolar.com' },
  { name: 'Jinko Solar 晶科能源', logo: 'https://logo.clearbit.com/jinkosolar.com' },
  { name: 'JA Solar 晶澳科技', logo: 'https://logo.clearbit.com/jasolar.com' }
];

export const PartnerMarquee: React.FC = () => {
  return (
    <div className="bg-black py-16 border-b border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
         <p className="text-xs font-bold text-lumina-400 uppercase tracking-[0.3em] opacity-80">
            Strategic Partners & Supply Chain
         </p>
         <p className="text-sm text-gray-500 mt-2">
            携手全球顶级能源巨头，共筑可靠离网生态
         </p>
      </div>
      
      <div className="flex overflow-hidden relative w-full group">
        {/* First Loop */}
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="mx-8 md:mx-12 flex items-center space-x-3 group/item cursor-default">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                 <img 
                   src={partner.logo} 
                   alt={partner.name} 
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     (e.target as HTMLImageElement).style.display = 'none'; // Fallback if logo fails
                   }}
                 />
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-600 group-hover/item:text-white transition-colors duration-300 select-none font-sans tracking-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Second Loop (Duplicate for seamless scroll) */}
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0" aria-hidden="true">
          {PARTNERS.map((partner, index) => (
            <div key={`dup-${index}`} className="mx-8 md:mx-12 flex items-center space-x-3 group/item cursor-default">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                 <img 
                   src={partner.logo} 
                   alt={partner.name} 
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     (e.target as HTMLImageElement).style.display = 'none';
                   }}
                 />
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-600 group-hover/item:text-white transition-colors duration-300 select-none font-sans tracking-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

       {/* Gradient Masks */}
       <div className="absolute top-0 left-0 w-20 md:w-64 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-20 md:w-64 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};