import React, {useState, useReducer} from "react";

function Reducer (){
    const initialState = {count: 0}
    const [state, dispatch] = useReducer(reducer, initialState)
    let user = {
        name:'Ian',
        country:'Kenya',
        school:'CBC'
    }
    user = {...user, country:'UG'}
    return (
        <>
            <h1>Reducer </h1>
            <h1>{state.count}</h1>
            <button type="button" onClick={()=>{dispatch({type: "increment"})}}>Increase</button>
            <button type="button" onClick={()=>{dispatch({type: "increment"})}}>Decrease</button>
            <button type="button" onClick={()=>{dispatch({type: "reset"})}}>Decrease</button>

        </>
    )
}
 function reducer(state, action) {
    switch(action.type){
        case "Increment":
            //increment
            return {...state, count: state.count + 1}
        case "Decrement":
            //increment
            return { ...state, count: state.count - 1 }
        case "Decrement":
            //increment
            return { ...state, count: 0}
        default:
            return "Wrong action"
    }
 }

export default Reducer