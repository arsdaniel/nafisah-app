import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA8YaFEhrCcXg6R-IUfVcMRRU_uTgo2aVc",
    authDomain: "e-nafish.firebaseapp.com",
    databaseURL: "https://e-nafish-default-rtdb.firebaseio.com",
    projectId: "e-nafish",
    storageBucket: "e-nafish.appspot.com",
    messagingSenderId: "614551537362",
    appId: "1:614551537362:web:9def75d301a6f91eb5cf0b",
    measurementId: "G-4MDM1FRMQW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);