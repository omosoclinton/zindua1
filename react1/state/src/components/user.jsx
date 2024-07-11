import React, {useState, useReducer} from "react";

function User () {
    const initialUseState = {
        name:'Noni',
        age:32,
        country:'KE',
        course:'Accounts',
        profession:'Accountant'
    }
    const [state, dispatch] = useReducer(userReducer, initialUseState)
    const updateUser = () => {
        dispatch ({
            type:'update_user',
            payload:{
                name:'Nini',
                age:17,
                country:'tz',
                course:'law',
                profession:'lawyer'
            }
        })
    }
    return (
        <>
            <h1>User</h1>
            <h3>Name: {state.name}</h3>
            <h3>Age: {state.age}</h3>
            <h3>Country: {state.country}</h3>
            <h3>Course: {state.course}</h3>
            <h3>Profession: {state.profession}</h3>
            <br/>
            <br />
            <button type="button" onClick={updateUser}>Update user</button> 
            <button type="button" onClick={()=>{dispatch({type: "update_name", payload: 'Alvin'})}}>Update Name</button>
            <button type="button" onClick={()=>{dispatch({type: "update_profession", payload:'Actor'})}}>Update Profession</button>
            <button type="button" onClick={()=>{dispatch({type: "check_eligibility", payload: 'Alvin'})}}>Check Eligibility</button>
        </>
    )
}

const userReducer = (state, action) => {
    switch(action.type){
        case "update_user":
            return action.payload
        case "update_name":
        return {...state, name: action.payload}
        case "update_profession":
            return { ...state, profession: action.payload }
        case "check_eligibility":
            if(state.age > 18) {
                alert('allowed')
            }else{
                alert('not allowe')
            }
        default:
            return state
    }
}

export default User