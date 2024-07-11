import React, {useState, useEffect} from "react";
import NewsContainer from "./FetchNews";


function NewsCard (){
    const [newsData, setNewsData] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-02&sortBy=publishedAt&apiKey=590f38c5eab44f80a692d4686fca3506')
            .then((response)=>response.json())
            .then((data) => {
                setNewsData(data.articles)
            })
    },[])
    console.log(newsData)
    return(
        <>
            <div className="container  overflow-hidden text-center">
                <div className="row justify-content-around">
                    {
                        newsData.map((news, index) => {
                            return (
                                <div className="col-md-3 mb-3" key={index}>
                                    <NewsContainer
                                        title={news.title}
                                        description={news.description}
                                        link={news.url}
                                        url_image={news.urlToImage}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default NewsCard