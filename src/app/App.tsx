import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { About } from "./components/About";
import { MissionVision } from "./components/MissionVision";
import { Projects } from "./components/Projects";
import { Impact } from "./components/Impact";
import { Donation } from "./components/Donation";
import { Gallery } from "./components/Gallery";
import { Volunteer } from "./components/Volunteer";
import { SocialSection } from "./components/SocialSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <About />
      <MissionVision />
      <Projects />
      <Impact />
      <Donation />
      <Gallery />
      <Volunteer />
      <SocialSection />
      <Footer />
    </div>
  );
}
