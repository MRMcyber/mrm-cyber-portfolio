import { useState } from 'react';
import Navbar from './components/Navbar';
import MatrixRain from './components/MatrixRain';
import Terminal from './components/Terminal';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGraph from './components/SkillsGraph';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Glossary from './components/Glossary';
import './App.css'; // Will create/clear this

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="app">
      <MatrixRain />
      <Navbar
        toggleTerminal={() => setTerminalOpen(!terminalOpen)}
        terminalOpen={terminalOpen}
      />
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <main className="main-content">
        <Hero />
        <About />
        <SkillsGraph />
        <Projects />
        <Education />
        <Glossary />
        <Contact />
      </main>
    </div>
  );
}

export default App;
