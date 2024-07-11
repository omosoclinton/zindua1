import React, {useState, useEffect} from "react";
import NewsCard from "./NewsCard";

function FetchNews (){
    const [newsData, setNewsData] = useState([]);

    useEffect(()=> {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=590f38c5eab44f80a692d4686fca3506')
            .then((response)=>response.json())
            .then((data)=>setNewsData(data.articles))
    }, [])
    // something author, description, title,urlToImage, url
    return (
        <>
            
            <div className="container m-t-md">
                {newsData.map((news, index)=>{
                   return (
                    <div className="col-xs-12 col-md-4" key={index}>
                        <NewsCard 
                        title={news.title}
                        author={news.author}
                        description={news.description} 
                        urlToImage={news.urlToImage}
                        url={news.url}/>
                    </div>
                   )
                })}
            </div>
        </>
    )
}

export default FetchNews