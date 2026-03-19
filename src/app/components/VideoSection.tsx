import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FF6B00 0, #FF6B00 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/20 backdrop-blur-sm border border-[#FF6B00]/50 rounded-full px-6 py-2 mb-4">
            <Play className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-[#FF6B00] font-semibold">PODFAST</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Histórias da Pista
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubra os bastidores, as histórias e os momentos que definem Os Primaços
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Video Container with Gradient Border */}
            <div className="relative bg-gradient-to-br from-[#FF6B00] via-[#FF8C3A] to-[#FFB366] p-1 rounded-2xl shadow-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/aOJYT9P_Oqc"
                    title="Os Primaços - Podcast"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B00]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D5016]/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="https://www.youtube.com/@os.prima%C3%A7os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-md rounded-full px-8 py-4 border border-white/10 hover:border-[#FF6B00]/60 transition-colors"
          >
            <span className="text-white font-semibold">Subscreve o nosso canal</span>
            <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
