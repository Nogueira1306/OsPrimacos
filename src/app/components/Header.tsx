import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const primacosLogo = new URL('../../../images/primacos_logo.jpg', import.meta.url).href;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <img
                src={primacosLogo}
                alt="Logo Os Primaços"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl font-black tracking-tight transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Os Primaços
              </h1>
              <p className="text-xs text-[#FF6B00] font-semibold -mt-1">MOTOCROSS TEAM</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'fotos', label: 'Fotos' },
              { id: 'video', label: 'Vídeo' },
              { id: 'sponsors', label: 'Sponsors' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-colors relative group ${
                  isScrolled ? 'text-gray-900 hover:text-[#FF6B00]' : 'text-white hover:text-[#FF6B00]'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'fotos', label: 'Fotos' },
              { id: 'video', label: 'Vídeo' },
              { id: 'sponsors', label: 'Sponsors' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-3 text-left text-gray-900 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] font-semibold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
