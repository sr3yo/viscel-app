import "./SideBar.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

export default function SideBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) return <div className="sidebar-container">Loading user...</div>;

  return (
    <div className="sidebar-container">
      <div id="top-bar">
        <div id="profile-container">
          <img
            src={user.photoURL || ""}
            alt={user.displayName || "profile"}
            style={{ width: 50, height: 50, borderRadius: "20%", scale: 0.8 }}
          />
          <div className="home-text" style={{ scale: 0.8 }}>
            {user.displayName}
          </div>
        </div>
      </div>
    </div>
  );
}
