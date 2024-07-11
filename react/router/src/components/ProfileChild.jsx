import React from "react";
import {useParams} from 'react-router-dom'
import Profile from "./Profile";

const ProfileChild = () => {
    const params = useParams()

    return (
        <>
        <h1>Profile: {params.profileId} </h1>
        </>
    )
}

export default ProfileChild