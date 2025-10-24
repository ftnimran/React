import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
// import Sections from './components/Sections.jsx'
// import Footer from './components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Navbar />
        <Hero />
        {/* <Sections />
        <Footer /> */}
    </>
  )
}

export default App
