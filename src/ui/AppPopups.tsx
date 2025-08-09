import React from "react";
import { useState } from "react";
import "./AppPopups.css";

export default function AppPopups({ onClose }: { onClose: () => void }) {
  return (
    <div className="popup-window">
      <div className="popup-content">
        <h2>App Popups</h2>

        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}
