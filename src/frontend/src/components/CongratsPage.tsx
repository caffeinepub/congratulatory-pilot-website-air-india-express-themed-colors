import ThemeShell from './ThemeShell';
import HeroSection from './sections/HeroSection';
import HighlightsSection from './sections/HighlightsSection';
import AircraftPhotoSection from './sections/AircraftPhotoSection';
import Footer from './Footer';

export default function CongratsPage() {
  return (
    <ThemeShell>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <HighlightsSection />
        <AircraftPhotoSection />
        <Footer />
      </div>
    </ThemeShell>
  );
}
