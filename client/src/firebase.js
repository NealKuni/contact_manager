
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1wfpjjE5U57z5obOQjlkK48SX-fVwSQ",
  authDomain: "chatapp-b71d2.firebaseapp.com",
  projectId: "chatapp-b71d2",
  storageBucket: "chatapp-b71d2.appspot.com",
  messagingSenderId: "751088915618",
  appId: "1:751088915618:web:023c3d00bfb701878af3fb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
console.log(auth)
const db = getFirestore(firebaseApp);


onAuthStateChanged(auth, user => {
  if (user != null){
    console.log('logged in!')

  } else {
    console.log('No user');
  }
})


export {db, auth, firebaseApp};