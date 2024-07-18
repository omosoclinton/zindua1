import React from 'react';
import NavBar from '../../components/NavBar';
import Login from '../../components/Login';
import CreateAccount from '../../components/CreateAccount';

const Account = () => {
    return (
        <>
            <NavBar />
            <div className='container-fluid row' id='holder-container' style={{border:'1px solid black'}}>
                <Login />
                <CreateAccount />
            </div>

        </>
    )
}

export default Account