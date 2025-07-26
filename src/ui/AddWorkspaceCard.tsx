import { useState } from "react";
import "./AddWorkSpaceCard.css";

export default function AddWorkspaceCard({ onClick }: { onClick: () => void }) {
  return (
    <button id="widget" onClick={onClick}>
      +
    </button>
  );
}
