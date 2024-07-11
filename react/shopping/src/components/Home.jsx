import React from "react";
import NavBar from "./NavBar";
import Product from "./ProductCard";
import ProductsContainer from "./ProductContainer";

export default function Home () {
    return(
        <>
            <NavBar/>
            <ProductsContainer/>
        </>
    )
}