import React from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import CarouselComponent from "../components/Carousel";



const Landing =  () => {

    return (
        <div>
            <Navbar/>
            <CarouselComponent/>
            <Footer/>
        </div>
    )
}

export default Landing