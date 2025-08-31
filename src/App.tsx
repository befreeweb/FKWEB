import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { FoundingMember } from './components/FoundingMember';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Problem />
              <Solution />
              <TokenFlow />
              <CompetitiveAdvantage />
              <Roadmap />
              <Team />
              <BusinessModel />
              <CTA />
            </>
          } />
          <Route path="/founding-member" element={<FoundingMember />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;