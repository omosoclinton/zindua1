import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="display-3">404 Not Found</div>
            <Link to="/"> Home from Link</Link>
        </div>
    )
}

export default NotFoundPage