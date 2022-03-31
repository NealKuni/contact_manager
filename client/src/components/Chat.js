import React, { useState, useEffect } from 'react'
import { collection, query, orderBy } from "firebase/firestore"; 
import SignOut from "./SignOut";
import { db } from '../firebase';

function Chat() {
  const [ messages, setMessages ] =  useState([])

  useEffect(()=> {
    db.collection('messages').orderBy()
  }, [])

  return (
    <div>
      <SignOut/>
      Chat
    </div>
  )
}

export default Chat
