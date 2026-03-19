import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    id: 1,
    url: new URL('../../../images/foto1.jpeg', import.meta.url).href,
    title: 'Em Ação'
  },
  {
    id: 2,
    url: new URL('../../../images/foto2.jpeg', import.meta.url).href,
    title: 'Salto Radical'
  },
  {
    id: 3,
    url: new URL('../../../images/foto3.jpeg', import.meta.url).href,
    title: 'Equipa Unida'
  },
  {
    id: 4,
    url: new URL('../../../images/foto4.jpeg', import.meta.url).href,
    title: 'Detalhe da Máquina'
  },
  {
    id: 5,
    url: new URL('../../../images/foto5.jpeg', import.meta.url).href,
    title: 'Poeira e Velocidade'
  }
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FF6B00] hover:bg-[#FF8C3A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FF6B00] hover:bg-[#FF8C3A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
}

export function PhotosSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="fotos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 rounded-full px-6 py-2 mb-4">
            <Camera className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-[#FF6B00] font-semibold">GALERIA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
            Momentos Épicos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada imagem conta uma história de superação, velocidade e paixão pelo motocross
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <Slider {...settings}>
            {photos.map((photo) => (
              <div key={photo.id} className="px-3">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .carousel-container .slick-dots {
          bottom: -50px;
        }
        .carousel-container .slick-dots li button:before {
          font-size: 12px;
          color: #FF6B00;
          opacity: 0.3;
        }
        .carousel-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #FF6B00;
        }
      `}</style>
    </section>
  );
}
