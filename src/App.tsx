import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo';
import { Team } from './components/Team';
import { Learning } from './components/Learning';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <WhatWeDo />
      <Team />
      <Learning />
      <Journey />
      <Contact />
    </div>
  );
}