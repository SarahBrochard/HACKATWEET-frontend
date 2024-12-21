import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import LastTweets from './LastTweets';
import Tweet from './Tweet';
import Trend from './Trend';


function Home() {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();

  if (!user.token) {
    router.push("/login");
  }

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div id="home" className={styles.main}>
      
      <div id="left" className={styles.menuleft}>
          <img
            src="twitter.png"
            alt="toLogin"
            width="60px"
            height="60px"
            className={styles.logoTw}
          />

          <button
            id="logout"
            className={styles.logBt}
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
        <div id="centre" className={styles.menucentre}>
          <h1 > HOME </h1>
          <Tweet />

          <LastTweets />
        </div>
        
        <div id="right" className={styles.menuright}>Trends</div>
         <Trend/>
      
    </div>
  );
}

export default Home;
