import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';    
    
    


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
            });
    };
    return (
        <div>
            <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}>Firstname</input>
            <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}>Username</input>
            <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}>Password</input>
            <button onClick={()=> auClickSurSignUp()}>SignUp</button>
        </div>
    )

}

export default SignUp;