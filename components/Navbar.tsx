import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, ChevronDown } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onCategorySelect?: (category: string) => void;
  activeCategory?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategorySelect, activeCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    // Scroll to products
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    { id: 'residential', label: '安宸系列 (家用)' },
    { id: 'commercial', label: '擎岳系列 (工商业)' },
    { id: 'portable', label: '随驭系列 (便携)' },
  ];

  const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
      setMobileMenuOpen(false);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-900/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleCategoryClick('all')}>
            <Sun className="h-8 w-8 text-lumina-500" />
            <span className="text-2xl font-bold tracking-tight text-white">安擎新能源<span className="text-lumina-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm font-medium focus:outline-none py-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>产品系列</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Dropdown */}
              <div 
                className={`absolute top-full left-0 w-48 bg-surface-900 border border-white/10 rounded-xl shadow-xl py-2 transform transition-all duration-200 origin-top-left ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
              >
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${activeCategory === cat.id ? 'text-lumina-400 font-medium' : 'text-gray-300'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <a href="#scenarios" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">解决方案</a>
            <a href="#detailed-specs" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">核心参数</a>
            <a href="#calculator" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">系统定制</a>
            <button onClick={scrollToContact} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">联系咨询</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={scrollToContact}>
              立即咨询
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-900 border-b border-white/10 py-4 px-4 flex flex-col space-y-4">
            <div className="pb-2 border-b border-white/10">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">产品系列</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`block w-full text-left py-2 text-sm ${activeCategory === cat.id ? 'text-lumina-400' : 'text-gray-300'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <a href="#scenarios" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">解决方案</a>
            <a href="#detailed-specs" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">核心参数</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white">系统定制</a>
            <button onClick={scrollToContact} className="block text-left text-gray-300 hover:text-white">联系咨询</button>
        </div>
      )}
    </nav>
  );
};