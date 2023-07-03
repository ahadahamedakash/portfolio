
import './App.css'
import Banner from './Components/Banner/Banner'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <div style={{ backgroundColor: "#000000" }} className='max-w-screen-xl mx-auto'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
