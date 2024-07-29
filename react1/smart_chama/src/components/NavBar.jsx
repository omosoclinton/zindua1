import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244860', padding: '10px', color: 'black' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontSize: '2rem' }}>Smart Chama</a>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            More Info
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link to="/userpage" className="dropdown-item" style={{ marginRight: '10px' }}>Users</Link></li>
                            <li><Link to="/userpage" className="dropdown-item" style={{ marginRight: '10px' }}>Home</Link></li>
                            <li><Link to="/financials" className="dropdown-item">Events Page</Link></li>
                            <li><Link to="/" className="dropdown-item">Log Out</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar