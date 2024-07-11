import React from "react";
import NavBar from "./NavBar";
import {useParams} from 'react-router-dom'

const Settings = () => {
    const params = useParams()
    return (
        <>
            <NavBar/>
            <h1 className="display-6">Settings: {params.settingsId}</h1>
        </>
    )
}

export default Settings