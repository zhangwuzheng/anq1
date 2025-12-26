import React, { useState } from 'react';
import { Cpu, Battery, Sun, Anchor, Shield, Droplets, Layers, Zap, Maximize, Activity, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    id: 'hub',
    label: '智能中枢',
    icon: Cpu,
    title: 'AGP-SmartHub 控制器',
    subtitle: '工业美学与智能交互的完美融合',
    description: '采用现代工业风格设计，浅灰色主体搭配深色底板，表面呈现高级磨砂质感。不仅是能源大脑，更是科技艺术品。',
    details: [
      {
        title: '外观设计',
        icon: Maximize,
        items: [
          '浅灰色主体配深色底板，撞色工业风',
          '顶部独特几何切面设计，科技感十足',
          '高精密磨砂质感外壳，防指纹耐磨损'
        ]
      },
      {
        title: '全彩显示系统',
        icon: Activity,
        items: [
          'LED显示屏实时反馈系统核心数据',
          '四色LED状态呼吸灯 (绿/蓝/黄/红) 直观呈现运行模式',
          '清晰的端口标识与系统模式指示'
        ]
      },
      {
        title: '接口与配置',
        icon: Zap,
        items: [
          '多路光伏输入 (PV IN) 端口',
          '大电流电池接口 (BATTERY)',
          '配备标准AC插座接口与直流输出'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1555664424-778a18a21c60?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'battery',
    label: '储能电池',
    icon: Battery,
    title: 'AGP-LFP-5000 电池系统',
    subtitle: 'IP67 级防水 · 模块化堆叠设计',
    description: '专为恶劣环境设计的 5kWh 模块化电池。采用橡胶密封与 O 型圈设计，支持 3 层安全堆叠，最大容量可达 15kWh。',
    details: [
      {
        title: '尺寸与堆叠',
        icon: Layers,
        items: [
          '单单元尺寸: 60cm × 40cm × 40cm (96升)',
          '最大堆叠: 3层 (高度120cm, 总容量15kWh)',
          '灰色滑动锁扣设计，确保连接稳固',
          '中央槽内集成高效散热鳍片'
        ]
      },
      {
        title: 'IP67 极致防水',
        icon: Droplets,
        items: [
          '橡胶密封条包裹所有外部边缘',
          '堆叠接触面采用 O-ring 密封圈',
          '内部集成冷凝水排放通道与防泼溅涂层',
          '通风口配备专用防水格栅'
        ]
      },
      {
        title: '智能交互',
        icon: Activity,
        items: [
          '数字显示屏：实时显示电量百分比',
          '三色LED状态指示 (绿/黄/红)',
          '侧面端口配备高密封性防水盖'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'panel',
    label: '光伏组件',
    icon: Sun,
    title: 'TopCon N-Type 高效光伏板',
    subtitle: '弱光响应 · 高强度轻量化',
    description: '采用 N 型 TopCon 电池技术，光电转换效率突破 22.5%。表面覆盖高透光钢化玻璃，抗冰雹冲击。',
    details: [
      {
        title: '高效发电',
        icon: Zap,
        items: [
          '22.5% 转换效率，同面积发电量提升 10%',
          '优异的弱光响应，阴雨天依然有功率输出',
          '低温度系数，高温环境下损耗更小'
        ]
      },
      {
        title: '耐候设计',
        icon: Shield,
        items: [
          '正面 3.2mm 钢化玻璃，抗 2400Pa 风压',
          'IP68 接线盒，内置旁路二极管防止热斑',
          '抗 PID (电势诱导衰减) 封装工艺'
        ]
      },
      {
        title: '便携特性',
        icon: Maximize,
        items: [
          '支持多角度折叠 (随驭系列)',
          '配备标准 MC4 接口，快速插拔',
          '轻量化铝合金边框，便于搬运'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'stand',
    label: '折叠支架',
    icon: Anchor,
    title: 'SmartTrack 智能折叠支架',
    subtitle: '稳如磐石 · 极速展开',
    description: '航空级铝合金材质，创新的一键展开结构。集成角度调节功能，可根据季节调整最佳受光角度。',
    details: [
      {
        title: '结构强度',
        icon: Shield,
        items: [
          '航空级 6063-T6 铝合金，耐腐蚀抗氧化',
          '三角力学支撑结构，抗风等级达 10 级',
          '地桩/配重块双模固定，适应软硬地面'
        ]
      },
      {
        title: '调节功能',
        icon: Maximize,
        items: [
          '支持 0-60 度仰角无级调节',
          '带刻度盘指示，精准对准太阳轨迹',
          '集成水平仪，辅助快速找平'
        ]
      },
      {
        title: '极速安装',
        icon: Activity,
        items: [
          '全预装设计，现场零散件',
          '快拆卡扣连接光伏板，无需工具',
          '折叠后体积缩小 70%，便于车载'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop'
  }
];

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-surface-900 py-24 border-y border-white/5 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-surface-900 to-black z-0"></div>
       <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-lumina-500/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">产品特性与核心卖点</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              每一处细节都经过精心打磨。从 IP67 级防水到工业美学设计，我们重新定义了离网能源设备的标准。
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {FEATURES.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center p-4 rounded-xl border transition-all duration-300 min-w-[160px] lg:min-w-0 ${
                  activeTab === idx 
                  ? 'bg-lumina-500/10 border-lumina-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.15)]' 
                  : 'bg-surface-800/50 border-white/5 text-gray-400 hover:bg-surface-800 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 ${activeTab === idx ? 'bg-lumina-500 text-black' : 'bg-surface-900 text-gray-500'}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">{feature.label}</div>
                  <div className="text-[10px] opacity-70 uppercase tracking-wider">{feature.id.toUpperCase()}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4 bg-surface-800/30 border border-white/10 rounded-3xl p-1 overflow-hidden backdrop-blur-sm min-h-[600px] flex">
             <div className="flex flex-col md:flex-row w-full h-full">
                
                {/* Visual Side (Left/Top) */}
                <div className="w-full md:w-5/12 relative group h-64 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                   <img 
                     src={FEATURES[activeTab].image} 
                     alt={FEATURES[activeTab].title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-90 md:opacity-60"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block p-2 bg-lumina-500 rounded-lg mb-3 shadow-lg">
                        {React.createElement(FEATURES[activeTab].icon, { className: "w-6 h-6 text-black" })}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 shadow-black drop-shadow-lg">{FEATURES[activeTab].title}</h3>
                      <p className="text-xs font-mono text-lumina-400 uppercase tracking-widest bg-black/40 backdrop-blur-md inline-block px-2 py-1 rounded">
                        {FEATURES[activeTab].subtitle}
                      </p>
                   </div>
                </div>

                {/* Details Side (Right/Bottom) */}
                <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
                   <p className="text-gray-300 text-sm leading-relaxed mb-8 border-l-2 border-lumina-500 pl-4">
                     {FEATURES[activeTab].description}
                   </p>

                   <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
                      {FEATURES[activeTab].details.map((detail, idx) => (
                        <div key={idx}>
                          <h4 className="flex items-center text-white font-bold mb-3 text-sm">
                            <detail.icon className="w-4 h-4 text-lumina-500 mr-2" />
                            {detail.title}
                          </h4>
                          <ul className="space-y-2">
                            {detail.items.map((item, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
