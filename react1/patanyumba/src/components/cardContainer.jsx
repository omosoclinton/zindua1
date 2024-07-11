import React from "react";
import Housecard from "./HouseCard";
import berean from '../assets/berean.jfif'
import canaanimg from '../assets/canaan.jpeg'
import dallasimg from '../assets/dallas.jfif'
import mariamuimg from '../assets/mariamu.jfif'
import elgonimg from '../assets/elgon.jfif'
import aberdaresimg from '../assets/aberdares.jfif'

const Cardcontainer = () =>{
    let listHouses = [
    {
        houseName:"Berean Estate",
        houseSize:"4br + SQ",
        housePrice:"60000",
        location:"Utawala",
        img:berean,
        text:"This house is located in a gated community. Boasting an own compound and communal amenities like swimming pool, gym and playing field"
    },
    {
        houseName:"Canaan Heights",
        houseSize:"2br",
        housePrice:"20000",
        location:"Kinoo",
        img:canaanimg,
        text:"These amazing house is located in a newly developed estate. The Apartment has enough parking space, standby generator and CCTV Surveillance, 24/7 security "
    },
    {
        houseName:"Dallas Apt",
        houseSize:"1br",
        housePrice:"17000",
        location:"Imara Daima",
        img:dallasimg,
        text:"Beautifully designed houses that insist on space, comfort, soft life. You can host an AirBNB"
    },
    {
        houseName:"Mariamu Estates",
        houseSize:"3br + SQ",
        housePrice:"40000",
        location:"Lang'ata",
        img:mariamuimg,
        text:"This house is located in a leafy suburb, ideal for a young couple with a new born. Hospital, and daycare in the vicinity"
    },
    {
        houseName:"Elgon View",
        houseSize:"4br + sq",
        housePrice:"40000",
        location:"Eldoret",
        img:elgonimg,
        text:"For it's price and location, this is a steal. It's a modern house with everything you might need."
    },
    {
        houseName:"Aberdares Flats",
        houseSize:"1br",
        housePrice:"15000",
        location:"Ruaka",
        img:aberdaresimg,
        text:"Located in the leafy environs of Ruaka, this house is exactly what a newly employed DEV wants."
    }
    ]
    return(
        <>
        <div className="container houseContainer">
            <div className="row align-items-start">
               {
                listHouses.map((house, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <Housecard house={house}/>
                        </div>
                    )
                })
               }
            </div>
        </div>
        
        </>
    )
}

export default Cardcontainer

{
    /*
     <div className="col-md-4">
                    <Housecard house={berea} />
                </div>
                <div className="col-md-4">
                    <Housecard house={canaan}/>
                </div>
                <div className="col-md-4">
                    <Housecard house={dallas}/>
                </div>
                <div className="col-md-4">
                    <Housecard house={mariamu}/>
                </div>
                <div className="col-md-4">
                    <Housecard house={elgon}/>
                </div>
                <div className="col-md-4">
                    <Housecard house={aberdares}/>
                </div>
    */
}