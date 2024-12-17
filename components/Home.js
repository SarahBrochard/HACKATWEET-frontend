import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';


function Home() {

const [textTweet, setTextTweet]= useState('');
const [listTweet, setListTweet]= useState([]);
const dispatch = useDispatch();

const handleInputTweet = (event) =>{
  setTextTweet(event.target.value);
};

const handleAddTweet= () =>{

  fetch('route POST tweet')
  .then((response) => response.json())
  .then((data)=>{
    dispatch(setListTweet([...listTweet, textTweet]));
    setTextTweet('');
  })
  
}




  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}> HOME </h1>
          <div><input type='text' id='tweet' className={styles.input} placeholder="What's up?" onChange={handleInputTweet} />
         
         <button id='addTweet' className={styles.bttweet}  onClick={()=> handleAddTweet()}  >Tweet</button>
         </div>
         
        
      </main>
    </div>
  );
}

export default Home;
