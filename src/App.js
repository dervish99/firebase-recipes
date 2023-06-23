import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import React from "react";

// eslint-disable-next-line no-unused-vars
// not required as importaint Auth service:
//import firebase from "./FirebaseConfig";

function App() {
  //initialize a piece of user state
  const [user, setUser] = useState(null);

  //checks when Auth changes occur,
  //So when Firebase detects that there's a change to the auth,
  //it's going to go ahead and call the setUser function with the user that gets passed in.
  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="App">
        <h1 className="title">Firebase Recipes v03</h1>
        <LoginForm existingUser={user}>huiiyiyiyi</LoginForm>
      </div>
    </div>
  );
}

export default App;
