import React, { useState, useEffect } from 'react'
import { collection, query, where, limit } from "firebase/firestore";
import SignOut from "./SignOut";
import { db } from '../firebase';

function Chat() {
  const [ messages, setMessages ] =  useState([])
  
  useEffect(()=> {
    const q = query(collection(db, "messages"), orderBy("desc"), limit(50)
    
  }, [])

  return (
    <div>
      <SignOut/>
      Chat
      Hello
    </div>
  )
}

export default Chat
