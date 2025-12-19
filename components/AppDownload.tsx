import React from 'react';
import { Download, Command, Sun, Zap, Battery, Wifi, MoreHorizontal, Power, BarChart3, Settings as SettingsIcon, Home as HomeIcon } from 'lucide-react';

export const AppDownload: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
      {/* Left Content */}
      <div className="p-10 lg:p-16 flex flex-col justify-center lg:w-1/2 z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
            <Command className="text-lumina-500 w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-black">AnchorGreen 智能云控 App</h2>
        </div>
        
        <p className="text-gray-600 text-lg mb-8">
          全面监测并控制您的用电状态、参数和模式。无论身在何处，都能通过 AnchorGreen App 实时掌握光伏发电、电池储能及负载消耗情况。
        </p>

        <button className="text-lumina-600 hover:text-lumina-700 font-medium text-lg mb-8 flex items-center transition-colors group">
          了解更多功能 <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&gt;</span>
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          {/* App Store Button Style */}
          <a href="#" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.53-1.07-.37-2.09-.36-3.15.05C9.79 21.28 9 21.41 8 20.35 6.27 18.52 5 15.5 5 12.33c0-2.67 1.67-4.56 4.31-4.59 1.09 0 2.08.47 2.83.47.77 0 1.94-.52 3.19-.44 2.47.15 4.09 1.62 4.09 1.62-.06.05-2.31 1.25-2.28 4.25.03 2.91 2.44 4.06 2.5 4.09-.03.06-.37 1.25-1.59 2.55zM12.03 7.69c-.06-.88.47-1.75 1.03-2.34.63-.69 1.56-1.13 2.34-1.13.13 1 0 2.38-1.09 3.53-.59.63-1.5.97-2.28.97-.09-1-.03-1.03 0-1.03z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight text-gray-400">Available on the</div>
              <div className="text-lg font-bold leading-tight">App Store</div>
            </div>
          </a>

          {/* QR Code */}
          <div className="flex items-center space-x-4">
             <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=AnchorGreenApp" 
                  alt="Download QR" 
                  className="w-20 h-20 mix-blend-multiply"
                />
             </div>
             <div className="text-sm text-gray-500">
               扫描二维码<br/>立即下载
             </div>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-2 text-sm text-lumina-600 hover:text-lumina-700 cursor-pointer w-fit">
          <Download className="w-4 h-4" />
          <span>下载 Android 应用程序 apk 文件</span>
        </div>
        
        <p className="mt-4 text-xs text-gray-400">需要 iOS 15.1 或更高版本 / Android 10.0+</p>
      </div>

      {/* Right Image (CSS Mockup Phone) */}
      <div className="lg:w-1/2 bg-gray-100 relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-lumina-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* Phone Frame */}
        <div className="relative w-[300px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-500 z-10">
           {/* Dynamic Island / Notch */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>

           {/* Screen Content */}
           <div className="flex-1 bg-surface-900 text-white flex flex-col relative">
              
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-medium text-gray-400">
                 <span>12:30</span>
                 <div className="flex items-center space-x-1.5">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                 </div>
              </div>

              {/* App Header */}
              <div className="px-6 py-4 flex justify-between items-center">
                 <div>
                    <div className="text-xs text-gray-400">已连接</div>
                    <div className="text-sm font-bold flex items-center">
                       AnchorGreen Pro <div className="w-1.5 h-1.5 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                    </div>
                 </div>
                 <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </div>

              {/* Main Gauge Area */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 -mt-8">
                 <div className="relative w-56 h-56 flex items-center justify-center">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-lumina-500/10 blur-2xl rounded-full"></div>
                    
                    {/* SVG Ring */}
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="112" cy="112" r="90" stroke="#333" strokeWidth="12" fill="none" />
                       <circle cx="112" cy="112" r="90" stroke="#14b8a6" strokeWidth="12" fill="none" strokeDasharray="565" strokeDashoffset="120" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                    </svg>
                    
                    {/* Center Text */}
                    <div className="absolute text-center">
                       <div className="text-5xl font-bold text-white mb-1">78<span className="text-2xl text-gray-400">%</span></div>
                       <div className="text-xs text-lumina-400 font-medium bg-lumina-500/10 px-2 py-1 rounded-full">可使用 ~4h 20m</div>
                    </div>
                 </div>

                 {/* Flow Data */}
                 <div className="flex w-full justify-between mt-8 px-2">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 bg-surface-800 rounded-full flex items-center justify-center border border-white/10 mb-2">
                          <Sun className="w-5 h-5 text-yellow-400" />
                       </div>
                       <div className="text-xs text-gray-400">光伏输入</div>
                       <div className="text-sm font-bold text-white">340 W</div>
                       <div className="text-[10px] text-green-500 flex items-center mt-0.5">
                          <span className="w-1 h-1 bg-green-500 rounded-full mr-1"></span> 充电中
                       </div>
                    </div>

                    <div className="flex items-center pt-2">
                       <div className="w-16 h-[1px] bg-white/10 relative">
                          <div className="absolute top-1/2 left-0 w-2 h-2 bg-lumina-500 rounded-full -translate-y-1/2 animate-flow-h"></div>
                       </div>
                    </div>

                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 bg-surface-800 rounded-full flex items-center justify-center border border-white/10 mb-2">
                          <Zap className="w-5 h-5 text-blue-400" />
                       </div>
                       <div className="text-xs text-gray-400">AC 输出</div>
                       <div className="text-sm font-bold text-white">120 W</div>
                    </div>
                 </div>
              </div>

              {/* Control Panel */}
              <div className="bg-surface-800 rounded-t-3xl p-6 pb-8">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-white">端口控制</span>
                    <SettingsIcon className="w-4 h-4 text-gray-500" />
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* AC Switch */}
                    <div className="bg-surface-700 p-3 rounded-xl flex items-center justify-between border border-lumina-500/50">
                       <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-medium text-white">AC 220V</span>
                       </div>
                       <Power className="w-4 h-4 text-lumina-400" />
                    </div>
                    {/* DC Switch */}
                    <div className="bg-surface-900 p-3 rounded-xl flex items-center justify-between border border-white/5 opacity-60">
                       <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <span className="text-xs font-medium text-gray-400">DC 12V</span>
                       </div>
                       <Power className="w-4 h-4 text-gray-500" />
                    </div>
                 </div>

                 {/* Bottom Nav Mock */}
                 <div className="flex justify-around border-t border-white/10 pt-4">
                    <div className="flex flex-col items-center text-lumina-400">
                       <HomeIcon className="w-5 h-5 mb-1" />
                       <span className="text-[9px]">首页</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                       <BarChart3 className="w-5 h-5 mb-1" />
                       <span className="text-[9px]">统计</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                       <SettingsIcon className="w-5 h-5 mb-1" />
                       <span className="text-[9px]">设置</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};