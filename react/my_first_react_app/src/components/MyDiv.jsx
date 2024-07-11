import React from 'react'
import ButtonSections from './ButtonSections'
const MyDiv = () =>{
    return (
      <>
         <div className='myDiv'>
         <div className='divBar'>
            <h2>Zindua School</h2>
            <p>A coding bootcamp</p>
          </div>
          <h1>Hello, React.</h1>
          <p>React is a JavaScript Library</p>
          <ButtonSections/>
        </div>
      </>
    )
  }

  export default MyDiv