import React from 'react';
import berean from '../assets/LandingImg/berean.jpg'
import elgonimg from '../assets/LandingImg/elgon.jpg'
import aberdaresimg from '../assets/LandingImg/aberdares.jpg'
//import App from '../App';
import '../Carousel.css'

const CarouselComponent = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="img-fluid d-block w-100 rounded" src={berean} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid d-block w-100 rounded" src={aberdaresimg} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid d-block w-100 rounded" src={elgonimg} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;
