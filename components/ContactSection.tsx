import React from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-surface-800 rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">立即咨询方案</h2>
          <p className="text-gray-400 mb-8 text-lg">
            不确定哪种配置适合您？我们的能源专家将为您提供免费的一对一咨询服务，定制专属的离网电力解决方案。
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-lumina-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-lumina-500" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">技术咨询</h4>
                <p className="text-gray-400 mt-1">罗先生(技术总监)：400-888-9999 (周一至周日 9:00-21:00)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-lumina-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-lumina-500" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">商务合作</h4>
                <p className="text-gray-400 mt-1">王先生(市场总监)：400-888-9999 (周一至周日 9:00-21:00)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-lumina-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-lumina-500" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">体验中心</h4>
                <p className="text-gray-400 mt-1">四川省成都市高新区天府大道北段1700号</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-900 p-8 rounded-2xl border border-white/10">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">姓名</label>
              <input type="text" className="w-full bg-surface-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-500 transition-colors" placeholder="您的称呼" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">联系电话</label>
              <input type="tel" className="w-full bg-surface-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-500 transition-colors" placeholder="用于接收方案" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">需求描述</label>
              <textarea rows={4} className="w-full bg-surface-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-500 transition-colors" placeholder="例如：我想为山区的度假屋配置一套备电系统..."></textarea>
            </div>
            <Button className="w-full" size="lg">
              提交咨询 <MessageSquare className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-xs text-gray-500 text-center mt-4">提交即代表您同意我们的隐私政策，我们将严格保密您的信息。</p>
          </form>
        </div>
      </div>
    </div>
  );
};