import React from 'react'


const Car = ({car}) => {
    return (
        <>
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={car.img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Brand {car.brand}</h5>
                        <h6 className="card-text">Year: {car.year}</h6>
                        <h6 className="card-text">Mileage: {car.mileage}</h6>
                        <p className='card-text'>Price: {car.price}</p>
                        <a href="#" className="btn btn-primary">Buy Car</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Car