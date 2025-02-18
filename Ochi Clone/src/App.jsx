import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Feature from './Components/feature';
const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen '>
     <Navbar />
     <LandingPage />
     <Marquee />
     <About />
     <Eyes />
     <Feature />
     <Cards />
     <Footer />
    </div>
  )
}

export default App
