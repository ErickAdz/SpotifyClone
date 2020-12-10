import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo*/}
      <img
        src="https://comunidadblogger.net/wp-content/uploads/2020/09/spotify-logo.jpg"
        alt=""
      />
      <a href={loginUrl}>Login with Spotify</a>
      {/* Login with spotify button*/}
    </div>
  );
}

export default Login;
