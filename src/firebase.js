// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2wa6xUCOpsirzDx2Ymza4S3R-UFMEqhU",
  authDomain: "ars-bolts-and-nuts.firebaseapp.com",
  projectId: "ars-bolts-and-nuts",
  storageBucket: "ars-bolts-and-nuts.appspot.com",
  messagingSenderId: "480891842988",
  appId: "1:480891842988:web:a8b314a76973173850ca09",
  measurementId: "G-FL0B73MV3P",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
