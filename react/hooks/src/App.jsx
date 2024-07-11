import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import HookUseRef from './components/ComponentUseRef'

import HookUseMemo from './components/ComponentUseMemo'
function App() {

  return (
    <>
      <HookUseRef/>
      <HookUseMemo/>
    </>
  )
}

export default App
