import React, { useState } from 'react';
import { 
  Mountain, HardHat, ShieldCheck, Radio, 
  Palmtree, Fish, School, Lightbulb, 
  ArrowUpRight, Users, Sprout, Anchor
} from 'lucide-react';

type ScenarioCategory = 'global' | 'sea';

export const ApplicationScenarios: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScenarioCategory>('global');

  const globalScenarios = [
    {
      id: 'pastoral',
      title: '高原牧区 · 移动家园',
      description: '针对高原牧民分散、流动的用电需求，提供轻量化折叠光伏与高能储能系统。支持卫星通讯、冷藏储药及生活照明。',
      image: 'https://img.lenyiin.com/app/hide.php?key=aGg0RUgrWWJybnhpN1ZZU0l0SW16N1FvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '海拔适应', value: '5000m+' },
        { label: '安装时间', value: '15min' }
      ],
      icon: Mountain,
      color: 'from-blue-600/40 to-cyan-500/40',
      span: 'md:col-span-8'
    },
    {
      id: 'construction',
      title: '基建工地 · 零碳施工',
      description: '模块化能源柜替代传统柴油发电机，解决路桥隧道的临时用电。零噪音大幅降低运维成本。',
      image: 'https://img.lenyiin.com/app/hide.php?key=TWpZc0Q0djZQcDJjanhWY2Zjc082clFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '运维节省', value: '60%+' }
      ],
      icon: HardHat,
      color: 'from-yellow-600/40 to-orange-500/40',
      span: 'md:col-span-4'
    },
    {
      id: 'border_patrol',
      title: '边防巡护 · 能源哨兵',
      description: '专为边境哨所打造。在极寒缺氧环境下，确保监控与通讯设备 24 小时在线。',
      image: 'https://img.lenyiin.com/app/hide.php?key=b3MrU3dFQUNsaHlYZXJqRzFXbldHTFFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '低温启动', value: '-40°C' }
      ],
      icon: Radio,
      color: 'from-emerald-800/40 to-green-700/40',
      span: 'md:col-span-4'
    },
    {
      id: 'emergency',
      title: '应急救援 · 生命屏障',
      description: '灾害发生后的黄金供电期，快速部署微网，确保医疗设备与指挥系统运行。',
      image: 'https://img.lenyiin.com/app/hide.php?key=ZHZiTDZDczFvRkF4UXdpRDBqR3oxN1FvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '响应速度', value: '即时' }
      ],
      icon: ShieldCheck,
      color: 'from-red-600/40 to-rose-500/40',
      span: 'md:col-span-8'
    },
  ];

  const seaScenarios = [
    {
      id: 'sea_community',
      title: '无电岛屿 · 民生供电',
      description: '针对印尼、菲律宾等破碎地形，以低成本微网替代昂贵海缆。让偏远渔村告别蜡烛与煤油灯，实现冰箱保鲜与风扇降温。',
      image: 'https://images.unsplash.com/photo-1596778402284-8398c7b09521?q=80&w=1000&auto=format&fit=crop',
      stats: [
        { label: '电力覆盖', value: '24H' },
        { label: '替代柴油', value: '100%' }
      ],
      icon: Lightbulb,
      color: 'from-orange-400/30 to-amber-500/30',
      span: 'md:col-span-8' // Large card
    },
    {
      id: 'sea_production',
      title: '农渔生产 · 动力辅助',
      description: '为近海鱼排增氧机、热带水果冷藏库提供稳定动力。解决农业“靠天吃饭”难题，大幅降低生产用油成本，提升经济附加值。',
      image: 'https://images.unsplash.com/photo-1533644267448-6d27878a123e?q=80&w=1000&auto=format&fit=crop', // Fishing boat/net
      stats: [
        { label: '增收预期', value: '+40%' },
        { label: '回本周期', value: '<2年' }
      ],
      icon: Fish,
      color: 'from-cyan-500/30 to-blue-500/30',
      span: 'md:col-span-4' // Small card
    },
    {
      id: 'sea_education',
      title: '公共服务 · 社区赋能',
      description: '点亮乡村学校的数字课堂，保障卫生所疫苗冰箱不间断运行。用清洁能源弥合数字鸿沟，守护社区健康。',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop', // Classroom
      stats: [
        { label: '数字教育', value: '100%' },
        { label: '医疗保障', value: '稳定' }
      ],
      icon: School,
      color: 'from-emerald-500/30 to-teal-500/30',
      span: 'md:col-span-12' // Full width
    }
  ];

  const currentScenarios = activeTab === 'global' ? globalScenarios : seaScenarios;

  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lumina-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-lumina-400 mb-6 uppercase tracking-[0.3em]">
              Application Scenarios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              因地制宜 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 to-white">
                赋能每一寸土地
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              从世界屋脊的极寒挑战，到热带群岛的民生普惠。
              AnchorGreen 为不同经纬度的能源痛点提供定制化解法。
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="bg-surface-900 p-1.5 rounded-2xl border border-white/10 flex space-x-1">
             <button 
               onClick={() => setActiveTab('global')}
               className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'global' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             >
               <Mountain className="w-4 h-4" />
               <span>高原应用场景</span>
             </button>
             <button 
               onClick={() => setActiveTab('sea')}
               className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'sea' ? 'bg-lumina-500 text-black shadow-lg shadow-lumina-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             >
               <Palmtree className="w-4 h-4" />
               <span>东南亚应用场景</span>
             </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[500px]">
          {currentScenarios.map((item) => (
            <div 
              key={item.id} 
              className={`${item.span} group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface-900 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 h-full w-full">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                {/* Dynamic Colored Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white opacity-50" />
                </div>

                <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                        {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {item.description}
                    </p>

                    <div className="flex gap-4 border-t border-white/10 pt-4">
                    {item.stats.map((stat, idx) => (
                        <div key={idx} className="pr-4 border-r border-white/10 last:border-0">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{stat.label}</div>
                            <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
                        </div>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Context Footer */}
        {activeTab === 'sea' && (
            <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-gray-500 animate-in fade-in slide-in-from-top-4 duration-700">
                <Sprout className="w-4 h-4 text-lumina-500" />
                <span>AnchorGreen 致力于通过 "千岛光伏计划" 助力东南亚区域实现 2030 可持续发展目标。</span>
            </div>
        )}
      </div>
    </div>
  );
};