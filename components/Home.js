import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import LastTweets from './LastTweets';
import Tweet from './Tweet';
import Trend from './Trend';


function Home() {






  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}> HOME </h1>
         
         <Tweet/>
         <button id='logout' className={styles.logBt}>Logout</button>
      </main>
      <div>
        
        </div>
      
    </div>
  );
}

export default Home;
