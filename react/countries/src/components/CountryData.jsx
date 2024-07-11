import React, {useEffect, useState} from "react";
import CountryCard from "./CountryCard";

function FetchCountryData () {

    // Create a varibale array to hold our data
    const [countriesData, setCountryData] = useState([]) 

    // Fetch the data using useEffect
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then((response)=>{
                response.json().then((resp)=>{
                    setCountryData(resp)
                })
            })
    },[])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        countriesData.map((countryData, index)=>{
                            return (
                                <CountryCard fetchedData={countryData}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default FetchCountryData

