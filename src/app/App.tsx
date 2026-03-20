import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhotosSection } from './components/PhotosSection';
import { VideoSection } from './components/VideoSection';
import { SponsorsSection } from './components/SponsorsSection';
import { Footer } from './components/Footer';
import CookieManager from './components/CookieManager';
import CookiesPolicy from './components/Cookies';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === '/cookies') {
    return (
      <div className="min-h-screen bg-black">
        <CookiesPolicy />
        <Footer />
        <CookieManager />
      </div>
    );
  }

  if (path === '/privacy') {
    return (
      <div className="min-h-screen bg-black">
        <Privacy />
        <Footer />
        <CookieManager />
      </div>
    );
  }

  if (path === '/terms') {
    return (
      <div className="min-h-screen bg-black">
        <Terms />
        <Footer />
        <CookieManager />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PhotosSection />
        <VideoSection />
        <SponsorsSection />
      </main>
      <Footer />
      <CookieManager />
    </div>
  );
}
