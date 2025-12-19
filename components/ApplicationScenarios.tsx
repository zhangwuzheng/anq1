import React from 'react';
import { Home, Factory, HardHat, Tent, Zap, Wind, Mountain, ArrowUpRight, ShieldCheck, Timer, Radio } from 'lucide-react';

export const ApplicationScenarios: React.FC = () => {
  const scenarios = [
    {
      id: 'pastoral',
      title: '高原牧区：点亮高原大地',
      description: '针对游牧民分散、流动的用电需求，提供轻量化折叠光伏与高能储能系统。支持卫星通讯、冷藏储药及生活照明。',
      image: 'https://img.lenyiin.com/app/hide.php?key=aGg0RUgrWWJybnhpN1ZZU0l0SW16N1FvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '海拔适应', value: '5000m+' },
        { label: '安装时间', value: '15min' }
      ],
      icon: Mountain,
      color: 'from-blue-600/20 to-cyan-500/20',
      span: 'md:col-span-7'
    },
    {
      id: 'construction',
      title: '基建工地：告别油机时代',
      description: '模块化能源柜替代传统柴油发电机，解决偏远路桥、隧道施工的临时用电。零噪音、零排放，大幅降低运维成本。',
      image: 'https://img.lenyiin.com/app/hide.php?key=TWpZc0Q0djZQcDJjanhWY2Zjc082clFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '噪音降幅', value: '100%' },
        { label: '运维节省', value: '60%+' }
      ],
      icon: HardHat,
      color: 'from-yellow-600/20 to-orange-500/20',
      span: 'md:col-span-5'
    },
    {
      id: 'emergency',
      title: '应急救援：生命电力屏障',
      description: '灾害发生后的黄金供电期，快速部署微网，确保医疗设备与指挥系统运行。',
      image: 'https://img.lenyiin.com/app/hide.php?key=ZHZiTDZDczFvRkF4UXdpRDBqR3oxN1FvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '响应速度', value: '毫秒级' }
      ],
      icon: ShieldCheck,
      color: 'from-red-600/20 to-rose-500/20',
      span: 'md:col-span-5'
    },
    {
      id: 'border_patrol',
      title: '边防巡护：全疆域能源哨兵',
      description: '专为边境哨所、无人监控塔台打造的离网能源系统。在高海拔、极寒缺氧环境下，确保监控与通讯设备 24 小时在线，构筑钢铁防线。',
      image: 'https://img.lenyiin.com/app/hide.php?key=b3MrU3dFQUNsaHlYZXJqRzFXbldHTFFvY0ZZOFVZK1VGcWl0bGw0PQ==',
      stats: [
        { label: '低温启动', value: '-40°C' },
        { label: '防护等级', value: 'IP68' }
      ],
      icon: Radio,
      color: 'from-emerald-900/40 to-green-800/40',
      span: 'md:col-span-7'
    }
  ];

  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lumina-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-lumina-400 mb-6 uppercase tracking-[0.3em]">
              Real-world Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              深耕多样化环境 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-400 to-white">
                让能源自由落地
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm border-l border-white/10 pl-6 py-2 text-sm leading-relaxed">
            针对不同行业的痛点需求，安擎提供从硬件部署到软件监控的全链路离网能源闭环。
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {scenarios.map((item) => (
            <div 
              key={item.id} 
              className={`${item.span} group relative rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 min-h-[400px]`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                        <item.icon className="w-5 h-5 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-gray-300 text-sm max-w-xl mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {item.description}
                </p>

                <div className="flex gap-6 border-t border-white/10 pt-6">
                   {item.stats.map((stat, idx) => (
                     <div key={idx}>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};