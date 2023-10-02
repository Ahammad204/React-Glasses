import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const all = import.meta.env;



const firebaseConfig = {
    apiKey: "AIzaSyCseZi0DgdPAf0uJPY21KT-W_MaWKlP1y4",
    authDomain: "react-glasses-24ecd.firebaseapp.com",
    projectId: "react-glasses-24ecd",
    storageBucket: "react-glasses-24ecd.appspot.com",
    messagingSenderId: "772483821510",
    appId: "1:772483821510:web:405dc4faa05c38ebcd0cc7"
  };
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
