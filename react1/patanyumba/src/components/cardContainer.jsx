import React, {useEffect, useState} from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseconfig";
import Housecard from "./HouseCard";


const Cardcontainer = () =>{
    const [houses, setHouses] = useState([])

    useEffect(()=>{
        async function getData() {
            const db = getDatabase(app)
            const dbRef = ref(db, "patanyumba/houses")
            const snapshot = await get(dbRef)

            if(snapshot.exists()){
                let data = snapshot.val()

                console.log(data)
                let objectsWithKeys = Object.keys(data).map((key)=> {
                    return {
                        ...data[key],
                        houseID: key,
                    }
                })
                console.log(objectsWithKeys)
                setHouses(objectsWithKeys)
            }
        }
        getData()
    }, [])
        

    return(
        <>
        <div className="container houseContainer">
            <div className="row align-items-start">
               {
                houses.map((house, index) => {
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