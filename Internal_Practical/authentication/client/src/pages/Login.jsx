import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert(response.data.msg);
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed. Please try again.");
    }
  };

  return (
    <div
      className="login-main"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#e3f0ff 60%,#f8f9fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="login-card"
        style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          padding: "2.5rem 2rem",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: "2rem",
            marginBottom: 24,
          }}
        >
          Welcome Back
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontWeight: 600, color: "#1976d2" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "0.7rem 1rem",
                borderRadius: 8,
                border: "1.5px solid #e0e7ef",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.2s",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontWeight: 600, color: "#1976d2" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "0.7rem 1rem",
                borderRadius: 8,
                border: "1.5px solid #e0e7ef",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.2s",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg,#1976d2 60%,#64b5f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.7rem 2rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px #90caf955",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Login
          </button>
        </form>
        <button
          className="secondary-btn"
          onClick={() => navigate("/register")}
          style={{
            marginTop: 18,
            background: "none",
            color: "#1976d2",
            border: "none",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Don't have an account?
        </button>
      </div>
    </div>
  );
}

export default Login;
