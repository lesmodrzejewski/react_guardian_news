import { useState } from "react"
import "./NewsInput.css"

const NewsInput = ({topic, changeTopic}) => {

    const [newTopic, setNewTopic] = useState('')

    const handleTopicChange = (event) => {
        setNewTopic(event.target.value)
    }

    const handleNewTopicSubmit = (event) => {
        event.preventDefault();
        changeTopic(newTopic)
    }


    return ( 
        <>
            <form id="topic-form" onSubmit={handleNewTopicSubmit}>
                <label htmlFor="topic">Change Field </label>
                <input type="text" name="topic" id="topic" onChange={handleTopicChange} value={newTopic} placeholder="what field are you interested in?"/>
                <input type="submit" value="change field" />
            </form>
        </>
    );
}

export default NewsInput;