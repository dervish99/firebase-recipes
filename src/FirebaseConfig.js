import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  //apiKey: process.env.REACT_APP_API_KEY,
  //authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //projectId: process.env.REACT_APP_PROJECT_ID,
  //storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //appId: process.env.REACT_APP_APP_ID,
  //measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  apiKey: "AIzaSyB4vshyg01Rtofc7XuuRyIO-J7nAl7ICIo",
  authDomain: "fir-recipes-2f3b3.firebaseapp.com",
  projectId: "fir-recipes-2f3b3",
  storageBucket: "fir-recipes-2f3b3.appspot.com",
  messagingSenderId: "369001425293",
  appId: "1:369001425293:web:4fe7fe63bff52dd508f5c4",
  measurementId: "G-F2DJRE61F8"
};

//stop multiple instances being initialised
//The condition firebase.apps.length checks the length of the firebase.apps array.
//If it returns 0, it means that there are no initialized app instances present.

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
