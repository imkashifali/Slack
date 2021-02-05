import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen.js";
const LoginScreen = () => {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginscreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setsignIn(true)} className="loginscreen__button">
          Login
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Ulimated Fils Section Here for free</h1>
            <h2>watch everyone, cancel at my time</h2>
            <h3>
              Ready to watch Enter your email Adrress to create or resart your
              membership plan
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="email" />
                <button
                  onClick={() => setsignIn(true)}
                  className="loginscreen__getstart"
                >
                  Get Sarted
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
