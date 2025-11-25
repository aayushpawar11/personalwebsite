import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="animated-bg"></div>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <WorkExperience />
      <Projects />
    </div>
  )
}

export default App

