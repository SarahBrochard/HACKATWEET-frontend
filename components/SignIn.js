import { useEffect, useState } from 'react';
import Link from "next/link";

function SignIn() {
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    
    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.result) {
                    return(
                        <Link href="/home"></Link>
                    )
                }
            });
    };

    return (
        <div>
            <input onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}>Username</input>
            <input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}>Password</input>
            <button onClick={()=> auClickSurSignIn()}>SignIn</button>
        </div>
    )

}

export default SignIn;