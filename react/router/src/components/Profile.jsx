import React from "react";
import NavBar from "./NavBar";
import ProfileChild from "./ProfileChild";
import {useParams, Link, Outlet} from 'react-router-dom'


const Profile = () => {
    const profiles = ['Ian', 'Obsidian', 'Gillian', 'Julian']
    const params = useParams()
    return (
        <>
            <NavBar/>
            <div className="row">
                {
                    profiles.map((profile, index)=>{
                        return (
                            <>
                                <Link to={'/profile/'+profile} className="mr-4 nav-link">{profile}</Link>
                            
                            </>
                        )
                    })
                }
            </div>
            <div className="">
                <Outlet/>
            </div>
        </>
    )
}

export default Profile