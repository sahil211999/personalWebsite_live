import React from 'react';
import './App.css';
import MainHero from './components/hero'
import AboutSect from './components/about';
import Experience from './components/experience';
import Projects from './components/projects'
import Leadership from './components/leadership';
import Signature from './components/signature';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ paddingTop: '64px' }}>
        <section id="home">
          <MainHero />
        </section>

        <section id="about">
          <AboutSect />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="leadership">
          <Leadership />
        </section>

        <section id="contact">
          <Signature />
        </section>
      </div>
    </div>
  );
}

export default App;
