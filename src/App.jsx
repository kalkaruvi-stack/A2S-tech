
import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import ServicesBanner from './components/ServicesBanner'
import ContactPage from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
     <Herosection />
      <About />
      <ServicesBanner />
      <ContactPage /> 
      <Footer />
    </div>
  )
}

export default App

