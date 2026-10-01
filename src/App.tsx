import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience.tsx'
import Projects from './components/Projects/Projects.tsx'
import Skills from './components/Skills/Skills.tsx'

function App() {

  return (
    <>
      <Header/> 
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
      </main>
    </>
  )
}

export default App
