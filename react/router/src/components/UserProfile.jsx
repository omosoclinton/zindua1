import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function UserProfile () {
    const locationId = useLocation()
    const user = locationId.state
    return (
        <>
            <NavBar/>
            <div className="userprofilecard">
                <h1>{user.name}</h1>
                <h5>{user.age}</h5>
                <h5>{user.profession}</h5>
                <h2>{user.country}</h2>
            </div>
        </>
    )
}

export default UserProfile