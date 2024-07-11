import React from "react";
import NavBar from "./NavBar";
import UserCard from "./UserCard";
import {Link} from 'react-router-dom'

const Users = () => {
    //something
    const users = [
        {
            name:'Dan',
            age:25,
            profession:'Driver',
            country:'Kenya'
        },
        {
            name:'Ken',
            age:27,
            profession:'Engineer',
            country:'Tanzania'
        },
        {
            name:'Tonny',
            age:26,
            profession:'Lawyer',
            country:'Uganda'
        },
        {
            name:'Museveni',
            age:80,
            profession:'President',
            country:'Uganda'
        },
        {
            name:'Suluhu',
            age:67,
            profession:'President',
            country:'Tanzania'
        },
        {
            name:'Kagame',
            age:77,
            profession:'Dictator',
            country:'Rwanda'
        }
    ]
    return (
        <>
            <NavBar />
            <h1>Users</h1>
            <div className="row justify-content-center">
                {
                    users.map((user, index) => {
                        return (
                            //something
                           <UserCard user ={user}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users