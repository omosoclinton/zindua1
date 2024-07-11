import React from "react";

const NewsCard = ({author, description, title,urlToImage, url}) => {
    // something author, description, title,urlToImage, url
    //console.log(news)
    return (
        <>
            <div className="container">
                <article className="card animated fadeInLeft">
                    <img src={urlToImage} alt="..."/>
                    <div className="card-block">
                        <h4 className="card-title">{title}</h4>
                        <h6 className="text-muted">George Orwell</h6>
                        <p className="card-text">{description}</p>
                        <a href={url}>Read More</a>
                    </div>
                </article>
            </div>
        </>
    )
}

export default NewsCard