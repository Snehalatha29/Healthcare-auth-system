import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/patient/login", {
        email,
        password,
      });

      // ✅ ADDED: safe success check
      if (res.data.success) {
        // ✅ STORE NAME
        localStorage.setItem("patientName", res.data.name);

        // ✅ ADDED: ROLE STORAGE (PROJECT REQUIREMENT)
        localStorage.setItem("role", "patient");

        // ✅ ADDED: AUTH FLAG (future JWT ready)
        localStorage.setItem("isLoggedIn", "true");

        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // ✅ FORGOT PASSWORD (KEPT)
  const handleForgot = () => {
    const mail = prompt("Enter your registered email:");
    if (!mail) return;

    alert(`Password reset link sent to ${mail} (Demo version)`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <div style={{ width: "350px", padding: "20px", boxShadow: "0 0 10px #ccc", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center" }}>Patient Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "#1e90ff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>

        {/* DOCTOR LOGIN BUTTON */}
        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={() => navigate("/doctor-login")}
        >
          Doctor Login
        </button>

        {/* FORGOT PASSWORD */}
        <p
          onClick={handleForgot}
          style={{ textAlign: "center", color: "blue", cursor: "pointer", marginTop: "10px" }}
        >
          Forgot Password?
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            padding: "10px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            marginTop: "10px"
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;