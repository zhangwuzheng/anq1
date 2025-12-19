import React from 'react';
import { Sun, Wind, Shield, Compass, RotateCw, Activity } from 'lucide-react';

export const FoldingStandSection: React.FC = () => {
  return (
    <div className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-lumina-900/5 blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Visual Content (Video) - Width 60% */}
           <div className="lg:w-3/5 relative order-2 lg:order-1 w-full">
             {/* Aspect Video enforces 16:9 ratio to match 720p video */}
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group w-full aspect-video bg-surface-900">
                <video 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000&auto=format&fit=crop"
                >
                  <source src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/gfzj-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Subtle gradient for depth, but no content on top anymore */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
             </div>

             {/* Smart Dashboard - Placed BELOW the video */}
             <div className="mt-4 bg-surface-900 border border-white/10 p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                   <div className="flex items-center space-x-2">
                     <Activity className="w-4 h-4 text-lumina-400" />
                     <div>
                       <div className="text-[10px] text-lumina-400 font-bold uppercase leading-none">AGP-Tracker OS</div>
                       <div className="text-white font-bold text-sm leading-none mt-1">实时监控数据</div>
                     </div>
                   </div>
                   <div className="flex items-center space-x-1.5 bg-surface-800 px-2 py-1 rounded-full border border-white/5">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                     <span className="text-[10px] text-green-500 font-medium">运行正常</span>
                   </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-white/5 group hover:border-yellow-500/30 transition-colors">
                     <Sun className="w-4 h-4 text-yellow-400 mx-auto mb-2" />
                     <div className="text-[10px] text-gray-400 mb-0.5">光照强度</div>
                     <div className="text-white font-mono font-bold text-sm">980 <span className="text-[10px] text-gray-500 font-normal">W/m²</span></div>
                   </div>
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-lumina-500/30 group relative overflow-hidden">
                     <div className="absolute inset-0 bg-lumina-500/5 animate-pulse"></div>
                     <Compass className="w-4 h-4 text-lumina-400 mx-auto mb-2 animate-spin-slow relative z-10" />
                     <div className="text-[10px] text-lumina-400 mb-0.5 relative z-10">追踪角度</div>
                     <div className="text-white font-mono font-bold text-sm relative z-10">Az: 145°</div>
                   </div>
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-white/5 group hover:border-blue-400/30 transition-colors">
                     <Wind className="w-4 h-4 text-blue-400 mx-auto mb-2" />
                     <div className="text-[10px] text-gray-400 mb-0.5">当前风速</div>
                     <div className="text-white font-mono font-bold text-sm">4.2 <span className="text-[10px] text-gray-500 font-normal">m/s</span></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Text Content - Width 40% */}
          <div className="lg:w-2/5 order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-lumina-500/10 text-xs font-medium text-lumina-400 mb-6 border border-lumina-500/20">
              <RotateCw className="w-3 h-3 mr-2" />
              <span>智能配件系统</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              智随光动 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 to-white">无惧风暴</span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              AGP SmartTrack 智能折叠支架。
              不仅仅是支撑，更是能源获取的倍增器与安全屏障。内置陀螺仪与风速传感器，实现毫秒级响应。
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-colors duration-300">
                   <Sun className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">GPS + 光感双模追踪</h3>
                  <p className="text-sm text-gray-400">
                    结合经纬度算法与实时光感修正，自动调节面板仰角与方位角。
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-colors duration-300">
                   <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">7级大风 自动放平</h3>
                  <p className="text-sm text-gray-400">
                    当风速传感器监测到风力超过 13.9m/s (7级) 时，系统立即启动
                    <span className="text-white font-medium">「避风模式」</span>。
                  </p>
                </div>
              </div>

               {/* Feature 3 */}
               <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-lumina-400/50 group-hover:bg-lumina-400/10 transition-colors duration-300">
                   <RotateCw className="w-5 h-5 text-lumina-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-lumina-400 transition-colors">一键折叠 便携收纳</h3>
                  <p className="text-sm text-gray-400">
                    专为移动场景设计。采用航空级铝合金材质，机械结构可完全折叠。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};