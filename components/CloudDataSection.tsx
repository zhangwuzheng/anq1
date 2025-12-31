import React from 'react';
import { Globe, BarChart3, Database, Lock, ArrowUpRight, PieChart, Map as MapIcon, Zap, CloudSun, Wind, AlertCircle, CheckCircle2 } from 'lucide-react';

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
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left: Visualization (The Big Screen Dashboard) */}
          <div className="lg:w-3/5 w-full flex flex-col">
            <div className="bg-surface-900 rounded-3xl border border-white/10 p-2 shadow-2xl relative group overflow-hidden h-full min-h-[500px]">
               {/* Screen Bezel */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/10 rounded-b-lg z-20"></div>
               
               {/* Dashboard UI Container */}
               <div className="bg-[#0b0c15] rounded-2xl p-4 md:p-6 h-full relative overflow-hidden flex flex-col font-mono">
                  
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2 relative z-20">
                     <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] md:text-xs font-bold text-blue-100 tracking-wider">AGP CLOUD · 高原能源数字驾驶舱</span>
                     </div>
                     <div className="flex items-center space-x-3 text-[9px] text-gray-400">
                        <span className="flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div> 实时在线</span>
                        <span>西藏那曲·一号示范区</span>
                     </div>
                  </div>

                  {/* Main Dashboard Body */}
                  <div className="flex flex-col md:flex-row flex-1 gap-4 overflow-hidden relative z-10">
                      
                      {/* Left: Regional Map Zone (65%) */}
                      <div className="flex-[2] bg-surface-800/30 rounded-xl border border-white/5 relative overflow-hidden group/map min-h-[250px] md:min-h-0">
                          
                          {/* Map Overlay Info */}
                          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
                               <div className="bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10 text-[9px] text-gray-400">
                                  纬度: 31.47° N
                               </div>
                               <div className="bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10 text-[9px] text-gray-400">
                                  经度: 92.05° E
                               </div>
                          </div>

                          {/* The SVG Map Visualization */}
                          <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
                              {/* Grid Pattern */}
                              <defs>
                                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                                  </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#grid)" />

                              {/* Terrain / Region Contour (Abstract) */}
                              <path 
                                d="M 50 250 Q 150 150 300 200 T 550 180" 
                                fill="none" 
                                stroke="rgba(255,255,255,0.1)" 
                                strokeWidth="1" 
                                strokeDasharray="4 4"
                              />
                              <path 
                                d="M 0 300 Q 200 250 400 320 T 600 280" 
                                fill="none" 
                                stroke="rgba(255,255,255,0.05)" 
                                strokeWidth="1" 
                              />
                              
                              {/* Active Zone Polygon */}
                              <path 
                                d="M 200 150 L 350 120 L 400 220 L 250 260 Z" 
                                fill="rgba(59, 130, 246, 0.05)" 
                                stroke="rgba(59, 130, 246, 0.3)" 
                                strokeWidth="1"
                                className="animate-pulse"
                              />
                              
                              {/* Network Nodes */}
                              <g className="node-group">
                                 {/* Central Hub */}
                                 <circle cx="300" cy="200" r="8" fill="#3b82f6" fillOpacity="0.8" />
                                 <circle cx="300" cy="200" r="25" fill="none" stroke="#3b82f6" strokeOpacity="0.3" className="animate-ping" style={{animationDuration: '3s'}} />
                                 <text x="320" y="205" fill="white" fontSize="10" fontWeight="bold">控制中心</text>

                                 {/* Remote Nodes & Connections */}
                                 {/* Node 1 */}
                                 <line x1="300" y1="200" x2="180" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                 <circle cx="180" cy="140" r="4" fill="#14b8a6" />
                                 <text x="160" y="130" fill="#aaa" fontSize="8">站点A (光伏)</text>

                                 {/* Node 2 */}
                                 <line x1="300" y1="200" x2="420" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                 <circle cx="420" cy="160" r="4" fill="#14b8a6" />
                                 <text x="430" y="155" fill="#aaa" fontSize="8">站点B (风电)</text>
                                 
                                 {/* Node 3 (Warning) */}
                                 <line x1="300" y1="200" x2="350" y2="300" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" />
                                 <circle cx="350" cy="300" r="4" fill="#eab308" className="animate-pulse" />
                                 <text x="360" y="305" fill="#eab308" fontSize="8">站点C (待检)</text>
                              </g>
                          </svg>

                          {/* Legend Overlay */}
                          <div className="absolute bottom-3 right-3 flex gap-2">
                               <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded text-[8px] text-gray-400 border border-white/5">
                                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 核心
                               </div>
                               <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded text-[8px] text-gray-400 border border-white/5">
                                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div> 正常
                               </div>
                               <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded text-[8px] text-gray-400 border border-white/5">
                                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> 告警
                               </div>
                          </div>
                      </div>

                      {/* Right: Metrics Sidebar (35%) */}
                      <div className="flex-1 flex flex-row md:flex-col gap-3 min-w-[140px]">
                           {/* Weather Widget */}
                           <div className="flex-1 bg-surface-800/30 p-3 rounded-xl border border-white/5 relative overflow-hidden">
                               <div className="absolute top-0 right-0 p-2 opacity-10">
                                   <CloudSun className="w-12 h-12 text-white" />
                               </div>
                               <div className="flex justify-between items-start mb-2 relative z-10">
                                   <span className="text-[9px] text-gray-500 uppercase font-bold">气象监测</span>
                                   <CloudSun className="w-4 h-4 text-yellow-100" />
                               </div>
                               <div className="text-xl md:text-2xl font-bold text-white relative z-10">-12°C</div>
                               <div className="flex items-center gap-1 text-[9px] text-gray-400 mt-1 relative z-10">
                                   <Wind className="w-3 h-3" /> 14.5 m/s 西北风
                               </div>
                           </div>

                           {/* Total Output */}
                           <div className="flex-1 bg-surface-800/30 p-3 rounded-xl border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                               <div className="absolute inset-0 bg-lumina-500/5 group-hover:bg-lumina-500/10 transition-colors"></div>
                               <div className="flex items-center justify-between mb-1">
                                  <span className="text-[9px] text-gray-500 uppercase font-bold">总发电功率</span>
                                  <Zap className="w-3 h-3 text-lumina-400" />
                               </div>
                               <div className="text-xl md:text-2xl font-bold text-lumina-400">4.2 MW</div>
                               <div className="h-1 bg-gray-700 rounded-full mt-2 w-full overflow-hidden">
                                   <div className="h-full bg-lumina-500 w-[85%] animate-[pulse_3s_ease-in-out_infinite]"></div>
                               </div>
                           </div>
                           
                           {/* Alerts Log */}
                           <div className="hidden md:flex flex-[1.5] bg-surface-800/30 p-3 rounded-xl border border-white/5 overflow-hidden flex-col">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-[9px] text-gray-500 uppercase font-bold">告警列表</span>
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                               </div>
                               <div className="space-y-2 overflow-y-auto pr-1 flex-1 hide-scrollbar">
                                   <div className="flex gap-2 items-start bg-red-500/10 p-1.5 rounded border border-red-500/20">
                                       <AlertCircle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
                                       <div className="text-[8px] text-red-200 leading-tight">站点C: 电压波动异常 (代码: E401)</div>
                                   </div>
                                   <div className="flex gap-2 items-start opacity-60">
                                       <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                                       <div className="text-[8px] text-gray-400 leading-tight">站点A: 固件 v4.5 升级成功</div>
                                   </div>
                                    <div className="flex gap-2 items-start opacity-60">
                                       <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                                       <div className="text-[8px] text-gray-400 leading-tight">中枢: 数据同步完成</div>
                                   </div>
                               </div>
                           </div>
                      </div>
                  </div>

                  {/* Bottom Log Ticker (Decorative) */}
                  <div className="mt-4 border-t border-white/5 pt-2 flex items-center gap-2 overflow-hidden">
                      <span className="text-[8px] text-blue-500 font-bold shrink-0">&gt;&gt; 系统运行日志:</span>
                      <div className="flex-1 overflow-hidden relative h-4">
                          <div className="absolute whitespace-nowrap text-[8px] text-gray-600 font-mono animate-marquee">
                             [14:20:01] 身份鉴权... 成功 | [14:20:05] 数据流加密... 完成 | [14:20:12] 上传批次 #99281... | [14:20:15] 智能优化逻辑触发: 效率提升 +1.2%
                          </div>
                      </div>
                  </div>

               </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-purple-500/10 text-xs font-medium text-purple-400 mb-6 border border-purple-500/20 self-start">
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
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 self-start">
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