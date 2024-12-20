import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import {login, logout} from "../reducers/user"

function Tweet() {
  const [textTweet, setTextTweet] = useState("");
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleInputTweet = (event) => {
    setTextTweet(event.target.value);
  };

  const handleAddTweet = () => {
    fetch("http://localhost:3000/tweets/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: textTweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTextTweet('');
      });
  };

  return (
    <div>
      <input
        type="text"
        id="tweet"
        className={styles.input}
        placeholder="What's up?"
        onChange={handleInputTweet}
        maxLength="280"
        value={textTweet}
      />
      <span> {textTweet.length}/280 </span>

      <button
        id="addTweet"
        className={styles.bttweet}
        onClick={() => handleAddTweet()}
      >
        Tweet
      </button>
    </div>
  );
}

export default Tweet;
