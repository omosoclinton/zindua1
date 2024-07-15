import React, {useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar () {
   
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#244855', padding: '15px', color:'black' }}>
                <div className="container-fluid" style={{color:'black'}}>
                    <Link className="navbar-brand" to='/' >Countries Fact</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Continents
                                </a>
                                <ul className="dropdown-menu">
                                    {/* We will have links to continents here */}
                                    <li><Link className="dropdown-item" to='/continent' state={'Africa'} href="#">Africa</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'Antarctica'} href="#">Antarctica</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'Asia'} href="#">Asia</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'Europe'} href="#">Europe</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'North America'} href="#">North America</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'Oceania'} href="#">Oceania</Link></li>
                                    <li><Link className="dropdown-item" to='/continent' state={'South America'} href="#">South America</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <SearchBar/>
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