import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTC10aY12iU4H93fuKhHgZTKx3dKoRD3o",
  authDomain: "kk-clothing-db-2944c.firebaseapp.com",
  projectId: "kk-clothing-db-2944c",
  storageBucket: "kk-clothing-db-2944c.appspot.com",
  messagingSenderId: "223121531285",
  appId: "1:223121531285:web:003263683b287a40fdd69c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
