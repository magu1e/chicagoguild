// src/Login.jsx
import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} className="btn btn-outline-light ms-3">
        Ingresar
      </button>
    </div>
  );
};

export default Login;
