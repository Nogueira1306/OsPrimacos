import { Award } from 'lucide-react';

const sponsors = [
  {
    id: 1,
    name: 'The Others',
    siteLabel: 'theothers.pt',
    logoSrc: new URL('../../../images/sponsors/theothers.jpg', import.meta.url).href,
    url: 'https://theothers.pt/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQVabJSjnZFdWwreT1Qpk5BVcGUhP_dSd724wCJajTGsgVNYfTzXbizkve_o_aem_7UKmStXsafnJA3Q4slMgZw'
  },
  {
    id: 2,
    name: '2 Wheels Statio',
    siteLabel: '@2_wheels_station',
    logoSrc: new URL('../../../images/sponsors/2ws.jpg', import.meta.url).href,
    url: 'https://www.instagram.com/2_wheels_station/'
  }
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-white relative">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#FF6B00]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 rounded-full px-6 py-2 mb-4">
            <Award className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-[#FF6B00] font-semibold">PARCEIROS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
            Os Nossos Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apoiam-nos na nossa jornada e acreditam no nosso potencial
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar sponsor ${sponsor.name}`}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#FF6B00] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Logo Container */}
              <div className="relative aspect-[4/3] flex items-center justify-center">
                <img
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Sponsor Label */}
              <div className="pt-4 text-center">
                <p className="text-sm font-semibold text-gray-900">{sponsor.siteLabel}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 group-hover:from-[#FF6B00]/5 group-hover:to-[#FF8C3A]/5 rounded-2xl transition-all duration-300"></div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
