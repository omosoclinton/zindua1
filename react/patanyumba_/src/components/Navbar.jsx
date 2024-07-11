import React from "react";
import Modal from "./Modal";
import Home from "../pages/Home";
import { Link, Outlet } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <nav className="navbar updatedNav">
                <div className="container-fluid">
                    <a className="navbar-brand">PataNyumba</a>
                    <Modal />
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                        <Link to="/houses" className="btn btn-primary">Houses</Link>
                        <Link to="/" className="btn btn-primary">Home</Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar