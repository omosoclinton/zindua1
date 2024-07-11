import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchNews from './components/FetchNews'

function App() {
  return (
    <>
     <h2>News App</h2>
     <FetchNews/>
    </>
  )
}

export default App
