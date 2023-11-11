import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyUNuT6QaYtoLTjEmhLde9Vv3Df34e2ws",
  authDomain: "clothers-shop.firebaseapp.com",
  projectId: "clothers-shop",
  storageBucket: "clothers-shop.appspot.com",
  messagingSenderId: "300206762134",
  appId: "1:300206762134:web:8aaf9b868c06ea5a63fab7",
  measurementId: "G-9J2SVP1K4F",
};

const firebaseApp = initializeApp(firebaseConfig);

// provider for google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
