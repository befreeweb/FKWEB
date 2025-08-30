import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TokenFlow } from './components/TokenFlow';
import { CompetitiveAdvantage } from './components/CompetitiveAdvantage';
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { BusinessModel } from './components/BusinessModel';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <TokenFlow />
      <CompetitiveAdvantage />
      <Roadmap />
      <Team />
      <BusinessModel />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;