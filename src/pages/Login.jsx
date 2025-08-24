// src/pages/Login.jsx
import React, { useState } from "react";
import "./Login.css";
import useAuth from "../hooks/useAuth";
import { login as loginAPI } from "../api"; // <-- correct api function

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // useAuth ka login function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call backend API
      const res = await loginAPI({ email, password }); 
      // res = { user: {...}, token: "abcd..." }

      // Save user + token in localStorage via useAuth
      login(res.user, res.token);

      alert("Login successful!");
      window.location.href = "/"; // redirect to homepage
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p className="login-text">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
