import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const params = useParams();
    console.log(params)
    return (
        <>
            <h1 className="display-5">Profile Page: {params.profileID}</h1>
        </>
    )
}

export default Profile