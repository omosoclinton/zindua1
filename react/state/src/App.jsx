import React, { useState, createContext } from 'react'
import Component1 from './components/Componet1'

import './App.css'
export const NameContext = createContext()

function App() {
  const [name, setName] = useState("James Kubo")

  return (
    <>
      <h1 className='' style={{fontFamily:'sans-serif'}}>App</h1>
      <p>Hello {name}</p>
      <button type="button" onClick={()=>setName("Jane Doe")}>Change Name</button>
      <NameContext.Provider value = {[name, setName]} >
        <Component1 /> 
      </NameContext.Provider>
          
    </>
  )
}

export default App
