import React, { useState } from "react";
import user1 from '../assets/img/user1.jpg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const UserProfile = ({user}) => {
    return (
        <>

            <div className="card" style={{ width: "30%", height: "30%",margin: "15px" }}>
                <img src={user1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{user.userFullName}</h5>
                    <p className="card-text">Member</p>
                    {/* Put a ternary condition to show button for secretary and treasurer */}
                    <Link type="button" to='/viewmore' state={user} className="btn btn-primary">View More</Link>
                </div>
            </div>

        </>
    )
}
export default UserProfile