import styles from "../styles/Trend.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


function Trends(){

const [listTrend, setListTrend]= useState();

useEffect(() =>{
    fetch("http://localhost:3000/hashtags/all")
    .then((response) => response.json())
    .then((data) => {
        setListTrend(data.hashtagName)
    });
}, []);

console.log(listTrend)

//Resultat null voir le contenu de base?

// const listHash = listTrend.map((hashtag, i) =>(
//     <li key={i} >{hashtag.hashtag}</li>
// ))
    return (

        <div>{listTrend}</div>
    )
};

export default Trends;