import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-[90%] max-w-[1000px] m-auto'>
      <div className='min-h-screen'>
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App