import React from 'react';
import './App.css';
import MainHero from './components/hero'
import AboutSect from './components/about';
import Experience from './components/experience';
import Projects from './components/projects'
import Leadership from './components/leadership';
import Signature from './components/signature';

function App() {
  return (
    <div className="App">
    
   <MainHero></MainHero>
   <AboutSect></AboutSect>
   <Experience></Experience>
   <Projects> </Projects>
   <Leadership></Leadership>
   <Signature> </Signature>
     
    </div>
  );
}

export default App;
