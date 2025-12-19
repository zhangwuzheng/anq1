import React from 'react';
import { Globe, Leaf, Zap, Target, ShieldCheck, ArrowUpRight, Cpu, Network } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <div className="relative py-32 bg-black overflow-hidden">
      {/* Immersive Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lumina-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-lumina-500/10 border border-lumina-500/20 text-[10px] font-bold text-lumina-400 mb-6 uppercase tracking-[0.3em]">
              The Core Purpose
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              不只是电力 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 via-white to-gray-500">
                更是文明的延伸
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm border-l-2 border-lumina-500/30 pl-6 py-2">
            安擎新能源致力于通过分布式离网技术，解决能源获取的最后死角，助力全球绿色能源转型。
          </p>
        </div>

        {/* Vivid Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* Large Hero Card: Infrastructure */}
          <div className="md:col-span-7 group relative rounded-[2.5rem] bg-surface-900 border border-white/5 overflow-hidden p-10 flex flex-col justify-between hover:border-lumina-500/40 transition-all duration-700 shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
               <Network className="w-64 h-64 text-white -rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">重塑能源基建成本</h3>
              <p className="text-gray-400 text-lg max-w-md">
                无需跨越千山万水的电网架设，无需昂贵的变压器扩容。我们的系统将发电站“搬到”用电端，显著降低基础设施投入。
              </p>
            </div>

            <div className="relative z-10 mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">-70%</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">建设成本节省</span>
               </div>
               <div className="h-10 w-px bg-white/10"></div>
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">0</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">碳足迹施工</span>
               </div>
            </div>
          </div>

          {/* Small Card 1: Decentralized */}
          <div className="md:col-span-5 group relative rounded-[2.5rem] bg-gradient-to-br from-surface-800 to-surface-900 border border-white/5 overflow-hidden p-10 hover:border-blue-400/40 transition-all duration-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-8">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">解决分散性用电需求</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              无论是偏远牧场、科考营地，还是移动基站，安擎提供即插即用的微网方案，让能源像无线信号一样随处可用。
            </p>
            <div className="absolute bottom-0 right-0 p-8">
               <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>

          {/* Small Card 2: Carbon Neutral */}
          <div className="md:col-span-5 group relative rounded-[2.5rem] bg-surface-900 border border-white/5 overflow-hidden p-10 hover:border-green-400/40 transition-all duration-700">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-8">
              <Leaf className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">驱动“双碳”目标</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              每一套安擎系统的部署，都是对化石能源的有力替代。我们以极致的转换效率，助推碳达峰、碳中和的关键进程。
            </p>
            <div className="mt-10 flex items-center gap-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-1 w-8 bg-green-500/30 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>
                 </div>
               ))}
            </div>
          </div>

          {/* Small Card 3: Technology Innovation */}
          <div className="md:col-span-7 group relative rounded-[2.5rem] bg-gradient-to-r from-lumina-950/40 to-surface-900 border border-white/5 overflow-hidden p-10 flex items-center gap-8 hover:border-lumina-500/40 transition-all duration-700">
            <div className="flex-shrink-0 w-20 h-20 bg-lumina-500/20 rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
               <Cpu className="w-10 h-10 text-lumina-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">技术主权，自主可控</h3>
              <p className="text-gray-400 text-sm">
                通过自主研发的BMS及能量管理系统，我们确保能源的安全、可靠与高效流转。
              </p>
            </div>
            <div className="hidden lg:block text-xs font-mono text-lumina-500/50 uppercase tracking-widest vertical-text rotate-180">
               Innovation DNA
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};