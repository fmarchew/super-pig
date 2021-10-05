import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkwwWcnI7SWpdtN7ynI4jpmEzNAf2zMTs",
    authDomain: "super-pig-database.firebaseapp.com",
    projectId: "super-pig-database",
    storageBucket: "super-pig-database.appspot.com",
    messagingSenderId: "559432551030",
    appId: "1:559432551030:web:7d382d0b15a48448232d57"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export default firebaseApp