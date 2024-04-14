// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE_JWoPqgQVWUdM5OQQ1CvW6Z6xAkO2hk",
    authDomain: "reactnative-auth-820d7.firebaseapp.com",
    projectId: "reactnative-auth-820d7",
    storageBucket: "reactnative-auth-820d7.appspot.com",
    messagingSenderId: "659986665949",
    appId: "1:659986665949:web:823d7532a1d2bd4bc62634"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth()

export { auth }