import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Widgets from "./Widgets.js";

import Feed from "./Feed.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectUser, logout, login } from "./features/userSlice.js";
import Login from "./Login";
import { auth } from "./firebase.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in.
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        // No user is signed in.
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
