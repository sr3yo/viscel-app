import "./DashBoard.css";
import React from "react";
import SideBar from "./SideBar";

export default function DashBoard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>This is where you can manage your projects and settings.</p>
      <SideBar></SideBar>
    </div>
  );
}
