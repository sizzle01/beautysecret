import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  apiKey: "AIzaSyD8Wg69CNPGnsphzzLWmqmvZ-4XaOnhdfw",
  authDomain: "beautysecret-contact-for-7cd77.firebaseapp.com",
  projectId: "beautysecret-contact-for-7cd77",
  storageBucket: "beautysecret-contact-for-7cd77.appspot.com",
  messagingSenderId: "329142830796",
  appId: "1:329142830796:web:e4e2d08e860811b74e2469",
});

var db = firebaseApp.firestore();

export { db };
