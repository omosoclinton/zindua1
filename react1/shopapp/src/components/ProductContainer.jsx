import React, {useState, useEffect} from "react";
import Product from "./ProductCard";

const ProductsContainer =  () => {
    // an array to store our data => useState
    const [goods, setProducts] = useState([])

    // useEffect queries data from API to give us data
    useEffect(()=> {
        fetch("https://dummyjson.com/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp.products)
                setProducts(resp.products)
            })
        }).catch((err)=>{
            console.error(err)
        })
    }, [])
    return (
        <>
            <div className="container">
                <h1>Buy Now</h1>
                <div className="row justify-content-around">
                    {
                        goods.map((good, index)=> {
                            return(
                                <div className="col-md-3 mb-3 cards">
                                    <Product productData={good}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductsContainer