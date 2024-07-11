import React, {useState, useEffect} from "react";
import CountryCard from "./CountryCard";
import NavBar from "./NavBar";
import { useLocation, Link } from "react-router-dom";

function Neiba () {
    const countryCCA= useLocation().state
    const [continentsData, setContinentData] = useState([])

    // Fetch the data using useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                response.json().then((resp) => {
                    setContinentData(resp)    
                })
            })
    }, [])
    return (
        <>
            <NavBar/>
            <div className='container'>
                <div className="col">
                    {
                     continentsData.filter(country => country.cca3.includes(countryCCA))
                        .map((country, index)=>{
                            return (
                                <Link to='/country' state={country} className="card" style={{ margin: '5px' }}>
                                {/* Flag */}
                                <div className="bg-image hover-overlay">
                                    <img src={country.flags.png} className="img-fluid" alt="Nature" />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{country.name.official} <span className="text-muted">({country.cca3})</span></h5>
                                    <p className="card-text">Capital: {country.capital}</p>
                                    <p className="card-text">Region: {country.continents[0]}</p>
                                </div>
                            </Link>
                            )
                     })
                    }

                </div>
            </div>
        </>
    )
}

export default Neiba
{
    
}