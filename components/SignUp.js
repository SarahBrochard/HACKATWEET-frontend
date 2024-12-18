import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';    
import Image from 'next/image'
import styles from '../styles/SignUp.module.css';
    


function SignUp() {

    const [signUpFirstname, setSignUpFirstname] = useState("");
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    

    const auClickSurSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.result) {
                    
                }
            });
    };
    return (
        <div className={styles.divSignUp}>
            <Image src="/twitter.png" alt="logo" height="60px" width="60px" className={styles.logoTwitter}/>
            <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} placeholder='Firstname'/>
            <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} placeholder='Username'/>
            <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} placeholder='Password'/>
            <button onClick={()=> auClickSurSignUp()}>SignUp</button>
        </div>
    )

}

export default SignUp;