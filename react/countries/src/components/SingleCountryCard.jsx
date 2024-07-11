import React from "react";
import { Link, useLocation } from "react-router-dom";
import BorderPage from './BorderPage.jsx'

function MoreInfoCard () {
    const stateCountries = useLocation()
    let moreCountryInfo = stateCountries.state
    let currencyKeys = Object.values(moreCountryInfo.currencies)
    let languageValues = Object.values(moreCountryInfo.languages)
    console.log(moreCountryInfo)
    return (
        <>
                <div className="card">
                <h3 className="card-title">{moreCountryInfo.name.official} <span className="text-muted">({moreCountryInfo.cca3})</span></h3>
                    {/* Flag */}
                    <div className="bg-image hover-overlay"> 
                        <img src={moreCountryInfo.flags.png} className="img-fluid col-md-4" alt="Nature" style={{margin:'5px'}} />
                        <img src={moreCountryInfo.coatOfArms.png} className="img-fluid col-md-3" alt="Nature" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">More About {moreCountryInfo.name.common}</h5>
                    <div className="row">
                        <div className="col-md-3">
                            <p className="card-text">Capital: {moreCountryInfo.capital}</p>
                            <p className="card-text">Continent: {moreCountryInfo.continents[0]}</p>
                            <p className="card-text">Population: {moreCountryInfo.population}</p>
                            <p className="card-text">Area: {moreCountryInfo.area} Km<sup>2</sup> </p>
                        </div>
                        <div className="col-md-3">
                            <p className="card-text">Language: {languageValues[0]}</p>
                            <p className="card-text">Currency: {currencyKeys[0].name} <span className="text-muted">({currencyKeys[0].symbol})</span></p>
                            <p className="card-text">{moreCountryInfo.landlocked? <span>Country is landlocked</span>: <span>Country not landlocked</span> }</p>
                            <p className="card-text">Timezone: {moreCountryInfo.timezones[0]}</p>
                        </div>
                        <div className='col-md-3'>
                            <h5 className="card-title">The Neigbouring countries include</h5>
                            <BorderPage newData={moreCountryInfo}/>
                        </div>                       
                    </div>
                    </div>
                    <a href={moreCountryInfo.maps.googleMaps} target="_blank"> View Map</a>
                </div>
        </>
    )
}

export default MoreInfoCard


