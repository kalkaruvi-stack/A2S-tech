
import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import ServicesBanner from './components/ServicesBanner'
import ContactPage from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
     <Herosection />
      <About />
      <ServicesBanner />
      <ContactPage /> 
    </div>
  )
}

export default App

