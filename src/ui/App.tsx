import React from "react";
import { useState } from "react";
import LogoAnimation from "./Logo";
import "./App.css";
import LoginScreen from "./LoginScreen";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const handleCompletion = () => {
    window.electron.ipcRenderer.send("loading-complete");
    setLoadingStatus(true);
  };
  return (
    <div className="app-container">
      {loadingStatus ? (
        <LoginScreen />
      ) : (
        <LogoAnimation onComplete={handleCompletion} />
      )}
    </div>
  );
}

export default App;
