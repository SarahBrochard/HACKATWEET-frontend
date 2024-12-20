import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image'
// import LastTweets from './LastTweets';
// import Tweet from './Tweet';
import Trends from './Trends';

import {useRouter} from "next/router"; //LE TRUC QUI PERMET DE REDIRIGER VERS LA PAGE HOME 

import { login, logout } from '../reducers/user';


function Hashtag() {
    const [hashtagInput, setHashtagInput] = useState("");
    const [tweets, setTweets] = useState([]);
    //Si l'hashtagInput est le meme que dans tweets.message.hashtag
    //Afficher le tweet concerné

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const router = useRouter();

    const auClickSurImage = () => {
        router.push("/home")
    }

    const auClickSurLogout = () => {
        dispatch(logout());
    }

    // if(!user.token) {
    //     router.push("/login")
    // }

    useEffect(()=> {
        fetch('http://localhost:3000/tweets/lastTweets') 
        .then(response => response.json())
        .then(data => {
            setTweets(data.message); //L'ERREUR VENAIT D'ICI J'avais mis seulement data au lieu de data.message
            console.log(tweets);
        })
    }, []) 

    console.log(tweets);
    
    const auPif = tweets.map(auPif1 => ({text: auPif1.text, timing: auPif1.timing, likes: auPif1.likes, hashtag: auPif1.hashtag}))
    // const auPif = tweets.message.map(auPif1 => (auPif1.text))
    console.log(auPif)
    

  return (
    <div className={styles.divHashtag}>
        <div className={styles.divHashtagGauche}>
            <div className={styles.div1}>
                <Image src="/twitter.png" alt="logo" width="60px" height="60px" className={styles.logoTwitter} onClick={()=>auClickSurImage()}/>
            </div>
            <div className={styles.div2}>
                <p>photo de profil , firstname et @username en dessous</p>
                <button onClick={()=> auClickSurLogout()}>LOGOUT</button>
            </div>

        </div>
        <div className={styles.divHashtagCentre}>
            <div className={styles.div3}>
                <h2>Hashtag</h2>
                <input onChange={(e) => setHashtagInput(e.target.value)} value={hashtagInput} placeholder='#Hashtag'/>
            </div>
            <div className={styles.div4}>
                <p>Les tweets sont sencés s'afficher là </p>
            </div>

        </div>
        <div className={styles.divHashtagDroite}> 
            <Trends/>
        </div>
        



      
    </div>
  );
}

export default Hashtag;