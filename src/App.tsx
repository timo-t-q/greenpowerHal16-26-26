import { Hero } from './components/Hero';
import { TeamIntro } from './components/TeamIntro';
import { Planning } from './components/Planning';
import { Progress } from './components/Progress';
import { GreenpowerProjects } from './components/GreenpowerProjects';
import { Reflection } from './components/Reflection';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TeamIntro />
      <Planning />
      <Progress />
      <GreenpowerProjects />
      <Reflection />
      <Contact />
    </div>
  );
}