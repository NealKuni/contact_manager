import React, {useState} from "react";
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import { auth } from './firebase';
import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";



function App() {
  const [user] = useAuthState(auth);

  console.log(user) 
  return (
    <div>
      {user ? <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
