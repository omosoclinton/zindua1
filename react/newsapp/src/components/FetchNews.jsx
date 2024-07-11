import React from 'react'

const  NewsContainer = ({title, description, link, url_image}) => {
    //console.log()
    // something
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={url_image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsContainer