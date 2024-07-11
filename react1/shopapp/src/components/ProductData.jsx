import React from "react";
import NavBar from "./NavBar";
import ReviewBlock from "./Review";
import { useLocation } from "react-router-dom";

export default function ProductData() {

    const locationId = useLocation()
    let goodsData = locationId.state
    let reviews = goodsData.reviews
    console.log(reviews)
    return (
        <>
            <NavBar/>
            <div>
                <div className="card mb-2">
                    <img src={goodsData.images[0]} className="card-img-top" alt="Camera" style={{width:'50%', textAlign:'center'}} />
                    <div className="card-body">
                        <h5 className="card-title">{goodsData.title}</h5>
                        <div className="mb-2 row">
                            <span className="font-bold"><strong>Price ${goodsData.price}</strong></span>
                            <span className="font-bold"><strong>Rating {goodsData.rating}</strong></span>
                        </div>
                        <div>
                            <p className="card-text">{goodsData.description}</p>
                        </div>
                        <div className="card">
                            <h4>Reviews</h4>
                            {
                                reviews.map((review) => {
                                    return (
                                        <>
                                            <ReviewBlock reviewData={review} />
                                        </>
                                        )  
                                })
                            }
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm btn-block"
                                        id="addToCart-1"
                                    >
                                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}