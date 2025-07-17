import React from 'react';
import SuccessSection from './components/landing/SuccessSection'
import FAQ from './components/landing/FAQ'
import ResearchSkills from './components/landing/ResearchSkills'
import Work from './components/landing/Work'


function App() {
  return (
    <div>
      <SuccessSection />
      <ResearchSkills/>
      <Work/>
  
      <FAQ />


    </div>
  );
}

export default App;
