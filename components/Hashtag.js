import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image'
// import LastTweets from './LastTweets';
// import Tweet from './Tweet';
import Trends from './Trend';
import Trendss from './Trendss';

import {useRouter} from "next/router"; //LE TRUC QUI PERMET DE REDIRIGER VERS LA PAGE HOME 

import { login, logout } from '../reducers/user';


function Hashtag() {
    const [hashtagInput, setHashtagInput] = useState("");
    const [tweets, setTweets] = useState([]);
    const [hashtagEnregistres, setHashtagEnregistres] = useState([])
    const [tweetsFiltres, setTweetsFiltres] = useState([]);

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const router = useRouter();

    const auClickSurImage = () => {
        router.push("/home")
    }

    const auClickSurLogout = () => {
        dispatch(logout());
    }

    if(!user.token) {
        router.push("/login")
    }

    useEffect(()=> {
        fetch('http://localhost:3000/tweets/lastTweets') 
        .then(response => response.json())
        .then(data => {
            setTweets(data.message); //L'ERREUR VENAIT D'ICI J'avais mis seulement data au lieu de data.message
        })
    }, []) 

    console.log(tweets);

    // const jeTest10 = tweets.hashtags;

    // let jeTest9;
    //     jeTest9 =
    //     <div className={styles.div4}>
    //     <p>Les tweets sont censés s'afficher là :</p>
    //     {tweets.hashtags.map((tweet, index) => (
    //         <div key={index} className={styles.tweet}>

    //         </div>
    //     ))}
    //     </div>

    useEffect(()=> {
        const filtre = tweets.filter(e => e.hashtags === hashtagInput)
        setTweetsFiltres(filtre);
    }, [hashtagInput])

    let jeTest1;
        jeTest1 =
        <div className={styles.div4}>
        <p>Les tweets sont censés s'afficher là :</p>
        {tweetsFiltres.map((tweet, index) => (
            <div key={index} className={styles.tweet}>
            <p>{tweet.userId}</p>
            <p><strong>{tweet.hashtags}</strong></p>
            <p>{tweet.text}</p>
            <p>{tweet.timing}</p>
            <p>{tweet.likes.length} likes</p>
            </div>
        ))}
        </div>



  return (
    <div className={styles.divHashtag}>
        <div className={styles.divHashtagGauche}>
            <div className={styles.div1}>
                <Image src="/twitter.png" alt="logo" width="60px" height="60px" className={styles.logoTwitter} onClick={()=>auClickSurImage()}/>
            </div>
            <div className={styles.div2}>
                <p>photo de profil , firstname et @username en dessous</p>
                <p>username: {user.username}</p>
                <button onClick={()=> auClickSurLogout()}>LOGOUT</button>
            </div>

        </div>
        <div className={styles.divHashtagCentre}>
            <div className={styles.div3}>
                <h2>Hashtag</h2>
                <input onChange={(e) => setHashtagInput(e.target.value)} value={hashtagInput} placeholder='#Hashtag'/>
            </div>
                <p>{jeTest1}</p>
            </div>
        <div className={styles.divHashtagDroite}> 
            <Trendss/>
        </div>
        

      
    </div>
  );
}

export default Hashtag;