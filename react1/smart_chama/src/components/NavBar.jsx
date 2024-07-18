import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244860', padding: '10px', color: 'black' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontSize: '2rem' }}>Smart Chama</a>
                    <ul>
                        <Link to="/" className="btn btn-primary" style={{ marginRight: '10px' }}>Users</Link>
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar