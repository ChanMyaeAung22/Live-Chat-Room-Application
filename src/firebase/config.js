import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBY6nmhw256OIJLw5L4fMtOpKzy6o45L2k",
    authDomain: "vue-blog-system-1d796.firebaseapp.com",
    projectId: "vue-blog-system-1d796",
    storageBucket: "vue-blog-system-1d796.appspot.com",
    messagingSenderId: "737293996465",
    appId: "1:737293996465:web:5b37e603f45dc664402d90"
};

firebase.initializeApp("firebaseConfig");
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth }
