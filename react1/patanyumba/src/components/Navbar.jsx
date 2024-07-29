import React from "react";
import Modal from "./Modal";
import Home from "../pages/Home";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="site-header">
                <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: '#244855', padding: '10px', color: 'black' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>PataNyumba</Link>
                        <ul>
                            <Link to="/login" className="btn btn-primary" style={{ marginLeft: '10px', marginRight: '10px',}}>Login</Link>
                            <Link to="/register" className="btn btn-primary">REGISTER</Link>
                        </ul>
                    </div>
                </nav>
                <br />
                <br />
            </header>
            
        </>
    )
}

export default Navbar