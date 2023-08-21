import React from "react";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

export default function Logout() {
  const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
}
