import { useState } from 'react'
import NavBar from './assets/components/NavBar'
import Registration from './assets/components/Registration'
import Login from './assets/components/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Login/>
    </>
  )
}

export default App
