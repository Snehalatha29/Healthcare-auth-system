import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorLogin() {
  const [form, setForm] = useState({
    regNumber: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ UPDATED LOGIN FUNCTION (NEW VERSION)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/doctor/login",
        form
      );

      if (res.data.success) {
        localStorage.setItem("doctorName", res.data.name);
        localStorage.setItem("role", "doctor"); // 🔥 added role support
        alert("Doctor login success ✅");
        navigate("/doctor-dashboard");
      } else {
        alert(res.data.message || "Doctor login failed");
      }
    } catch (err) {
      alert("Doctor login failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Doctor Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          name="regNumber"
          placeholder="Registration Number"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "60px auto",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
};

export default DoctorLogin;