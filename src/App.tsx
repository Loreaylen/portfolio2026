import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience.tsx'
import Projects from './components/Projects/Projects.tsx'
import Skills from './components/Skills/Skills.tsx'
import Education from './components/Education/Education.tsx'
import Contact from './components/Contact/Contact.tsx'
import Footer from './components/Footer/Footer.tsx'

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
        <Education/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App
