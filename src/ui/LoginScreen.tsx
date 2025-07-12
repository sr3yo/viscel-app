import React from "react";
import { useState } from "react";
import "./LoginScreen.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { provider } from "../firebaseConfig";
import googleIcon from "../assets/icons8-google.svg";
import DashBoard from "./DashBoard";
const auth = getAuth(app);

export default function LoginScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        console.log("user signed in", user);
        setLoggedIn(true);

        try {
          const response = await fetch("http://localhost:3000/api/saveUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            }),
          });

          const data = await response.json();
          console.log("Backend response:", data);
        } catch (error) {
          console.error("Error sending user to backend:", error);
        }
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  if (loggedIn) {
    return <DashBoard />;
  }
  return (
    <>
      <div className="login-backdrop"></div>
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
      <div id="entire-login-container">
        <div id="welcome-message">
          <h1></h1>
        </div>
        <div id="login-background">
          <div id="login-container">
            <h1 id="greeting-message"></h1>
            <p>welcome back to Viscel</p>
            <form id="login-form">
              <div className="input-container">
                <button
                  type="button"
                  className="google-login"
                  onClick={handleGoogleLogin}
                >
                  {" "}
                  <img src={googleIcon} alt="Google" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
