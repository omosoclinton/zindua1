import React, { useState } from "react";
import user1 from '../assets/img/user1.jpg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";



const UserMoreDetails = () => {
    const  lokeshen = useLocation()
    const user = lokeshen.state
    console.log(user)
    return (
        <>
            <NavBar/>
            <div className="card" id="holder-container" style={{ width: "30%", margin: "15px" }}>
                <img src={user1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{user.userFullName}</h5>
                    <p className="card-text">Member</p>
                    <p className="card-text">{user.userIdNumber}</p>
                    <p className="card-text">{user.userEmail}</p>
                    <Link type="button" to='/updateuser' state={user} className="btn btn-primary">Update User</Link>
                </div>
            </div>

        </>
    )
}
export default UserMoreDetails;

// {
//     username: values.username,
//     password: values.password,
//     userFullName: values.userFullName,
//     userIdNumber: values.userIdNumber,
//     userEmail: values.userEmail
// }