import { useEffect, useState } from 'react';  
import Image from 'next/image'
import styles from '../styles/SignUp.module.css';
import Link from "next/link";
import Home from "./Home";
import { Button, Modal } from 'antd';
    
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

import {useRouter} from "next/router";

function SignUp() {

    const [signUpFirstname, setSignUpFirstname] = useState("");
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    // const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const router = useRouter();
    

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
                    // setRedirect(true);
                    router.push("/home")
                }
            });
    };
    return (
        <div className={styles.divSignUp}>
            <Image src="/twitter.png" alt="logo" height="60px" width="60px" className={styles.logoTwitter}/>
            <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} placeholder='Firstname'/>
            <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} placeholder='Username'/>
            <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} placeholder='Password'/>
            {/* <button onClick={()=> auClickSurSignUp()}>SignUp</button> */}
            <Button onClick={()=> auClickSurSignUp()}>SignUp</Button>
            {/* {redirect && <Link href="/home"> Go to Home </Link>} */}
        </div>
    )

}

export default SignUp;