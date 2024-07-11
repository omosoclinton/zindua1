import React, {useState} from "react";



function NavBar () {
   
    return (
        <>
        <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244855', padding: '15px', color:'black' }}>
                <div className="container-fluid" style={{color:'black'}}>
                    <a className="navbar-brand" >News App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News From The Clobe
                                </a>
                                <ul className="dropdown-menu">
                                    {/* We will have as to continents here */}
                                    <li><a className="dropdown-item"  href="#">Africa</a></li>
                                    <li><a className="dropdown-item"  href="#">Antarctica</a></li>
                                    <li><a className="dropdown-item"  href="#">Asia</a></li>
                                    <li><a className="dropdown-item"  href="#">Europe</a></li>
                                    <li><a className="dropdown-item"  href="#">North America</a></li>
                                    <li><a className="dropdown-item"  href="#">Oceania</a></li>
                                    <li><a className="dropdown-item"  href="#">South America</a></li>
                                </ul>
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