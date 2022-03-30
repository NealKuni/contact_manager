import { getAuth, signOut} from "firebase/auth";
import React from 'react'
import { Button } from "@material-ui/core";

const SignOut = () => {

    const auth = getAuth();
    // const signOutHandler = () => {
      
    //   // e.preventDefault();
    //   signOut(auth)
    //   .then(() => {
    //       // Sign-out successful.
    //     console.log('Sign-out successful')
    //   }).catch((error) => {
    //       // An error happened.
    //   });
    // }

  return (
    <div>   
      <Button onClick={() => signOut(auth)}> Sign Out</Button>
    </div>
  )
}

export default SignOut;
