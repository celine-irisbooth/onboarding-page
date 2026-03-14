import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { TeamSection } from './components/TeamSection/TeamSection';
import { Timeline } from './components/Timeline/Timeline';
import { PSPSection } from './components/PSPSection/PSPSection';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TeamSection />
      <Timeline />
      <PSPSection />
      <Footer />
    </>
  );
}
