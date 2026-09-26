import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience.tsx'

function App() {

  return (
    <>
      <Header/> 
      <main>
        <Hero/>
        <About/>
        <Experience/>
      </main>
    </>
  )
}

export default App
