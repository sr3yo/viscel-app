import React, { use } from "react";
import "./Logo.css";
import templogo from "../assets/templogo.png";
import { useState } from "react";
import { useEffect } from "react";

export default function LogoAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  //lol; yes this part is brute forced.. just added a brute forced loading screen
  //to add some delay before the login screen appears
  const [message, setMessage] = useState("initializing experience...");
  useEffect(() => {
    //timers for loading messages
    const timer1 = setTimeout(() => setMessage("getting ready..."), 2000);
    const timer2 = setTimeout(() => setMessage("opening..."), 5000);
    const timer3 = setTimeout(() => onComplete(), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <>
      <div className="loading-screen">
        <h1 className="logo">
          <img id="symbol" src={templogo} alt="" />
          <span className="visce">isce</span>
          <span className="l">L</span>
        </h1>

        <h2 className="logo-subtitle">{message}</h2>
      </div>
    </>
  );
}
