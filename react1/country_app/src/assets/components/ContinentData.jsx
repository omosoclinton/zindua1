import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "./CountryCard";

function ContinentData() {
    // Create a varibale array to hold our data
    const [continentsData, setContinentData] = useState([])
    const continentName = useLocation().state

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
            <div className='container'>
                <div className='row'>
                    {
                     continentsData.filter(country => country.continents.includes(continentName))
                        .map((country, index)=>{
                            return (
                                <CountryCard fetchedData={country}/>
                            )
                     })
                    }

                </div>
            </div>
        </>
    )
}

export default ContinentData