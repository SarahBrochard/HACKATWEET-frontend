import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Trend from "./Trend";
import {login, logout} from "../reducers/user"
import { useRouter } from 'next/router'


function Home() {
  const user = useSelector((state) => state.user.value);
  const router = useRouter()

  if(!user.token) {
    router.push("/login")
}

  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout());
      
      
    };


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}> HOME </h1>
        <Tweet />
        <div className={styles.menuleft}>
        <button id="logout" className={styles.logBt} onClick={() => handleLogout()} >
          Logout
        </button>
        </div>
        <div className={styles.logoTw} ><img src="Twiblanc.webp"  /></div>
      </main>
      
    </div>
  );
}

export default Home;
