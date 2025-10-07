import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      background: "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px #90caf955"
    }}>
      <div style={{ fontWeight: 700, fontSize: "1.5rem", color: "#fff" }}>
        AuthApp
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem" }}>Dashboard</Link>
        <Link to="/login" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem" }}>Login</Link>
        <Link to="/register" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem" }}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
