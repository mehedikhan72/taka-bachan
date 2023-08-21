import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFx2LdPB5TTKwZDUpVTuphHpLpWYRwowo",
  authDomain: "taka-bachan.firebaseapp.com",
  projectId: "taka-bachan",
  storageBucket: "taka-bachan.appspot.com",
  messagingSenderId: "245718481231",
  appId: "1:245718481231:web:be7810e9cbe73105a8ad3a",
  measurementId: "G-BYN5HR5M2P",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
