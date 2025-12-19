import React from 'react';

export const SpecsTable: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-900">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm">
        <thead className="bg-surface-800">
          <tr>
            <th className="px-6 py-4 font-semibold text-white">技术参数</th>
            <th className="px-6 py-4 font-semibold text-white">AGP SPF 3000 (详细数据)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">PV 输入电压范围</td>
            <td className="px-6 py-3 text-white font-mono">60-115 VDC</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">最大开路电压</td>
            <td className="px-6 py-3 text-white font-mono">150 VDC</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">最大充电电流</td>
            <td className="px-6 py-3 text-white font-mono">70A</td>
          </tr>
           <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">最大光伏功率</td>
            <td className="px-6 py-3 text-white font-mono">3500W</td>
          </tr>
           <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">AC 输出电压</td>
            <td className="px-6 py-3 text-white font-mono">230Vac</td>
          </tr>
           <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">电压范围 (UPS模式)</td>
            <td className="px-6 py-3 text-white font-mono">170-270Vac</td>
          </tr>
           <tr className="hover:bg-white/5">
            <td className="px-6 py-3 text-gray-400">电池系统</td>
            <td className="px-6 py-3 text-white font-mono">48VDC (LiFePO4/铅酸)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};