import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  apiKey: "AIzaSyDI3gfN9FKZ9q3WqeFCXXoc1fP_gJCKwq0",
  authDomain: "spaform-9b36d.firebaseapp.com",
  projectId: "spaform-9b36d",
  storageBucket: "spaform-9b36d.appspot.com",
  messagingSenderId: "280967334365",
  appId: "1:280967334365:web:7d971dbd2c739e9c9d4e34",
});

var db = firebaseApp.firestore();

export { db };
