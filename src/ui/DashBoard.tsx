import "./DashBoard.css";
import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import AddWorkspaceCard from "./AddWorkspaceCard";
import AppPopups from "./AppPopups";

export default function DashBoard() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="dashboard-container">
      <div className="blobs-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
      </div>
      <div className="inner-container">
        <SideBar></SideBar>
        <div className="widget-container">
          <div className="widget-panel">
            <AddWorkspaceCard
              onClick={() => setShowPopup(true)}
            ></AddWorkspaceCard>
          </div>
        </div>
        {showPopup && <AppPopups onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
