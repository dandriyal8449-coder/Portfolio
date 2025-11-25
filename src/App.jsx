import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Services from './components/Services/Services'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
