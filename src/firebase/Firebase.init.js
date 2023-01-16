// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg1Jx3M5SU5942OxL2bK9ubXhDzytUZiU",
    authDomain: "dragon-news-7f32b.firebaseapp.com",
    projectId: "dragon-news-7f32b",
    storageBucket: "dragon-news-7f32b.appspot.com",
    messagingSenderId: "766579262871",
    appId: "1:766579262871:web:3e62ec72de9f8f274930d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;