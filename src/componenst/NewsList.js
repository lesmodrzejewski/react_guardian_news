import NewsItem from "./NewsItem";
import "./NewsList.css"


const NewsList = ({listOfNews}) => {

    const handleClick = function(event) {
        const selectedCountry = listOfNews.find((news) => event.target.value === news.id)
        console.log('selected' + selectedCountry);
    }

    const listNewsNodes = listOfNews.map((news) => {
        return(<NewsItem key={news.id} value={news.id} song={news}/>)
    })

    return (
        <>
            <ul onClick={handleClick}>
               {listNewsNodes} 
            </ul>
            
        </>

      );
}

export default NewsList;