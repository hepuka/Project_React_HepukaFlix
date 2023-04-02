import React from "react";
import "./LoginScreen.css";
import nlogo from "../img/nlogo.png";

const Login = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen_logo" src={nlogo} alt="loginlogo" />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
        </>
      </div>
    </div>
  );
};

export default Login;
