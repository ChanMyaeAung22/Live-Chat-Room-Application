import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCETOCOVVR1GvTwD5quJ5NB9qlfdHIUp3M",
  authDomain: "live-chat-fccc1.firebaseapp.com",
  projectId: "live-chat-fccc1",
  storageBucket: "live-chat-fccc1.appspot.com",
  messagingSenderId: "86511107666",
  appId: "1:86511107666:web:c3d8a6495ce59f06c8e98b",
  measurementId: "G-7GFHS5N0BT"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth }
