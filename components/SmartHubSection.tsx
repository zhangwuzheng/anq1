import React from 'react';
import { Cpu, Zap, ShieldCheck, Share2, Activity, Thermometer, BarChart3, Database } from 'lucide-react';

export const SmartHubSection: React.FC = () => {
  return (
    <div className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/2 h-full bg-blue-900/5 blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content - Width 40% */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-blue-500/10 text-xs font-medium text-blue-400 mb-6 border border-blue-500/20">
              <Database className="w-3 h-3 mr-2" />
              <span>能源互联核心</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              安宸·核心中枢 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">SiC 碳化硅动力引擎</span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              AGP-SmartHub Pro 并非简单的逆变器。它是整个离网系统的“大脑”，采用第三代半导体 SiC (碳化硅) 技术，将能源调度精准度提升至微秒级。
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-colors duration-300">
                   <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">99.4% 转换效率</h3>
                  <p className="text-sm text-gray-400">
                    得益于 SiC 功率器件极低的导通损耗，大幅降低系统发热，实现极致的能源转化。
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-lumina-400/50 group-hover:bg-lumina-400/10 transition-colors duration-300">
                   <ShieldCheck className="w-5 h-5 text-lumina-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-lumina-400 transition-colors">四重安全隔离</h3>
                  <p className="text-sm text-gray-400">
                    物理层到应用层的四级隔离保护，确保在雷击、浪涌等极端工况下的系统安全。
                  </p>
                </div>
              </div>

               {/* Feature 3 */}
               <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-surface-800 rounded-lg border border-white/10 flex items-center justify-center mr-4 group-hover:border-purple-400/50 group-hover:bg-purple-400/10 transition-colors duration-300">
                   <Share2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">VPP 虚拟电厂接入</h3>
                  <p className="text-sm text-gray-400">
                    内置高速网关，支持接入分布式微电网调度，助力区域性能源削峰填谷。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content (Video) - Width 60% */}
           <div className="lg:w-3/5 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group w-full aspect-video bg-surface-900">
                <video 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="https://images.unsplash.com/photo-1555664424-778a18a21c60?q=80&w=1000&auto=format&fit=crop"
                >
                  <source src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/kzzs_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors pointer-events-none"></div>
                
                {/* Tech HUD Overlay */}
                <div className="absolute top-8 left-8 z-20">
                   <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                      <span className="text-[10px] font-mono text-blue-400">CORE-LINK BUS ACTIVE</span>
                   </div>
                </div>
             </div>

             {/* Smart Dashboard */}
             <div className="mt-4 bg-surface-900 border border-white/10 p-4 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full"></div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5 relative z-10">
                   <div className="flex items-center space-x-2">
                     <Activity className="w-4 h-4 text-blue-400" />
                     <div>
                       <div className="text-[10px] text-blue-400 font-bold uppercase leading-none">SmartHub-OS v4.2</div>
                       <div className="text-white font-bold text-sm leading-none mt-1">中枢运行状态</div>
                     </div>
                   </div>
                   <div className="text-[10px] font-mono text-gray-500">Uptime: 1248h 12m</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 relative z-10">
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-white/5 group hover:border-blue-500/30 transition-colors">
                     <BarChart3 className="w-4 h-4 text-blue-400 mx-auto mb-2" />
                     <div className="text-[10px] text-gray-400 mb-0.5">整机效率</div>
                     <div className="text-white font-mono font-bold text-sm">99.4 <span className="text-[10px] text-gray-500 font-normal">%</span></div>
                   </div>
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-lumina-500/30 group">
                     <Thermometer className="w-4 h-4 text-lumina-400 mx-auto mb-2" />
                     <div className="text-[10px] text-lumina-400 mb-0.5">SiC 模块温度</div>
                     <div className="text-white font-mono font-bold text-sm">42.5 <span className="text-[10px] text-gray-500 font-normal">°C</span></div>
                   </div>
                   <div className="bg-black/40 p-3 rounded-xl text-center border border-white/5 group hover:border-purple-400/30 transition-colors">
                     <Cpu className="w-4 h-4 text-purple-400 mx-auto mb-2" />
                     <div className="text-[10px] text-gray-400 mb-0.5">CPU 负载</div>
                     <div className="text-white font-mono font-bold text-sm">12.4 <span className="text-[10px] text-gray-500 font-normal">%</span></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};