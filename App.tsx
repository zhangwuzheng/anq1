import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Calculator } from './components/Calculator';
import { DetailedSpecs } from './components/DetailedSpecs';
import { FoldingStandSection } from './components/FoldingStandSection';
import { SmartHubSection } from './components/SmartHubSection';
import { SystemAssembly } from './components/SystemAssembly';
import { ChartSection } from './components/ChartSection';
import { ContactSection } from './components/ContactSection';
import { SystemTopology } from './components/SystemTopology';
import { AppDownload } from './components/AppDownload';
import { ApplicationScenarios } from './components/ApplicationScenarios';
import { PartnerMarquee } from './components/PartnerMarquee';
import { PRODUCTS, HERO_IMAGE } from './constants';
import { ArrowRight, Home, Factory, Backpack, ChevronRight, Star, Timer, Box, Layers, MapPin, Mountain, Thermometer, Sun, Wind, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import { Product } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductRecommendation = (productId: string) => {
    setSelectedCategory('residential');
    // Allow state to update and DOM to render
    setTimeout(() => {
      const element = document.getElementById(productId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Visual cue
        element.classList.add('ring-4', 'ring-lumina-500');
        setTimeout(() => element.classList.remove('ring-4', 'ring-lumina-500'), 1500);
      }
    }, 100);
  };

  const renderProductCard = (product: Product) => {
    const isComingSoon = product.status === 'coming_soon';
    return (
      <div id={product.id} key={product.id} className={`flex flex-col h-full bg-surface-800/50 border rounded-3xl overflow-hidden transition-all duration-500 group relative ${isComingSoon ? 'border-white/5 opacity-80' : 'border-white/5 hover:border-lumina-500/30'}`}>
         {/* Coming Soon Overlay */}
         {isComingSoon && (
           <div className="absolute inset-0 bg-black/40 z-20 backdrop-grayscale flex items-center justify-center pointer-events-none">
           </div>
         )}

         {/* Image Section */}
         <div className="relative h-48 w-full overflow-hidden">
            <img src={product.image} alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isComingSoon ? 'grayscale' : 'group-hover:scale-105'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-80"></div>
         </div>

         {/* Content Section */}
         <div className="p-5 flex flex-col flex-1 -mt-8 relative z-10">
            <div className="flex items-center space-x-2 mb-2">
               <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${isComingSoon ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-lumina-500/10 border-lumina-500/20 text-lumina-400'}`}>
                  {product.subSeries.split(' ')[0]}
               </span>
               {product.id === 'chen-10' && <span className="flex items-center text-[10px] text-yellow-500"><Star className="w-2.5 h-2.5 mr-1 fill-current" /> 主推</span>}
               {isComingSoon && <span className="flex items-center text-[10px] text-gray-400"><Timer className="w-2.5 h-2.5 mr-1" /> 2026 Q4</span>}
            </div>
            
            <h3 className={`text-xl font-bold mb-1 ${isComingSoon ? 'text-gray-400' : 'text-white'}`}>{product.name}</h3>
            <p className="text-xs text-gray-400 font-medium mb-3">{product.tagline}</p>
            <p className="text-gray-300 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{product.description}</p>

            {/* Features Compact Grid */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
               {product.features.map((feature, i) => (
                  <div key={i} className="bg-surface-900/80 backdrop-blur-sm rounded-lg p-1.5 border border-white/5 text-center">
                     <div className="text-[9px] text-gray-500 mb-0.5 scale-90">{feature.label}</div>
                     <div className={`text-[10px] font-bold ${isComingSoon ? 'text-gray-400' : 'text-white'}`}>{feature.value}</div>
                  </div>
               ))}
            </div>

            {/* BOM Section (Component List) */}
            {product.bom && product.bom.length > 0 && (
              <div className="mb-4 bg-surface-900/40 rounded-xl p-3 border border-white/5">
                 <div className="flex items-center space-x-1.5 mb-2">
                    <Layers className="w-3 h-3 text-lumina-500/70" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">组件配置</span>
                 </div>
                 <ul className="space-y-1">
                   {product.bom.map((item, idx) => (
                     <li key={idx} className="text-[10px] text-gray-300 flex items-start leading-tight">
                        <span className="mr-1.5 opacity-50">•</span>
                        {item}
                     </li>
                   ))}
                 </ul>
              </div>
            )}

            <div className="mt-auto">
               <Button 
                 size="sm" 
                 onClick={scrollToContact} 
                 className={`w-full text-xs py-2 h-9 ${isComingSoon ? 'opacity-50 cursor-not-allowed bg-surface-800 text-gray-500 hover:bg-surface-800 hover:text-gray-500 border border-white/5' : ''}`}
                 disabled={isComingSoon}
               >
                 {isComingSoon ? '敬请期待' : '立即咨询方案'}
               </Button>
            </div>
         </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black selection:bg-lumina-500 selection:text-white font-sans">
      <Navbar 
        activeCategory={selectedCategory} 
        onCategorySelect={handleCategoryClick} 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Off grid solar setup" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-lumina-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-white">新品发布：安宸·核心中枢</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            能源无界 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 to-white">自在随心</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            安宸家用 · 擎岳工商业 · 随驭便携<br/>
            AnchorGreen 为您提供全场景离网能源解决方案，让电力如影随形。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => {
              setSelectedCategory('all');
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}>探索产品系列</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToContact}>立即咨询</Button>
          </div>
        </div>
      </section>

      {/* Partner Marquee Section */}
      <PartnerMarquee />

      {/* Product Matrix Section */}
      <section id="products" className="py-24 bg-surface-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' && "全场景能源矩阵"}
              {selectedCategory === 'residential' && "安宸系列 - 家用离网"}
              {selectedCategory === 'commercial' && "擎岳系列 - 工商业基石"}
              {selectedCategory === 'portable' && "随驭系列 - 移动便携"}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              {selectedCategory === 'all' && "从家庭庇护到商业基石，再到移动自由。AnchorGreen 三大系列重新定义离网生活。"}
              {selectedCategory === 'residential' && "定位家庭能源核心，象征安稳与庇护。包含「宸」核心中枢与「煦」未来储能。"}
              {selectedCategory === 'commercial' && "定位工商业动力基石，象征可靠与担当。「磐」系列专为极端环境设计。"}
              {selectedCategory === 'portable' && "定位移动能源伴侣，象征自由与掌控。「随」系列让电力如影随形。"}
            </p>
            {selectedCategory !== 'all' && (
               <button 
                 onClick={() => setSelectedCategory('all')}
                 className="inline-flex items-center text-sm text-lumina-400 hover:text-white transition-colors border-b border-lumina-400/30 hover:border-white pb-0.5"
               >
                 ← 返回全系列概览
               </button>
            )}
          </div>

          {selectedCategory === 'all' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div 
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-lumina-500 transition-all duration-500"
                onClick={() => handleCategoryClick('residential')}
              >
                <img src="https://img.lenyiin.com/app/hide.php?key=STIrZ05XUjRmSnJ3UWtoZ3dJUXBxTFFvY0ZZOFVZK1VGcWl0bGw0PQ==" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center space-x-2 mb-3">
                    <Home className="text-lumina-400 w-6 h-6" />
                    <span className="text-lumina-400 font-bold uppercase tracking-wider">安宸系列</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-lumina-200 transition-colors">家用离网系统</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">宸 (Chen) 中枢</span>
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">煦 (Xu) 未来</span>
                  </div>
                  <p className="text-gray-300 mb-6">为别墅、偏远住宅提供独立、稳定的电力保障。静音运行，融入家居。</p>
                  <span className="inline-flex items-center text-white font-medium group-hover:underline">探索安宸系列 <ArrowRight className="ml-2 w-4 h-4" /></span>
                </div>
              </div>

              <div 
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-lumina-500 transition-all duration-500"
                onClick={() => handleCategoryClick('commercial')}
              >
                <img src="https://img.lenyiin.com/app/hide.php?key=NXdlUzliQlY1N0JtUnkvQTRLemlmYlFvY0ZZOFVZK1VGcWl0bGw0PQ==" alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center space-x-2 mb-3">
                    <Factory className="text-lumina-400 w-6 h-6" />
                    <span className="text-lumina-400 font-bold uppercase tracking-wider">擎岳系列</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-lumina-200 transition-colors">工商业基石</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">磐 (Pan) 工商业柜</span>
                  </div>
                  <p className="text-gray-300 mb-6">专为矿区、基站、工厂设计的重型离网电源。支持三相负载，坚若磐石。</p>
                  <span className="inline-flex items-center text-white font-medium group-hover:underline">敬请期待 <ArrowRight className="ml-2 w-4 h-4" /></span>
                </div>
              </div>

              <div 
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-lumina-500 transition-all duration-500"
                onClick={() => handleCategoryClick('portable')}
              >
                <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop" alt="Portable" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center space-x-2 mb-3">
                    <Backpack className="text-lumina-400 w-6 h-6" />
                    <span className="text-lumina-400 font-bold uppercase tracking-wider">随驭系列</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-lumina-200 transition-colors">移动便携电源</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">随 (Sui) 行者套件</span>
                  </div>
                  <p className="text-gray-300 mb-6">折叠便携，即拿即走。让露营、科考、移动作业不再受断电困扰。</p>
                  <span className="inline-flex items-center text-white font-medium group-hover:underline">敬请期待 <ArrowRight className="ml-2 w-4 h-4" /></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
               {selectedCategory === 'residential' ? (
                  /* Residential Layout - Grouped by Series */
                  <div className="max-w-7xl mx-auto flex flex-col gap-16">
                     {/* Chen Series Row */}
                     <div>
                        <div className="flex items-end space-x-4 mb-8 border-b border-white/10 pb-4">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-lumina-500/10 rounded-lg border border-lumina-500/20">
                                <Home className="w-6 h-6 text-lumina-400" />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-bold text-white leading-none">宸 (Chen) 系列</h3>
                                 <p className="text-xs text-lumina-400 mt-1 uppercase tracking-widest font-bold">Core Off-Grid Systems</p>
                              </div>
                           </div>
                           <p className="hidden md:block text-sm text-gray-500 pb-1">/ 专为家庭设计的高性能离网中枢，灵活适配不同户型需求。</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {PRODUCTS.filter(p => p.id.startsWith('chen')).map(product => renderProductCard(product))}
                        </div>
                     </div>

                     {/* Xu Series Row */}
                     <div>
                        <div className="flex items-end space-x-4 mb-8 border-b border-white/5 pb-4 opacity-70">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-surface-800 rounded-lg border border-white/10">
                                <Timer className="w-6 h-6 text-gray-400" />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-bold text-gray-300 leading-none">煦 (Xu) 系列</h3>
                                 <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Future Concepts</p>
                              </div>
                           </div>
                           <p className="hidden md:block text-sm text-gray-600 pb-1">/ 探索下一代光热电一体化技术，重新定义能源利用率。</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {PRODUCTS.filter(p => p.id.startsWith('xu')).map(product => renderProductCard(product))}
                           {/* Empty slots for grid balance if needed */}
                           <div className="hidden md:block md:col-span-2 border border-white/5 rounded-3xl bg-surface-800/20 border-dashed flex items-center justify-center">
                              <span className="text-gray-700 text-sm">更多未来概念 研发中...</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  /* Coming Soon Section for Commercial and Portable */
                  <div className="flex flex-col items-center justify-center py-24 text-center border border-white/5 rounded-[2.5rem] bg-surface-800/20 backdrop-blur-sm">
                     <div className="w-24 h-24 bg-surface-800 rounded-full flex items-center justify-center mb-8 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-lumina-500/10 blur-xl group-hover:bg-lumina-500/20 transition-colors"></div>
                        <Timer className="w-10 h-10 text-lumina-400 relative z-10" />
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-4">敬请期待</h3>
                     <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-8">
                        {selectedCategory === 'commercial' && "擎岳系列工商业储能正在进行最终的极端环境耐久测试。"}
                        {selectedCategory === 'portable' && "随驭系列移动电源正在接受严苛的高原实地验证。"}
                        <br/>
                        我们坚持只有通过地狱级考验的产品，才有资格交付给您。
                     </p>
                     <Button variant="outline" onClick={() => setSelectedCategory('all')}>返回全系列概览</Button>
                  </div>
               )}
            </div>
          )}
        </div>
      </section>

      {/* Application Scenarios Section */}
      <section id="scenarios" className="border-y border-white/5">
         <ApplicationScenarios />
      </section>
      
      {/* Detailed Specs Section */}
      <section id="detailed-specs" className="py-24 bg-black">
         <DetailedSpecs />
      </section>

      {/* Smart Ecosystem Chapter */}
      <section className="bg-black">
        <FoldingStandSection />
        <SmartHubSection />
        <SystemAssembly />
      </section>

      {/* Case Study Section (Visual Redesign) */}
      <section id="case-study" className="relative py-24 bg-surface-900 overflow-hidden border-t border-white/5">
         {/* Immersive Background */}
         <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1517316399109-0d32c589b276?q=80&w=2000&auto=format&fit=crop" 
               alt="Tibet Mountains" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
         </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: The Challenge (Visualized Environment) */}
            <div className="lg:w-1/2">
               <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="text-lumina-400 w-5 h-5" />
                  <span className="text-xs font-bold text-lumina-400 uppercase tracking-widest bg-lumina-500/10 px-3 py-1 rounded-full border border-lumina-500/20">
                     客户案例：西藏那曲 (Nagqu)
                  </span>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">极端环境 <br/> 能源挑战</h2>
               <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  那曲地区平均海拔 4500 米以上，年平均气温 -2°C，极端低温达 -40°C。这里氧气稀薄，风力强劲，对储能设备的低温性能和结构强度提出了极致考验。
               </p>

               {/* Environment Visual Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                        <Mountain className="w-4 h-4 text-blue-400" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold text-white">4500<span className="text-sm font-normal text-gray-400">m+</span></div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">极高海拔部署</div>
                     </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mb-3">
                        <Thermometer className="w-4 h-4 text-cyan-400" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold text-white">-30<span className="text-sm font-normal text-gray-400">°C</span></div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">冬季常用低温</div>
                     </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mb-3">
                        <Sun className="w-4 h-4 text-orange-400" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold text-white">2800<span className="text-sm font-normal text-gray-400">h+</span></div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">超长年日照</div>
                     </div>
                  </div>

                   <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                     <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center mb-3">
                        <Wind className="w-4 h-4 text-gray-400" />
                     </div>
                     <div>
                        <div className="text-2xl font-bold text-white">10<span className="text-sm font-normal text-gray-400">级</span></div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">抗大风测试</div>
                     </div>
                  </div>
               </div>

               <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black">下载实地测试白皮书 (PDF)</Button>
            </div>

            {/* Right: The Solution (Data Visualization) */}
            <div className="lg:w-1/2 flex flex-col">
               <div className="bg-surface-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                 <div className="flex items-center justify-between mb-6">
                    <div>
                       <h3 className="text-lg font-bold text-white flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          系统运行数据
                       </h3>
                       <p className="text-xs text-gray-500 mt-1">数据来源：AGP Cloud 实时监控</p>
                    </div>
                    <div className="flex items-center space-x-2">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                       <span className="text-xs text-green-500 font-bold">LIVE</span>
                    </div>
                 </div>
                 
                 {/* Main Chart */}
                 <div className="h-[300px] w-full mb-8">
                    <ChartSection />
                 </div>

                 {/* KPI Stats Row */}
                 <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    <div className="text-center">
                       <div className="text-xs text-gray-500 mb-1 flex items-center justify-center"><TrendingUp className="w-3 h-3 mr-1" /> 发电效率</div>
                       <div className="text-xl md:text-2xl font-bold text-white">110%</div>
                       <div className="text-[10px] text-green-400">低温增益显著</div>
                    </div>
                    <div className="text-center border-l border-white/10">
                       <div className="text-xs text-gray-500 mb-1 flex items-center justify-center"><CheckCircle className="w-3 h-3 mr-1" /> 运行稳定性</div>
                       <div className="text-xl md:text-2xl font-bold text-white">0 <span className="text-sm font-normal text-gray-500">故障</span></div>
                       <div className="text-[10px] text-gray-500">连续运行 365 天</div>
                    </div>
                    <div className="text-center border-l border-white/10">
                       <div className="text-xs text-gray-500 mb-1 flex items-center justify-center"><DollarSign className="w-3 h-3 mr-1" /> 燃油替代</div>
                       <div className="text-xl md:text-2xl font-bold text-white">¥ 68k</div>
                       <div className="text-[10px] text-lumina-400">年节省成本</div>
                    </div>
                 </div>

               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Download Section */}
      <section className="py-24 bg-surface-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <AppDownload />
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">定制您的离网系统</h2>
            <p className="text-gray-400 mt-2">输入您的常用电器，我们将为您估算所需的安宸或随驭系列配置。</p>
          </div>
          <div className="mb-12"><SystemTopology /></div>
          <Calculator onRecommend={handleProductRecommendation} />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-surface-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
               <span className="text-2xl font-bold text-white">AnchorGreen<span className="text-lumina-500">.</span></span>
               <p className="text-gray-500 mt-4 max-w-sm">以可靠、便携的离网能源解决方案赋能探索。灵感源自高原的坚韧，服务于您的每一次出发。</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">产品中心</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => handleCategoryClick('residential')} className="hover:text-lumina-400">安宸系列 (家用)</button></li>
                <li><button onClick={() => handleCategoryClick('commercial')} className="hover:text-lumina-400">擎岳系列 (工商业)</button></li>
                <li><button onClick={() => handleCategoryClick('portable')} className="hover:text-lumina-400">随驭系列 (便携)</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">服务支持</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-lumina-400">系统选型指南</a></li>
                <li><a href="#" className="hover:text-lumina-400">安装手册下载</a></li>
                <li><a href="#" className="hover:text-lumina-400">保修政策</a></li>
                <li><button onClick={scrollToContact} className="hover:text-lumina-400">联系我们</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 安擎新能源. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;