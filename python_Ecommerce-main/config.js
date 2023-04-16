import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD0q6G7XEMyNXRuGtJSw6fOyZR_A1ZpAfo",
    authDomain: "ad-organics.firebaseapp.com",
    projectId: "ad-organics",
    storageBucket: "ad-organics.appspot.com",
    messagingSenderId: "823116376288",
    appId: "1:823116376288:web:f5ccb6e0f843d69966c885"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}