// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6JSJwmvFqJMXS94jbnzVv2rrIKUFaquU",
  authDomain: "react-blog-a5d56.firebaseapp.com",
  projectId: "react-blog-a5d56",
  storageBucket: "react-blog-a5d56.appspot.com",
  messagingSenderId: "586163190043",
  appId: "1:586163190043:web:9b9069e6ce6dc99ca8bbbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();