// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAnalytics,
    logEvent,
    setUserId,
    setUserProperties,
  } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlB4rgDdyPZBCwAI2OapUUv2183hkSAVQ",
  authDomain: "basava-d4a99.firebaseapp.com",
  projectId: "basava-d4a99",
  storageBucket: "basava-d4a99.appspot.com",
  messagingSenderId: "344202430358",
  appId: "1:344202430358:web:abda46fe2704a1c6f5bfb7",
  measurementId: "G-W39MWYHRT9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const setUserProperTiesOnFirebase = (
    userName: string,
    company?: string
  ) => {
    setUserProperties(analytics, { userName, company });
  };
  export const setUserIdOnFirebase = (username: string) => {
    setUserId(analytics, username);
  };
  export const logEventToFirebase = (event: string) => {
    logEvent(analytics, event);
  };
  