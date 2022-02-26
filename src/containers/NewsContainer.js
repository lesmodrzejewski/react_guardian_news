import { useEffect, useState } from "react";

import NewsList from "../componenst/NewsList";
import NewsInput from "../componenst/newsInput";


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
            <h2>Guardian News</h2>
            <NewsInput topic={topic} changeTopic={changeTopic}/>
            <NewsList listOfNews={listOfNews}/>
        </>
        
     );
}

export default NewsContainer;