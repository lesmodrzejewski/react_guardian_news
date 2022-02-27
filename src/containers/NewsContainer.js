import { useEffect, useState } from "react";

import NewsList from "../componenst/NewsList";
import NewsInput from "../componenst/NewsInput";
import "./NewsContainer.css"



const NewsContainer = () => {

    
    const [listOfNews, setListOfNews] = useState([])
    const [topic, setTopic] = useState('lifestyle')

    const changeTopic = function (newTopic) {
        setTopic(newTopic)
    }

    const getNewsList = () => {
        fetch(`https://content.guardianapis.com/search?q=${topic}&format=json&api-key=test`)
        .then(res => res.json())
        .then(data => setListOfNews(data.response.results))       
    }

    useEffect(() => {
        getNewsList()
    },[])

    return ( 
        <>
            <NewsInput topic={topic} changeTopic={changeTopic}/>
            <hr />
            <h2>Guardian News</h2>
            <h3>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h3>
            <NewsList listOfNews={listOfNews}/>
        </>
        
     );
}

export default NewsContainer;