import React from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'
import {NameContext} from '../App'

function Component5 () {
    const [name, setName] = useState(useContext(NameContext))
    
    return (
        <>
            <h5>Component5</h5>
            <p>Hello {name}</p>
            <button type="button" onClick={()=>setName("Kamau John")}>Change Name</button>
        </>
    )
}

export default Component5