import React from "react";
import { useState, useEffect } from "react";

import Login from "./Login.jsx";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Calendario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Votaciones
              </a>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn btn-primary ms-2">Unite al Discord</button>
            {user ? (
              <>
                <div className="d-flex align-items-center ms-4">
                  <small>{user.displayName}</small>
                  <img
                    className="user-img"
                    src={user.photoURL}
                    alt="User Avatar"
                  />
                </div>
                <button
                  className="btn btn-icon text-danger"
                  onClick={handleLogout}
                >
                  <span className="material-symbols-rounded">logout</span>
                </button>
              </>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
