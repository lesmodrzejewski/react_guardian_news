import { useState } from "react"

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
            <form onSubmit={handleNewTopicSubmit}>
                <label htmlFor="topic">Topic</label>
                <input type="text" name="topic" id="topic" onChange={handleTopicChange} value={newTopic}/>
                <input type="submit" value="submit topic" />
            </form>
        </>
    );
}

export default NewsInput;