import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function SearchBar () {

    // api
    const [apiUsers, setApiUsers] = useState([])         
 
    // searchTerm stores what the user types
    const [searchItem, setSearchItem] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([]) // here we set thise array to empty, because it is empty
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // add useEffect to fetch data from an api
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json()) // fetch data and then jsonify
            .then(data => {
                setApiUsers(data)
                console.log(data)
                //setFilteredUsers(data.users)
            }) // add our new user list to apiUsers. We now have a list to query from
            .catch(err => {
                console.log(err)
                setError(err)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])
    
    // this function will handle what the user types
    // Here e is what is being typed, it is passed in and stored to searchTerm
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        // Filter here returns an array of elements matching what the user is typing
        // I'm thinking if we had an api, we just replace users with the fetched api
        // toLowerCase() is used to equalize search term and stored usernames

        const filteredItems = apiUsers.filter(            
            (user) => user.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredItems)


    }
    return(
        <>
            <div>

                <input
                    type="search"
                    placeholder="Search"
                    value={searchItem}
                    onChange={handleInputChange}
                />
                {loading && <p>Loading...</p>}
                {error && <p>There was an error loding country</p>}
                {!loading && !error && filteredUsers.length === 0
                    ? <p>No country found</p>
                    : <p>
                        {filteredUsers.map(user =><Link to='/country' state={user}>{user.name.common}</Link>)}
                     </p>
                }
            </div>
        </>
    )
}

export default SearchBar