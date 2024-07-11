import { useState } from 'react'
import './App.css'
import MyDiv from './components/MyDiv.jsx'
import MyOtherDiv from './components/MyOtherDiv.jsx'
import MyHeader from './components/MyHeader.jsx'
import MyFooter from './components/MyFooter.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <MyHeader/>
      </nav>
      <div className='arrangeRows'>
        <MyDiv/>
        <MyDiv/>
        <MyDiv/>
        <MyDiv/>
        <MyOtherDiv/>
        <MyOtherDiv/>
      </div>
      <footer>
        <MyFooter/>
      </footer>
    </>
  )
}



export default App
