import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import AccountComponent from '../components/accounts/AccountsComponent';
document.querySelectorAll('.form-outline').forEach((formOutline) => {
    new Input(formOutline).init();
});



const Account = () => {
    return (
        <>
            <NavBar />
            <div className='container-fluid row' id='holder-container' style={{border:'1px solid black'}}>
            </div>

        </>
    )
}

export default Account