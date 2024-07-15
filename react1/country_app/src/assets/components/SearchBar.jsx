import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {

    // api
    const [apiCountries, setApiCountries] = useState([])

    // searchTerm stores what the user types
    const [searchCountry, setSearchCountry] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([]) // here we set thise array to empty, because it is empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // add useEffect to fetch data from an api
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json()) // fetch data and then jsonify
            .then(data => {
                setApiCountries(data)
                console.log(data)                //setFilteredCountries(data.users)
            }) // add our new user list to apiCountries. We now have a list to query from
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    // this function will handle what the user types
    // Here e is what is being typed, it is passed in and stored to searchTerm
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchCountry(searchTerm)

        // Filter here returns an array of elements matching what the user is typing
        // I'm thinking if we had an api, we just replace users with the fetched api
        // toLowerCase() is used to equalize search term and stored usernames

        const filteredItems = apiCountries.filter(
            (country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filteredItems)

    }
    //filteredCountries.map((country)=>{console.log(country.name.common)})


    return (
        <>
            <div>

                <input
                    type="search"
                    placeholder="Search"
                    value={searchCountry}
                    onChange={handleInputChange}
                />
                {loading && <p>Loading...</p>}
                {error && <p>There was an error loading country</p>}
                {!loading && !error && filteredCountries.length === 0
                    ? <p>No country found</p>
                    :
                    <div>
                        <ul>
                            {searchCountry ? filteredCountries.map(user => <li className='dropdown-item' key={user.id}> <Link to='/country' state={user}>{user.name.common}</Link></li>) : null}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default SearchBar

{/* <div className="dropdown">
<ul className="dropdown-menu">
    <li className="dropdown-item">
        {console.log(searchCountry)}
        {searchCountry ? filteredCountries.map((country, index) => {<Link to='/country'key={country.index} state={country}>{country.name.common}</Link>}) : ''}
        {searchCountry? filteredCountries.map(user => <li key={user.id}> <Link to='/country' state={user}>{user.name.common}</Link></li>): null}
    </li>
</ul>
</div> */}