const NewsItem = ({song}) => {
    return ( 
        <>
            <li><a href={song.webUrl} target="_blank">{song.webTitle}</a></li>
        </>

     );
}

export default NewsItem;