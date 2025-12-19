import React, { useState } from 'react';
import { Calculator as CalcIcon, Lightbulb, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { PRODUCTS } from '../constants';

interface CalculatorProps {
  onRecommend?: (productId: string) => void;
}

// Logic derived from PDF Page 3 & 4
export const Calculator: React.FC<CalculatorProps> = ({ onRecommend }) => {
  const [loadItems, setLoadItems] = useState([
    { name: 'LED 照明', watts: 200, hours: 6 },
    { name: '节能冰箱', watts: 50, hours: 24 },
    { name: '笔记本电脑', watts: 200, hours: 4 },
  ]);

  const addLoad = () => {
    setLoadItems([...loadItems, { name: '新设备', watts: 0, hours: 0 }]);
  };

  const updateLoad = (index: number, field: string, value: any) => {
    const newLoads = [...loadItems];
    // @ts-ignore
    newLoads[index][field] = value;
    setLoadItems(newLoads);
  };

  const removeLoad = (index: number) => {
    const newLoads = loadItems.filter((_, i) => i !== index);
    setLoadItems(newLoads);
  };

  // Calculations
  const totalDailyConsumptionWh = loadItems.reduce((acc, item) => acc + (item.watts * item.hours), 0);
  const totalPeakPowerW = loadItems.reduce((acc, item) => acc + item.watts, 0);
  const dailyKWh = totalDailyConsumptionWh / 1000;

  // Matching Logic
  // Filter for available Residential (Chen) series products
  const residentialProducts = PRODUCTS.filter(p => p.category === 'residential' && p.status === 'available');
  
  // Find the smallest product that satisfies the requirement.
  // We assume:
  // Chen-5 (5kWh) suitable for <= 5kWh daily
  // Chen-10 (10kWh) suitable for <= 10kWh daily
  // Chen-15 (15kWh) suitable for <= 15kWh daily
  let recommendedProduct = null;
  if (dailyKWh > 0) {
    if (dailyKWh <= 5) recommendedProduct = residentialProducts.find(p => p.id === 'chen-5');
    else if (dailyKWh <= 10) recommendedProduct = residentialProducts.find(p => p.id === 'chen-10');
    else if (dailyKWh <= 15) recommendedProduct = residentialProducts.find(p => p.id === 'chen-15');
  }

  const handleAction = () => {
    if (recommendedProduct && onRecommend) {
        onRecommend(recommendedProduct.id);
    } else {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface-800 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-lumina-500/20 rounded-xl">
          <CalcIcon className="text-lumina-500 h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-white">离网系统配置计算器</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-6">
          <p className="text-gray-400">添加您的用电设备，我们将基于标准工况为您测算所需的光伏组件和电池容量。</p>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {loadItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-3 bg-surface-900 p-4 rounded-xl border border-white/5">
                <input 
                  type="text" 
                  value={item.name}
                  onChange={(e) => updateLoad(index, 'name', e.target.value)}
                  className="bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-lumina-500 w-full sm:w-1/3"
                  placeholder="设备名称"
                />
                <div className="flex items-center space-x-2">
                   <input 
                    type="number" 
                    value={item.watts}
                    onChange={(e) => updateLoad(index, 'watts', Number(e.target.value))}
                    className="bg-surface-800 rounded p-2 text-white w-20 text-center"
                  />
                  <span className="text-xs text-gray-500">瓦特(W)</span>
                </div>
                <div className="flex items-center space-x-2">
                   <input 
                    type="number" 
                    value={item.hours}
                    onChange={(e) => updateLoad(index, 'hours', Number(e.target.value))}
                    className="bg-surface-800 rounded p-2 text-white w-20 text-center"
                  />
                  <span className="text-xs text-gray-500">小时/天</span>
                </div>
                <button onClick={() => removeLoad(index)} className="text-gray-500 hover:text-red-400">
                  &times;
                </button>
              </div>
            ))}
          </div>
          
          <Button onClick={addLoad} variant="outline" size="sm" className="w-full border-dashed">
            + 添加设备
          </Button>
        </div>

        {/* Results */}
        <div className="bg-surface-900 rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">系统需求估算</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Zap className="text-yellow-400 h-5 w-5" />
                  <span className="text-gray-300">日均耗电量</span>
                </div>
                <span className="text-2xl font-bold text-white">{dailyKWh.toFixed(2)} <span className="text-sm font-normal text-gray-500">kWh</span></span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="text-blue-400 h-5 w-5" />
                  <span className="text-gray-300">峰值功率</span>
                </div>
                <span className="text-2xl font-bold text-white">{totalPeakPowerW} <span className="text-sm font-normal text-gray-500">W</span></span>
              </div>
              
              <div className="h-px bg-white/10 my-6"></div>

              {/* Dynamic Recommendation Block */}
              {recommendedProduct ? (
                  <div className="bg-surface-800/50 rounded-xl p-5 border border-lumina-500/30 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10">
                        <img src={recommendedProduct.image} alt="bg" className="w-32 h-32 object-cover rounded-full" />
                     </div>
                     <div className="relative z-10">
                        <p className="text-xs font-bold text-lumina-400 uppercase tracking-wider mb-2">为您推荐</p>
                        <h4 className="text-xl font-bold text-white mb-1">{recommendedProduct.name}</h4>
                        <p className="text-gray-400 text-xs mb-4">{recommendedProduct.tagline}</p>
                        <div className="flex gap-2 mb-4">
                           {recommendedProduct.features.slice(0, 2).map((f, i) => (
                             <span key={i} className="text-[10px] bg-black/40 px-2 py-1 rounded text-gray-300 border border-white/5">
                               {f.label}: {f.value}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>
              ) : (
                  <div className="bg-surface-800/50 rounded-xl p-5 border border-white/10 relative">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">推荐方案</p>
                      <h4 className="text-xl font-bold text-white mb-1">高级定制方案</h4>
                      <p className="text-gray-400 text-xs mb-4">
                        您的能源需求 ({dailyKWh.toFixed(1)} kWh/天) 已超出标准版安宸系列的覆盖范围。
                        建议联系专家进行定制化系统设计。
                      </p>
                  </div>
              )}

            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full" onClick={handleAction}>
              {recommendedProduct ? (
                 <>查看产品详情 & 购买 <ArrowRight className="ml-2 w-4 h-4" /></>
              ) : (
                 <>联系专家 1对1 定制 <MessageSquare className="ml-2 w-4 h-4" /></>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};