import React, {useState} from "react";



function NavBar () {
   
    return (
        <>
        <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244855', padding: '15px', color:'black' }}>
                <div className="container-fluid" style={{color:'black'}}>
                    <a className="navbar-brand" >Form Registration</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" >Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            </header>
        </>
    )
}

export default NavBar