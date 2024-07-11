import React from "react";
import {Link} from 'react-router-dom'

function Product({productData}) {
    return(
        <>
            <div className="card cards" style={{width: "18rem"}}>
                <img src={productData.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{productData.title}</h5>
                        <h5>{productData.price}</h5>
                        {/* <p className="card-text">Description: {productData.description}</p> */}
                        <button type="button" className="btn btn-primary">Add</button>
                        <Link to='/products' state={productData} className='btn btn-primary kabutton'style={{margin: "5px"}} >View</Link>
                    </div>
            </div>
        </>
    )
}

export default Product
