import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('fotos');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1746690818493-128cb32d23a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvY3Jvc3MlMjByYWNpbmclMjBhY3Rpb258ZW58MXx8fHwxNzczODM3ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Os Primaços em ação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#FF6B00]/30"></div>
        
        {/* Dust particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00]/50 rounded-full px-6 py-2">
            <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-semibold">EQUIPA OFICIAL DE MOTOCROSS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
            OS PRIMAÇOS
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3 text-[#FF6B00]">
              <span className="inline-flex items-center rounded-full border border-[#FF6B00]/50 bg-black/35 px-4 py-2 text-sm sm:text-base md:text-lg font-bold backdrop-blur-sm [animation:heroTaglineChip_3.2s_ease-in-out_infinite]">
                Velocidade
              </span>
              <span
                className="inline-flex items-center rounded-full border border-[#FF6B00]/50 bg-black/35 px-4 py-2 text-sm sm:text-base md:text-lg font-bold backdrop-blur-sm [animation:heroTaglineChip_3.2s_ease-in-out_infinite]"
                style={{ animationDelay: '0.25s' }}
              >
                Paixão
              </span>
              <span
                className="inline-flex items-center rounded-full border border-[#FF6B00]/50 bg-black/35 px-4 py-2 text-sm sm:text-base md:text-lg font-bold backdrop-blur-sm [animation:heroTaglineChip_3.2s_ease-in-out_infinite]"
                style={{ animationDelay: '0.5s' }}
              >
                Adrenalina
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Somos mais do que uma equipa de motocross. Somos uma família unida pela paixão 
              pelo off-road, pela velocidade e pelo espírito competitivo que nos define. 
              Cada corrida é uma batalha, cada pista um desafio, cada momento uma conquista.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-white hover:text-[#FF6B00] transition-colors group"
      >
        <span className="text-sm font-semibold">Ver Mais</span>
        <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
      </button>

      <style>{`
        @keyframes heroTaglineChip {
          0%,
          100% {
            transform: translateY(0);
            border-color: rgba(255, 107, 0, 0.5);
            box-shadow: 0 0 0 rgba(255, 107, 0, 0);
          }
          50% {
            transform: translateY(-3px);
            border-color: rgba(255, 107, 0, 0.9);
            box-shadow: 0 10px 22px rgba(255, 107, 0, 0.25);
          }
        }
      `}</style>
    </section>
  );
}
