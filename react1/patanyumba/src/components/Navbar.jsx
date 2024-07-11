import React from "react";
import Modal from "./Modal";
import Home from "../pages/Home";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244855', padding: '10px', color:'black' }}>
                <div className="container-fluid">

                    <a className="navbar-brand">PataNyumba</a>
                    <ul>
                        <Modal />
                        <Link to="/houses" className="btn btn-primary" style={{margin:'10px'}}>Houses</Link>
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </ul>

                </div>
                <br />
                <br />
            </nav>
            <br />
            <br />
            </header>
            
        </>
    )
}

export default Navbar