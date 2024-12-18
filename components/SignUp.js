import { useEffect, useState } from 'react';  
import Image from 'next/image'
import styles from '../styles/SignUp.module.css';
import Link from "next/link";
import Home from "./Home";
import { Button, Modal } from 'antd';
    
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

import {useRouter} from "next/router";//LE TRUC QUI PERMET DE REDIRIGER VERS LA PAGE HOME 

function SignUp() {

    const [signUpFirstname, setSignUpFirstname] = useState("");
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const router = useRouter();//FONCTION QUI PERMET D'UTILISER useRouter
    

    const auClickSurSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token }));
                    router.push("/home")//ON PUSH LA PAGE home DANS LA FONCTION router
                }
            });
    };
    return (
        <div className={styles.divSignUp}>
            <Image src="/twitter.png" alt="logo" height="60px" width="60px" className={styles.logoTwitter}/>
            <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} placeholder='Firstname'/>
            <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} placeholder='Username'/>
            <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} placeholder='Password'/>
            <Button onClick={()=> auClickSurSignUp()}>SignUp</Button>
        </div>
    )

}

export default SignUp;