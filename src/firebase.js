// import firebase from 'firebase'
import * as firebase from 'firebase/app';

// import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

const firebaseConfig = {
    // this is where your firebase config goes
    apiKey: "AIzaSyAcPIoO7aKwU9BMccOs3ug9EoTmgF0HL4I",
    authDomain: "faclone.firebaseapp.com",
    databaseURL: "https://faclone.firebaseio.com",
    projectId: "faclone",
    storageBucket: "faclone.appspot.com",
    messagingSenderId: "915528988483",
    appId: "1:915528988483:web:0723c9829ff519b4d461f6",
    measurementId: "G-Q740N80SGT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db