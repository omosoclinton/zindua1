import React, { useState } from "react";
import user1 from '../assets/img/user1.jpg'


const SavingsCard = () => {

    return (
        <>
            <div className="card" style={{ width: "30%", height: '30%', margin: "15px" }}>
                <img src='' className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Total savings</h5>
                    <h5 className="card-title">Total shares</h5>
                    <h5 className="card-title">Total loans</h5>

                </div>
            </div>
        </>
    )
}
export default SavingsCard