import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
    const profiles = [1,2,3,4]
    return (
        <>
            <div className="d-flex">
                <div className="d-flex flex-column mb-3">
                    {profiles.map((profile) => (
                        <NavLink key={profile} to={`/ProfilesPage/${profile}`}>
                            Profile: {profile}
                        </NavLink>
                    ))}
                </div>
               
                <Outlet/>
            </div>
        </>
    )
}

export default ProfilesPage