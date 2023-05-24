// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg3eTY-jIoKhjWQW9rAij0gt1H6NtZG6s",
    authDomain: "ema-john-abcd.firebaseapp.com",
    projectId: "ema-john-abcd",
    storageBucket: "ema-john-abcd.appspot.com",
    messagingSenderId: "182739153837",
    appId: "1:182739153837:web:afa8e8ba54d126a848a724",
    measurementId: "G-HNZ6TZ1T68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;