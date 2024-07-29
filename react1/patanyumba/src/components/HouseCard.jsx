import React, {useState} from "react";
import house_image from '../assets/house_image.jpeg'
import heart from '../assets/heart.svg'
import frown from '../assets/frown.svg'
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Housecard = ({house}) =>{
    
    let [likes, setLikes] = useState(0)
    let [disLikes, setDisLikes] = useState(0)
    function changeLikes () {
        setLikes(++likes)
    }
    function changeDisLikes () {
        setDisLikes(++disLikes)
    }
 
    return(
        <>
            {
                house ?
                <div className="card" style={{ width: "18rem", marginTop: "15px" }}>
                    <img src={house.image_url} className="card-img-top" alt="house image" />
                    <div className="card-body">
                        <h5 className="card-title">{house.house_name}</h5>
                        <p>{house.size}</p>
                        {/* Likes and dislikes */}
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={heart} className="likes" type="button" onClick={changeLikes} />
                                </div>
                                <div className="col">
                                    <img src={frown} className="likes" type="button" onClick={changeDisLikes} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="likes">{likes}</p>
                                </div>
                                <div className="col">
                                    <p className="likes">{disLikes}</p>
                                </div>
                            </div>
                        </div>

                        <p className="card-text">{house.description}</p>
                        <h6 className="card-title">Price: {house.price} Ksh</h6>
                        <p className={house.price > 30000 ? "exp":"cheap"}>Category: {house.price > 30000 ? "Expensive" : "Affordable"}</p>
                        <h6 className="card-title">Location: {house.location}</h6>
                        <Modal/>
                        <Link type="button" className="btn btn-info-secondary" to='/update' style={{marginLeft:'5px'}} state={house}>Update House</Link>
                    </div>
                </div>
                    : <div>
                        <div className="card" style={{ width: "18rem", marginTop: "15px" }}>
                            <img src={house_image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">No House</h5>

                                <p className="card-text">House name: No Information</p>
                                <h6 className="card-title">Price: No Price</h6>
                                <p>No Category</p>
                                <h6 className="card-title">Location: Unavailable</h6>
                                <button type="button" className="btn btn-primary">No House</button>
                            </div>
                        </div>
                    </div>
            }       
        </>
    )
}
export default Housecard


{
    {/*
        let [houseName, setHouseName] =  useState('Berean')
        let [price, setPrice] = useState(100000)
        let [location, setLocation] = useState('Utawala')

    function changePrice () {
        setPrice(400000);
        setLocation('Syokimau');
        setHouseName('Canaan')
    }
        let [likes, setLikes] = useState(0)
        function changeLikes () {
        setLikes(++likes)
        }

          <div className="likesContainer">
                        <img src={heart} className="likes" type="button" onClick={changeLikes} />
                        <p className="likes">{likes}</p>
                        <img src={frown} className="likes" type="button" onClick={changeDisLikes} />
                        <p className="likes">{disLikes}</p>
                    </div>
        */}
}

{
    // <div class="container">
    //     <div class="row">
    //         <div class="col">
    //             <img src={heart} className="likes" type="button" onClick={changeLikes} />
    //         </div>
    //         <div class="col">
    //             <img src={frown} className="likes" type="button" onClick={changeDisLikes} />
    //         </div>
    //     </div>
    //     <div class="row">
    //         <div class="col">
    //         <p className="likes">{likes}</p>
    //         </div>
    //         <div class="col">
    //             <p className="likes">{disLikes}</p>
    //         </div>
    //     </div>
    // </div>
}