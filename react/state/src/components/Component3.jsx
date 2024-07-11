import React, {useContext} from 'react'
import Component4 from './Component4'
import { NameContext } from '../App'

function Component3 () {
    const name = useContext(NameContext)
    return (
        <>
            <h3>Component3: {name} </h3>
            <Component4/>
        </>
    )
}


export default Component3