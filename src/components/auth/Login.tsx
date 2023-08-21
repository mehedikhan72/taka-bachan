import React from "react";
import { auth, googleProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const loginUsingGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={loginUsingGoogle}>Login using google</button>
    </div>
  );
}
