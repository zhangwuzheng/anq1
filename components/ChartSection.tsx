import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { NAGQU_DATA } from '../constants';

export const ChartSection: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={NAGQU_DATA}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.4} />
          <XAxis 
            dataKey="time" 
            stroke="#666" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false} 
            tickMargin={10}
            minTickGap={30}
          />
          <YAxis 
            stroke="#666" 
            fontSize={10} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value}kW`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #333', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number, name: string) => [value + ' kW', name]}
            labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} 
            iconType="circle"
            iconSize={8}
          />
          <Area 
            type="monotone" 
            dataKey="production" 
            name="光伏发电"
            stroke="#14b8a6" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorProd)" 
          />
          <Area 
            type="monotone" 
            dataKey="consumption" 
            name="负载消耗"
            stroke="#f59e0b" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorCons)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};