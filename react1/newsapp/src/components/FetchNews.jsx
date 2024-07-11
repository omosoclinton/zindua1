import React from 'react'

const  NewsContainer = ({title, description, link, url_image, source}) => {
    //console.log()
    // something
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={url_image} alt="Card image cap"/>
                <p className="card-text">{source.name}</p>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsContainer