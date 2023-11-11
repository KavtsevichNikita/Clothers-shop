import { signInWithGooglePopup } from "../utils/firebase/firebase"
import { useState } from "react";

const SignIn = () => {

    const [userName, setUserName] = useState("");

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        setUserName(response.user.displayName)
    }
    return (
        <>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>
            Sign in with Google
        </button>

        <h1>{userName}</h1>
        </>
    )
}


export default SignIn