import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cardcontainer from './components/cardContainer'


// use useContext to give access to all pages

function App() {
  
  return (
    <>
    <Navbar/>
    <Cardcontainer/>
    <Footer/>
    </>
  )
}

export default App
