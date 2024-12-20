import styles from "../styles/LastTweet.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function LastTweets() {
//   const tweet = useSelector((state) => state.tweet.value);

  const [listTweet, setListTweet] = useState([]);
  
useEffect(() =>{
    fetch("http://localhost:3000/tweets/lastTweets")
    .then((response) => response.json())
    .then((data) => {
        setListTweet(data.message)
    });
}, []);
 

const liste = listTweet.map((tweet, i) =>(
    <li key={i} >{tweet.text}</li>
))


   return <div> {liste} </div>;
}

export default LastTweets;
