import Link from "next/link";
// import { Button } from 'semantic-ui-react';


function Login() {

    // const auClickSurSignUpLogin = () => {
    //     return(
    //         <Link href="../pages/signup"></Link>
    //     )
    // }

    // const auClickSurSignInLogin = () => {
    //     return(
    //         <Link href="../pages/signin"></Link>
    //     )
    // }
return(
    <div>
        <h2>See what's happening</h2>
        <h3>Join Hackatweet today.</h3>
        <Link href="/signup" passHref={true}>
            <button>Sign up</button>
        </Link>
        <p>Already have an account ?</p>
        <Link href="/signin" passHref={true}>
            <button>Sign in</button>
        </Link>
    </div>
    // <div>
    //     <h2>See what's happening</h2>
    //     <h3>Join Hackatweet today.</h3>
    //     <button onClick={() => auClickSurSignUpLogin()}>Sign up</button>
    //     <p>Already have an account ?</p>
    //     <button onClick={() => auClickSurSignInLogin()}>Sign in</button>
    // </div>
)
}

export default Login;