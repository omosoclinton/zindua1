import React from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";



function CountryCard ({fetchedData}) {
    
    return (
        <>
                <Link to='/country' state={fetchedData} className="card col-md-3" style={{ margin: '5px' }}>
                    {/* Flag */}
                    <div className="bg-image hover-overlay">
                        <img src={fetchedData.flags.png} className="img-fluid" alt="Nature" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{fetchedData.name.official} <span className="text-muted">({fetchedData.cca3})</span></h5>
                        <p className="card-text">Capital: {fetchedData.capital}</p>
                        <p className="card-text">Region: {fetchedData.continents[0]}</p>
                    </div>
                </Link>
        </>
    )
}

export default CountryCard