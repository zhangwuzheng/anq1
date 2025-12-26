import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, ShoppingBag, Shield, Zap, Droplets, Maximize, ChevronDown, Check } from 'lucide-react';
import { Button } from './Button';

interface ProductDetailProps {
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailProps> = ({ onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Simple spy logic
      const sections = ['overview', 'features', 'specs', 'box'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-lumina-500 selection:text-white pb-24">
      {/* 1. Top Navigation (Always Visible) */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-900/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent pt-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 transition-colors group">
                <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
              <span className="text-xl font-bold tracking-tight">宸 (Chen) 系列 <span className="text-lumina-500">.</span></span>
            </div>
            
            {/* Desktop Sub-Nav */}
            <div className="hidden md:flex space-x-8">
               {['overview', 'features', 'specs', 'box'].map((item) => (
                 <button 
                   key={item}
                   onClick={() => scrollTo(item)}
                   className={`text-sm font-medium capitalize transition-colors ${activeSection === item ? 'text-lumina-400' : 'text-gray-400 hover:text-white'}`}
                 >
                   {item === 'box' ? "In the Box" : item}
                 </button>
               ))}
            </div>

            <div className="flex items-center space-x-4">
               <span className="hidden md:block text-lg font-bold">¥ 4,999起</span>
               <Button size="sm" className="rounded-full">立即购买</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="overview" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop" 
              alt="400W Solar Panel Hero" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
         </div>
         
         <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center space-x-2 bg-lumina-500/20 backdrop-blur-md border border-lumina-500/30 rounded-full px-4 py-1 mb-6">
               <Star className="w-3 h-3 text-lumina-400 fill-current" />
               <span className="text-xs font-bold text-lumina-400 uppercase tracking-widest">Top Rated Portable Solar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              轻量出行。<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-lumina-300 to-lumina-500">
                能量如影随形。
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              安宸 400W 便携式光伏板。22.6% 极致转换效率，IP68 级防水，一体式折叠设计。
              为您的户外探索提供无限动力。
            </p>
            <div className="flex justify-center gap-4">
               <Button size="lg" className="rounded-full px-8">立即购买</Button>
               <button onClick={() => scrollTo('features')} className="flex items-center text-white font-medium hover:text-lumina-400 transition-colors">
                  了解更多 <ChevronDown className="ml-1 w-4 h-4" />
               </button>
            </div>
         </div>
      </section>

      {/* 3. Features Breakdown (Zig-Zag Layout) */}
      <div id="features" className="bg-black">
        
        {/* Feature 1: Efficiency */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                 <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 group">
                    <img 
                      src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop" 
                      alt="Solar Cells" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                       <div className="text-5xl font-bold text-lumina-400 mb-2">22.6%</div>
                       <div className="text-sm text-gray-400 uppercase tracking-widest">Conversion Efficiency</div>
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                 <div className="w-12 h-12 bg-surface-800 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-lumina-400" />
                 </div>
                 <h2 className="text-4xl font-bold">高效转化，<br/>捕捉每一缕阳光。</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    采用最新的 N 型 TopCon 单晶硅电池片，即便在阴天或早晚弱光环境下，
                    依然保持出色的发电性能。相比传统多晶硅面板，同面积下功率提升 15%。
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                       <Check className="w-5 h-5 text-lumina-500 mr-3" /> 优异的弱光响应
                    </li>
                    <li className="flex items-center text-gray-300">
                       <Check className="w-5 h-5 text-lumina-500 mr-3" /> 更低的热斑效应风险
                    </li>
                    <li className="flex items-center text-gray-300">
                       <Check className="w-5 h-5 text-lumina-500 mr-3" /> 旁路二极管保护
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Feature 2: Waterproof (Full Width) */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 z-0">
              <img 
                 src="https://images.unsplash.com/photo-1518114408369-023a9d700868?q=80&w=2000&auto=format&fit=crop"
                 alt="Waterproof"
                 className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
           </div>
           
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                 <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1 mb-6">
                    <Droplets className="w-3 h-3 text-blue-400" />
                    <span className="text-xs font-bold text-blue-400 uppercase">IP68 Rated</span>
                 </div>
                 <h2 className="text-5xl font-bold mb-6">无惧风雨，<br/>坚韧如磐。</h2>
                 <p className="text-xl text-gray-300 mb-8">
                    专为户外极端环境设计。无论是突如其中来的暴雨，还是溪边的水花，
                    IP68 级防尘防水能力让您无需担忧。ETFE 表面涂层更可抵御冰雹冲击。
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                       <div className="text-2xl font-bold text-white mb-1">ETFE</div>
                       <div className="text-xs text-gray-400">高透光耐磨膜</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                       <div className="text-2xl font-bold text-white mb-1">IP68</div>
                       <div className="text-xs text-gray-400">防尘防水等级</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature 3: Portable / Kickstand */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2">
                 <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 group">
                    <img 
                      src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1000&auto=format&fit=crop" 
                      alt="Kickstand Case" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                 <div className="w-12 h-12 bg-surface-800 rounded-2xl flex items-center justify-center mb-4">
                    <Maximize className="w-6 h-6 text-lumina-400" />
                 </div>
                 <h2 className="text-4xl font-bold">自带支架，<br/>角度随心调节。</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    保护包即是支架。独特的折叠设计允许您在 40° 至 90° 之间自由调节角度，
                    时刻对准太阳，获取最大发电量。
                 </p>
                 <div className="bg-surface-900 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-gray-400 text-sm">折叠尺寸</span>
                       <span className="text-white font-bold">105.8 × 62.0 × 2.5 cm</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                       <div className="bg-lumina-500 w-1/3 h-full"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">折叠后仅为展开面积的 25%，轻松放入后备箱。</p>
                 </div>
              </div>
           </div>
        </section>
      </div>

      {/* 4. Specs Table */}
      <section id="specs" className="py-24 bg-surface-900 border-t border-white/5">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">技术规格</h2>
               <div className="h-1 w-20 bg-lumina-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">额定功率</span>
                  <span className="text-white font-medium">400W (±5W)</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">开路电压 (Voc)</span>
                  <span className="text-white font-medium">48V (Vmp 41V)</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">短路电流 (Isc)</span>
                  <span className="text-white font-medium">11A (Imp 9.8A)</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">电池效率</span>
                  <span className="text-white font-medium">22.6%</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">电池类型</span>
                  <span className="text-white font-medium">单晶硅 (N-Type)</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">连接器类型</span>
                  <span className="text-white font-medium">MC4 通用接口</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">重量 (含支架包)</span>
                  <span className="text-white font-medium">16.0 kg</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">防水等级</span>
                  <span className="text-white font-medium">IP68</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">展开尺寸</span>
                  <span className="text-white font-medium">236.5 × 105.8 × 2.5 cm</span>
               </div>
               <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">工作温度</span>
                  <span className="text-white font-medium">-20°C 至 85°C</span>
               </div>
            </div>
         </div>
      </section>

      {/* 5. What's in the Box */}
      <section id="box" className="py-24 bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-16">包装清单</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { name: "400W 太阳能板", img: "https://cdn-icons-png.flaticon.com/512/3222/3222805.png" },
                 { name: "支架保护包", img: "https://cdn-icons-png.flaticon.com/512/862/862819.png" },
                 { name: "MC4 转 XT60 线缆", img: "https://cdn-icons-png.flaticon.com/512/2879/2879685.png" },
                 { name: "用户手册 & 保修卡", img: "https://cdn-icons-png.flaticon.com/512/265/265674.png" }
               ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <div className="w-32 h-32 bg-surface-900 rounded-full flex items-center justify-center mb-4 border border-white/5 p-6 group hover:border-lumina-500 transition-colors">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain invert opacity-70 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-gray-300 font-medium">{item.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-surface-900 border-t border-white/10">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
               <h3 className="text-2xl font-bold text-white">准备好开启旅程了吗？</h3>
               <p className="text-gray-400">立即购买，享受 3 年官方质保。</p>
            </div>
            <div className="flex space-x-4">
               <Button size="lg" className="px-12 rounded-full">立即购买 ¥ 4,999起</Button>
            </div>
         </div>
      </section>
    </div>
  );
};