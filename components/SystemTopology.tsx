import React from 'react';
import { Sun, Battery, Cpu, Zap, Plug, Wifi, Activity } from 'lucide-react';

export const SystemTopology: React.FC = () => {
  return (
    <div className="bg-surface-800/50 backdrop-blur-sm rounded-3xl p-5 border border-white/5 shadow-2xl overflow-hidden relative group">
      {/* Compact Header */}
      <div className="absolute top-4 left-6 flex items-center space-x-2 z-20">
        <Activity className="w-4 h-4 text-lumina-400" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">Energy Flow</span>
      </div>

      <style>{`
        @keyframes flow-h {
          0% { stroke-dashoffset: 20; opacity: 0.3; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .flow-line {
          stroke-dasharray: 4 4;
          animation: flow-h 1s linear infinite;
        }
        .node-icon {
          @apply w-10 h-10 rounded-lg bg-surface-900 border border-white/10 flex items-center justify-center shadow-lg relative z-10 transition-all hover:scale-110 hover:border-lumina-500/50;
        }
      `}</style>

      {/* Main Diagram Area - Ultra Compact Height 180px */}
      <div className="relative h-[180px] w-full select-none pt-4">
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid meet">
           {/* PV to Hub */}
           <path d="M 200 80 L 450 80" stroke="#333" strokeWidth="2" />
           <path d="M 200 80 L 450 80" className="flow-line" stroke="#eab308" strokeWidth="2" />

           {/* Hub to Load */}
           <path d="M 550 80 L 800 80" stroke="#333" strokeWidth="2" />
           <path d="M 550 80 L 800 80" className="flow-line" stroke="#fff" strokeWidth="2" />

           {/* Hub to Battery (Vertical Drop) */}
           <path d="M 500 110 L 500 140" stroke="#333" strokeWidth="2" />
           <path d="M 500 110 L 500 140" className="flow-line" stroke="#22c55e" strokeWidth="2" />
        </svg>

        {/* 1. PV Node (Left) */}
        <div className="absolute top-[80px] left-[20%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center group/pv">
           <div className="node-icon text-yellow-500 shadow-yellow-500/20">
              <Sun className="w-5 h-5" />
           </div>
           <div className="mt-2 text-center">
              <div className="text-[10px] text-gray-400 font-mono">INPUT</div>
              <div className="text-sm font-bold text-white">2.4 kW</div>
           </div>
        </div>

        {/* 2. SmartHub (Center) */}
        <div className="absolute top-[80px] left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center z-20">
           <div className="relative">
             <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full"></div>
             <div className="w-16 h-16 rounded-xl bg-surface-900 border-2 border-blue-500 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] relative z-20">
                <Cpu className="w-6 h-6 text-blue-400 mb-0.5" />
                <span className="text-[8px] font-black text-blue-400 tracking-wider">HUB</span>
             </div>
             <div className="absolute -right-2 -top-2 bg-surface-900 border border-white/10 rounded-full p-1 z-30">
                <Wifi className="w-2.5 h-2.5 text-purple-400" />
             </div>
           </div>
        </div>

        {/* 3. Load Node (Right) */}
        <div className="absolute top-[80px] left-[80%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center group/load">
           <div className="node-icon text-white shadow-white/10">
              <Plug className="w-5 h-5" />
              <Zap className="absolute -top-1 -right-1 w-2.5 h-2.5 text-yellow-400 fill-current" />
           </div>
           <div className="mt-2 text-center">
              <div className="text-[10px] text-gray-400 font-mono">OUTPUT</div>
              <div className="text-sm font-bold text-white">0.8 kW</div>
           </div>
        </div>

        {/* 4. Battery Node (Below Center) */}
        <div className="absolute top-[140px] left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-surface-900/80 px-4 py-2 rounded-full border border-white/10">
           <Battery className="w-4 h-4 text-green-500" />
           <div className="flex flex-col leading-none">
              <span className="text-[10px] text-gray-500">BATTERY</span>
              <span className="text-xs font-bold text-white">98% <span className="text-[10px] text-gray-500 font-normal">Charged</span></span>
           </div>
        </div>

      </div>
    </div>
  );
};