import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience.tsx'
import Projects from './components/Projects/Projects.tsx'
import Skills from './components/Skills/Skills.tsx'
import Contact from './components/Contact/Contact.tsx'
import Footer from './components/Footer/Footer.tsx'
import ThemeProvider from './context/ThemeContext.tsx'

function App() {

  return (
    <>
    <ThemeProvider>
      <Header /> 
      <main className='pt-5'>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
