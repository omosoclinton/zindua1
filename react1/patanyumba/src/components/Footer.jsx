import React from "react";

import '../Footer.css'

const Footer = () => {
    return (
        <>
            <div>
                <footer className="text-center text-white" style={{ backgroundColor: '#244855' }}>
                    <div className="container">
                        <section className="mt-5">
                            <div className="row text-center d-flex justify-content-center pt-5">
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-white">About us</a>
                                    </h6>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-white">Products</a>
                                    </h6>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-white">Help</a>
                                    </h6>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-white">Contact</a>
                                    </h6>
                                </div>
                            </div>
                        </section>

                        <hr className="my-5" />
                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright: 
                        <a className="text-white" href="#">PataNyumba</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer