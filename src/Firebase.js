 import firebase from "firebase"
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCd3Ec3-DFKz0XmklTomzlPoINqi9FSv8U",
    authDomain: "clone-aug1708.firebaseapp.com",
    projectId: "clone-aug1708",
    storageBucket: "clone-aug1708.appspot.com",
    messagingSenderId: "1089730462231",
    appId: "1:1089730462231:web:1980261329deab7f705252",
    measurementId: "G-B4CPHJMTJS"
  });

  const db= firebase.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider()

  export  {db,provider,auth} 
   