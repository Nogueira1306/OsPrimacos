import { Instagram, Youtube, Heart } from 'lucide-react';

const primacosLogo = new URL('../../../images/primacos_logo.jpg', import.meta.url).href;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FF6B00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-12 border-b border-white/10">
          {/* Brand Section */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img
                  src={primacosLogo}
                  alt="Logo Os Primaços"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">Os Primaços</h3>
                <p className="text-xs text-[#FF6B00] font-semibold -mt-1">MOTOCROSS TEAM</p>
              </div>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Paixão, velocidade e adrenalina. A nossa jornada no mundo do motocross continua, 
              pista após pista, vitória após vitória.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'fotos', label: 'Fotos' },
                { id: 'video', label: 'Vídeo' },
                { id: 'sponsors', label: 'Sponsors' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Segue-nos</h4>
            <p className="text-gray-400 text-sm mb-6">
              Acompanha todas as nossas aventuras nas redes sociais
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/os.primacos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-[#FF6B00] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@os.prima%C3%A7os"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-[#FF6B00] rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Os Primaços. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Desenvolvido por</span>
            <a
              href="https://www.nexttech.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B00] hover:text-[#FF8C3A] font-semibold transition-colors"
            >
              Nexttech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
