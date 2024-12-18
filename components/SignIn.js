import { useEffect, useState } from 'react';
import Link from "next/link";
import styles from '../styles/SignIn.module.css';
import Image from 'next/image'

import { Button, Modal } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

import {useRouter} from "next/router";


function SignIn() {
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    // const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const router = useRouter();
    

    const auClickSurSignIn = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setRedirect(true);
                    router.push("/home")
                }
            });
    };

    return (
        <div className={styles.divSignIn}>
            <Image src="/twitter.png" alt="logo" width="60px" height="60px" className={styles.logoTwitter}/>
            <input onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} placeholder='Username'/>
            <input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} placeholder='Password'/>
            {/* <button onClick={()=> auClickSurSignIn()}>SignIn</button> */}
            <Button onClick={()=> auClickSurSignIn()}>SignIn</Button>
            {/* {redirect && <Link href="/home"> Go to Home </Link>} */}
        </div>
    )

}

export default SignIn;