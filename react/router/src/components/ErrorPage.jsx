import React from "react";
import NavBar from "./NavBar";
import errorpage from '../assets/error404.jfif'

const ErrorMsg = () => {
    return (
        <>
            <NavBar/>
            <div>
                <img src={errorpage} alt="" srcset="" />
                {/* <h1 className="display-6">404 Not Found</h1>
                <h4>Try again</h4> */}
            </div>
        </>
    )
}

export default ErrorMsg