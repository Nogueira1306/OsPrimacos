import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhotosSection } from './components/PhotosSection';
import { VideoSection } from './components/VideoSection';
import { SponsorsSection } from './components/SponsorsSection';
import { Footer } from './components/Footer';

export default function App() {
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
    </div>
  );
}
