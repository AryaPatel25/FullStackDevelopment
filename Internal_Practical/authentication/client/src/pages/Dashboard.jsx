import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const [stats, setStats] = useState({ logins: 0, lastLogin: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard");
        setMessage(res.data.msg);
        if (res.data.user) setUser(res.data.user);
        if (res.data.stats) setStats(res.data.stats);
      } catch (err) {
        setMessage("Welcome to your dashboard!");
      }
    };
    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="dashboard-main"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#e3f0ff 60%,#f8f9fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="dashboard-card"
        style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          padding: "2.5rem 2rem",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <img
            src={`https://ui-avatars.com/api/?name=${
              user.name || "User"
            }&background=1976d2&color=fff&size=64`}
            alt="avatar"
            style={{
              borderRadius: "50%",
              width: 64,
              height: 64,
              boxShadow: "0 2px 8px #90caf955",
            }}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "2rem", color: "#1976d2" }}>
              {user.name || "User"}
            </h2>
            <div style={{ color: "#555", fontSize: "1rem" }}>
              {user.email || "user@email.com"}
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: 8 }}>
            {message}
          </div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#1976d2",
                }}
              >
                {stats.logins}
              </div>
              <div style={{ color: "#888" }}>Logins</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#1976d2",
                }}
              >
                {stats.lastLogin
                  ? new Date(stats.lastLogin).toLocaleString()
                  : "-"}
              </div>
              <div style={{ color: "#888" }}>Last Login</div>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
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
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
