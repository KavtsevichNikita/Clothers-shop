import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../utils/firebase/firebase"
import { useState } from "react";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return (
        <>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>
            Sign in with Google
        </button>
        <button onClick={logGoogleRedirectUser}>
            Sign in with Google Redirect
        </button>
        </>
    )
}


export default SignIn