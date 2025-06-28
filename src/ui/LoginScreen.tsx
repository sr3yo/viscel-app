import React from "react";
import "./LoginScreen.css";

export default function LoginScreen() {
  return (
    <>
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
      <div id="entire-login-container">
        <div id="welcome-message">
          <h1>welcome to viscel</h1>
        </div>
        <div id="login-background">
          <div id="login-container">
            <h1>viscel</h1>
          </div>
        </div>
      </div>
    </>
  );
}
