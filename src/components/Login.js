import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase.js";

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginConatiner>
      <LoginInnerConatiner>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>SignIn the Gmail Account</h1>
        <p>kashif.slack.com</p>
        <Button onClick={submit}>Sign In With Google</Button>
      </LoginInnerConatiner>
    </LoginConatiner>
  );
};

export default Login;
const LoginConatiner = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerConatiner = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  > img {
    object-fit: "conatin";
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;
  }
`;
