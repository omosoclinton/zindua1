import React from 'react'

function  ButtonSections() {
    return (
      <>
        <div className='buttons'>
          <button type='button' className='addButton'>Add</button>
          <button type='button' className='deleteButton'>Delete</button>
          {/* <button type='button' className='refreshButton'>Refresh</button> */}
        </div>
      </>
    )
  }

export default ButtonSections