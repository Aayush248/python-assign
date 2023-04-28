// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0q6G7XEMyNXRuGtJSw6fOyZR_A1ZpAfo",
    authDomain: "ad-organics.firebaseapp.com",
    projectId: "ad-organics",
    storageBucket: "ad-organics.appspot.com",
    messagingSenderId: "823116376288",
    appId: "1:823116376288:web:f5ccb6e0f843d69966c885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const db = getDatabase();

var name = document.getElementById("name");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var kilo = document.getElementById("kilo");

var order = document.getElementById("order");