import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYsQmnPEQP8qKtg9QP5f8Ty3xt2iqWYNw",
  authDomain: "crwn-clothing-v2-db-8c163.firebaseapp.com",
  projectId: "crwn-clothing-v2-db-8c163",
  storageBucket: "crwn-clothing-v2-db-8c163.appspot.com",
  messagingSenderId: "446522559116",
  appId: "1:446522559116:web:68ea1821d4b26711ee49a9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
