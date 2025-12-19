
import { Product } from './types';
import { Sun, Battery, Cpu, Zap, Box, ShieldCheck, Home, Factory, Backpack, Thermometer } from 'lucide-react';

export const HERO_IMAGE = "https://cdn.pixabay.com/photo/2019/04/05/23/53/solar-cell-4106401_1280.jpg";

export const DIAGRAM_IMAGE = "https://img.lenyiin.com/app/hide.php?key=T1VnVHM4MXFZK25nb2tudDJ3dzltclFvY0ZZOFVZK1VGcWl0bGw0PQ==";

export const PRODUCTS: Product[] = [
  // --- Residential: Chen Series (Available) ---
  {
    id: 'chen-5',
    category: 'residential',
    seriesName: '安宸系列',
    subSeries: '宸 (Chen-5)',
    status: 'available',
    name: '安宸·轻享版 (Chen S)',
    tagline: '入门首选 紧凑高效',
    description: '专为小型家庭或度假屋设计的基础离网系统。满足日常照明、冰箱及数码设备供电。',
    price: 0,
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '储能', value: '5kWh' },
      { label: '光伏', value: '1360W' },
      { label: '户型', value: '1-2人' }
    ],
    specs: {
      '日均发电': '~6.5 kWh',
      '逆变功率': '5kW',
      '电池类型': 'LFP (1模块)',
    },
    bom: [
      '1x AGP-SmartHub 智能中枢',
      '1x 5kWh 磷酸铁锂电池模组',
      '4x 340W 单晶硅光伏组件',
      '1x 标准线束包',
      '可选：基础固定支架 / 智能追踪支架'
    ]
  },
  {
    id: 'chen-10',
    category: 'residential',
    seriesName: '安宸系列',
    subSeries: '宸 (Chen-10)',
    status: 'available',
    name: '安宸·标准版 (Chen M)',
    tagline: '主推爆款 全能覆盖',
    description: '大多数家庭的黄金配置。10度电储能配合大功率光伏输入，轻松带动空调、洗衣机等大功率电器，实现能源自给。',
    price: 0,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '储能', value: '10kWh' },
      { label: '光伏', value: '2720W' },
      { label: '户型', value: '3-4人' }
    ],
    specs: {
      '日均发电': '~13 kWh',
      '逆变功率': '5kW',
      '电池类型': 'LFP (2模块)',
    },
    bom: [
      '1x AGP-SmartHub 智能中枢',
      '2x 5kWh 磷酸铁锂电池模组',
      '8x 340W 单晶硅光伏组件',
      '1x 扩容并联线束包',
      '可选：基础固定支架 / 智能追踪支架'
    ]
  },
  {
    id: 'chen-15',
    category: 'residential',
    seriesName: '安宸系列',
    subSeries: '宸 (Chen-15)',
    status: 'available',
    name: '安宸·尊享版 (Chen L)',
    tagline: '极致续航 别墅专享',
    description: '安宸系列的顶级配置。15度超大电量与12块光伏板阵列，确保在连续阴雨天也能维持家庭电力生命线。',
    price: 0,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf2efc6?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '储能', value: '15kWh' },
      { label: '光伏', value: '4080W' },
      { label: '户型', value: '5人+' }
    ],
    specs: {
      '日均发电': '~20 kWh',
      '逆变功率': '8kW (Pro)',
      '电池类型': 'LFP (3模块)',
    },
    bom: [
      '1x AGP-SmartHub Pro 增强型中枢',
      '3x 5kWh 磷酸铁锂电池模组',
      '12x 340W 单晶硅光伏组件',
      '1x 专业级汇流箱与线束',
      '可选：基础固定支架 / 智能追踪支架'
    ]
  },
  // --- Residential: Xu Series (Coming Soon) ---
  {
    id: 'xu-future',
    category: 'residential',
    seriesName: '安宸系列',
    subSeries: '煦 (Xu)',
    status: 'coming_soon',
    name: '安宸·煦 (Xu Next)',
    tagline: '预计 2026年 Q4 发布',
    description: '下一代光热电一体化系统。创新的热能回收技术，将重新定义家庭能源利用效率。',
    price: 0,
    image: 'https://images.unsplash.com/photo-1620641031354-9366dfd6e7a2?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '发布时间', value: '2026 Q4' },
      { label: '核心技术', value: '光热一体' },
      { label: '状态', value: '研发中' }
    ],
    specs: {
      '研发代号': 'Project Warmth',
      '预计能效比': '>115%',
    },
    bom: [] 
  },
  // --- Commercial ---
  {
    id: 'p-3',
    category: 'commercial',
    seriesName: '擎岳系列',
    subSeries: '磐 (Pan)',
    name: '擎岳·磐石工商业柜 (Pan Pro)',
    tagline: '商业动力 坚若磐石',
    description: '专为工商业设计的动力基石。取磐石之坚固，强调系统在极端环境下的稳定与耐久。支持三相不平衡输出，轻松带动重型负载。',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '总功率', value: '50kW' },
      { label: '负载能力', value: '三相 380V' },
      { label: '稳定性', value: '工业级' }
    ],
    specs: {
      '额定输出': '50kW',
      '峰值功率': '100kW (10s)',
      '电池兼容': '高压锂电系统',
      '应用': '矿区/基站/工厂'
    }
  },
  // --- Portable ---
  {
    id: 'p-4',
    category: 'portable',
    seriesName: '随驭系列',
    subSeries: '随 (Sui)',
    name: '随驭·行者套件 (Sui Go)',
    tagline: '如影随形 自由掌控',
    description: '移动能源伴侣。取随心所欲、随时随地之意。TopCon 340W 折叠面板配合便携电站，让您在任何地方都能掌控能源自由。',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop',
    features: [
      { label: '便携性', value: '折叠收纳' },
      { label: '板载功率', value: '340W' },
      { label: '重量', value: '7.5kg' }
    ],
    specs: {
      '面板类型': 'TopCon 单晶',
      '折叠尺寸': '600 x 550 mm',
      '展开尺寸': '1200 x 1100 mm',
      '防水等级': 'IP67'
    }
  }
];

export const NAGQU_DATA = [
  { time: '00:00', production: 0, consumption: 0.4, batteryLevel: 70 },
  { time: '02:00', production: 0, consumption: 0.3, batteryLevel: 67 },
  { time: '04:00', production: 0, consumption: 0.3, batteryLevel: 64 },
  { time: '06:00', production: 0, consumption: 0.4, batteryLevel: 60 },
  { time: '08:00', production: 0.6, consumption: 0.8, batteryLevel: 58 }, // Sunrise
  { time: '10:00', production: 2.8, consumption: 1.0, batteryLevel: 72 },
  { time: '12:00', production: 4.2, consumption: 1.2, batteryLevel: 88 }, // Peak sun
  { time: '14:00', production: 3.9, consumption: 1.3, batteryLevel: 98 },
  { time: '16:00', production: 2.5, consumption: 1.2, batteryLevel: 100 },
  { time: '18:00', production: 1.2, consumption: 1.5, batteryLevel: 96 },
  { time: '20:00', production: 0, consumption: 2.8, batteryLevel: 85 },
  { time: '22:00', production: 0, consumption: 1.8, batteryLevel: 76 },
];

export const PV_SPECS = [
  { label: '产品型号', value: 'AGP-TopCon-340W' },
  { label: '电池片技术', value: 'N-Type TopCon 单晶' },
  { label: '最大功率 (Pmax)', value: '340W' },
  { label: '组件效率', value: '22.5%' },
  { label: '开路电压 (Voc)', value: '38.6V' },
  { label: '短路电流 (Isc)', value: '13.8A' },
  { label: '工作电压 (Vmp)', value: '32.4V' },
  { label: '工作电流 (Imp)', value: '13.6A' },
  { label: '尺寸', value: '1722 x 1134 x 30 mm' },
  { label: '重量', value: '21.5 kg' },
  { label: '工作温度范围', value: '-40°C ~ +85°C' },
  { label: '功率温度系数', value: '-0.30%/°C' },
  { label: '质保', value: '15年工艺，30年功率' },
];

export const BATTERY_SPECS = [
  { label: '产品型号', value: 'AGP-LFP-51.2-100' },
  { label: '电芯类型', value: 'LiFePO4 (磷酸铁锂)' },
  { label: '标称能量', value: '5.12 kWh' },
  { label: '标称电压', value: '51.2V' },
  { label: '标称容量', value: '100Ah' },
  { label: '工作电压范围', value: '44.8V ~ 57.6V' },
  { label: '最大持续充电电流', value: '100A (1C)' },
  { label: '最大持续放电电流', value: '100A (1C)' },
  { label: '循环寿命', value: '≥6000次 (@80% DOD, 25°C)' },
  { label: '通信接口', value: 'CAN / RS485' },
  { label: '尺寸', value: '442 x 480 x 133 mm (3U)' },
  { label: '重量', value: '45 kg' },
  { label: '防护等级', value: 'IP20 (可选IP65柜体)' },
];

export const CONTROLLER_SPECS = [
  { label: '产品型号', value: 'AGP-SmartHub-Pro' },
  { label: '集成功能', value: '逆变 + MPPT + BMS' },
  { label: '额定功率', value: '5000W (峰值 10kW)' },
  { label: 'MPPT效率', value: '99.9% (SiC技术)' },
  { label: '最大充电电流', value: '120A' },
  { label: '光伏输入电压', value: '120-500 VDC' },
  { label: 'AC输出', value: '230V 纯正弦波' },
  { label: '智能互联', value: 'WiFi / 4G / Bluetooth' },
  { label: '散热方式', value: '智能风冷 (0dB静音)' },
  { label: '尺寸', value: '450 x 300 x 180 mm' },
  { label: '重量', value: '12.5 kg' },
  { label: '防护等级', value: 'IP65' },
  { label: '质保', value: '5年整机质保' },
];
