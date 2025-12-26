import React from 'react';
import { Globe, BarChart3, Database, Lock, Server, ArrowUpRight, PieChart, Map as MapIcon, Zap } from 'lucide-react';

export const CloudDataSection: React.FC = () => {
  return (
    <div className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Data Flow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-lumina-500 to-transparent opacity-50"></div>
         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Visualization (The Big Screen Dashboard) */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-surface-900 rounded-3xl border border-white/10 p-2 shadow-2xl relative group overflow-hidden">
               {/* Screen Bezel */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/10 rounded-b-lg z-20"></div>
               
               {/* Dashboard UI Container */}
               <div className="bg-[#0b0c15] rounded-2xl p-6 aspect-[16/9] relative overflow-hidden flex flex-col">
                  {/* Map Background */}
                  <div className="absolute inset-0 opacity-30">
                     <svg className="w-full h-full" viewBox="0 0 800 450" fill="none">
                        <path d="M100,200 Q250,100 400,225 T700,200" stroke="#334155" strokeWidth="2" fill="none"/>
                        <path d="M50,300 Q200,350 350,280 T650,320" stroke="#334155" strokeWidth="2" fill="none"/>
                        {/* Data Points (Glowing Dots) */}
                        <circle cx="200" cy="180" r="3" fill="#14b8a6" className="animate-pulse" />
                        <circle cx="450" cy="220" r="4" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                        <circle cx="600" cy="150" r="2" fill="#eab308" className="animate-pulse" style={{animationDelay: '1s'}} />
                        <circle cx="300" cy="320" r="3" fill="#14b8a6" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                        <circle cx="550" cy="300" r="3" fill="#14b8a6" className="animate-pulse" style={{animationDelay: '0.7s'}} />
                     </svg>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center mb-6 relative z-10 border-b border-white/10 pb-2">
                     <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-100 tracking-wider">AGP CLOUD · 高原能源数字驾驶舱</span>
                     </div>
                     <div className="flex items-center space-x-3 text-[9px] font-mono text-gray-400">
                        <span className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div> LIVE DATA</span>
                        <span>REGION: TIBET-NAQU</span>
                     </div>
                  </div>

                  {/* Main Metrics Area */}
                  <div className="grid grid-cols-3 gap-4 flex-1 relative z-10">
                     
                     {/* Metric 1: Total Generation */}
                     <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                           <Zap className="w-4 h-4 text-yellow-400" />
                           <span className="text-[9px] text-gray-500">+12% YoY</span>
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-white font-mono">2.4<span className="text-sm text-gray-400">GWh</span></div>
                           <div className="text-[10px] text-gray-400">累计清洁发电量</div>
                        </div>
                        <div className="h-1 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
                           <div className="h-full bg-yellow-400 w-3/4"></div>
                        </div>
                     </div>

                     {/* Metric 2: Carbon Reduction */}
                     <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                         <div className="flex items-start justify-between">
                           <MapIcon className="w-4 h-4 text-green-400" />
                           <span className="text-[9px] text-gray-500">Government View</span>
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-white font-mono">8,920<span className="text-sm text-gray-400">t</span></div>
                           <div className="text-[10px] text-gray-400">碳减排贡献 (CO₂)</div>
                        </div>
                        <div className="h-1 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
                           <div className="h-full bg-green-400 w-2/3"></div>
                        </div>
                     </div>

                     {/* Metric 3: Device Health */}
                     <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                         <div className="flex items-start justify-between">
                           <Server className="w-4 h-4 text-blue-400" />
                           <span className="text-[9px] text-gray-500">System Health</span>
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-white font-mono">99.9<span className="text-sm text-gray-400">%</span></div>
                           <div className="text-[10px] text-gray-400">设备在线率</div>
                        </div>
                        <div className="h-1 w-full bg-gray-700 rounded-full mt-2 overflow-hidden">
                           <div className="h-full bg-blue-400 w-[99%]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Bottom Console Area */}
                  <div className="mt-4 grid grid-cols-2 gap-4 relative z-10">
                      {/* Log Stream */}
                      <div className="bg-black/40 rounded-lg p-2 border border-white/5 font-mono text-[8px] text-gray-500 leading-tight">
                         <div className="text-blue-400 mb-1">>> SYSTEM LOGS</div>
                         <div className="opacity-80">[10:42:01] Node #4281 connected.</div>
                         <div className="opacity-80">[10:42:03] Uploading BMS telemetry...</div>
                         <div className="opacity-80 text-yellow-500">[10:42:05] Optimizing MPPT curve.</div>
                         <div className="opacity-80">[10:42:08] Firmware v4.5 OTA queued.</div>
                      </div>
                      
                      {/* Alert Box */}
                      <div className="bg-lumina-900/10 rounded-lg p-2 border border-lumina-500/20 flex items-center justify-center flex-col text-center">
                         <div className="w-2 h-2 bg-lumina-500 rounded-full animate-ping mb-2"></div>
                         <div className="text-[10px] text-lumina-400 font-bold">AI 预测引擎运行中</div>
                         <div className="text-[8px] text-gray-500">正在分析那曲地区未来 24h 发电潜力</div>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-purple-500/10 text-xs font-medium text-purple-400 mb-6 border border-purple-500/20">
              <Database className="w-3 h-3 mr-2" />
              <span>AGP Cloud Intelligence</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              数据驱动决策 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">连接孤岛，洞见未来</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               通过 SmartHub 内置的 IoT 模组，我们将散落在高原、海岛的数千个离网节点连接成一张“能源互联网”。
               数据不仅服务于用户，更为政府监管与系统迭代提供核心支撑。
            </p>

            <div className="space-y-8">
               {/* Use Case 1: Government */}
               <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-800 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
                     <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors flex items-center">
                        政府监管驾驶舱
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-50" />
                     </h3>
                     <p className="text-sm text-gray-400">
                        为发改委、能源局提供可视化大屏接口。实时监控区域碳减排数据、设备在线率及民生电力保障情况，辅助政策制定与补贴核算。
                     </p>
                  </div>
               </div>

               {/* Use Case 2: Manufacturer Optimization */}
               <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-800 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-lumina-500/10 group-hover:border-lumina-500/50 transition-all">
                     <PieChart className="w-6 h-6 text-lumina-400" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-white mb-1 group-hover:text-lumina-400 transition-colors">
                        系统闭环优化 (R&D)
                     </h3>
                     <p className="text-sm text-gray-400">
                        收集极端环境下的电池充放电曲线与 MPPT 追踪效率。通过大数据训练 AI 模型，定期向用户推送 OTA 固件升级，让设备越用越聪明。
                     </p>
                  </div>
               </div>

               {/* Security Badge */}
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <Lock className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-gray-400">数据经 AES-256 加密传输，严格遵守本地数据合规政策。</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
