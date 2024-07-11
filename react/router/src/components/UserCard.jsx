import React from "react";
import {Link} from 'react-router-dom'

export default function UserCard({user}) {
    return (
        //something
        <>
            <div className="col-md-3" style={{ margin: '2px' }}>
                <div className="card cardi" >
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.profession}</h6>
                        <p className="card-text"> Country: {user.country} </p>
                        <Link to="/userprofile" state={user} className="card-link">View</Link>
                        <Link href="#" className="card-link">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}