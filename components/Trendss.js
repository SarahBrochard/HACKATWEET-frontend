
import { useEffect, useState } from 'react';

function Trendss() {
    const [hashtagEnregistres, setHashtagEnregistres] = useState([])
    const [tweets, setTweets] = useState([]);

    useEffect(()=> {
    fetch("http://localhost:3000/hashtags/all")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setHashtagEnregistres(data.message)
    })
}, [])

    let jeTest2;
    jeTest2 =
    <div>
        <p>Les trends sont sencés s'afficher là</p>
        {hashtagEnregistres.map((hashtagE, index) => (
            <div key={index}>
                <p><strong>{hashtagE.hashtagName}</strong></p>
                <p>{hashtagE.hashtagName.length}</p>
            </div>
        ))}
    </div>

// useEffect(()=> {
//     fetch('http://localhost:3000/tweets/lastTweets') 
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setTweets(data.message); //L'ERREUR VENAIT D'ICI J'avais mis seulement data au lieu de data.message
//     })
// }, []) 

// console.log(tweets)

// const oui = 
// <div>
//     {tweets.map((non, index) => (
//         <div key={index}>
//             <p>{non.hashtag}</p>
//             <p>{non.hashtags}</p>
//         </div>
//     ))}
// </div>



    return(
        <div>
            <h2>Trendss</h2>
            {jeTest2}
            <p> Faut encore que je trouve comment afficher le nombre de fois que les hashtag ont été utilisés</p>
            {/* {oui} */}
        </div>
        
    )
}

export default Trendss;