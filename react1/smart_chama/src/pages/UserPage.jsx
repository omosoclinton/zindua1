import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import UserProfile from "../components/UserProfile";
import app from "../firebaseconfig";
import { getDatabase, ref, get } from "firebase/database";

function UserPage() {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        async function getData() {
            const db = getDatabase(app)
            const dbRef = ref(db, "smartchama/users")
            const snapshot  = await get(dbRef)

            if(snapshot.exists()) {

                let data = snapshot.val()
                let objectsWithKeys = Object.values(data).map((userObject) => {
                    const userId = Object.keys(userObject)[0]; 
                    const userData = userObject[userId];
                    return { ...userData, userId };
                  });
                setUsers(objectsWithKeys)
            }
        }
        getData()
    }, [])
    return (
        <>
            <NavBar />
            <div className='container-fluid row' id='holder-container' style={{ }}>
                {
                    users.map((user, index) => {
                        return (
                            <>
                                <UserProfile user ={user}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserPage