import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBn1wfpjjE5U57z5obOQjlkK48SX-fVwSQ",
  authDomain: "chatapp-b71d2.firebaseapp.com",
  projectId: "chatapp-b71d2",
  storageBucket: "chatapp-b71d2.appspot.com",
  messagingSenderId: "751088915618",
  appId: "1:751088915618:web:023c3d00bfb701878af3fb"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}