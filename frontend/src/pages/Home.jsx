import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/curelex-logo.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Curelex Logo" style={styles.logo} />
          <h2 style={{ marginLeft: 10 }}>Curelex</h2>
        </div>

        <div style={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <button onClick={() => navigate("/signup")}>
            Patient Signup
          </button>

          <button onClick={() => navigate("/doctor-signup")}>
            Doctor Signup
          </button>

          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <h1>Your Health, Our Priority ❤️</h1>
        <p>
          A smart healthcare platform connecting patients and doctors securely.
        </p>
        <button style={styles.primaryBtn} onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>
          HealthCare+ is a digital healthcare platform designed to streamline
          communication between patients and certified doctors.
        </p>

        <h3>Our Vision</h3>
        <p>To make healthcare accessible anytime, anywhere.</p>

        <h3>Our Mission</h3>
        <p>Enable secure health tracking and remote consultations.</p>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2>Our Services</h2>
        <ul>
          <li>✔ Online patient registration</li>
          <li>✔ Secure medical records tracking</li>
          <li>✔ Doctor onboarding & verification</li>
          <li>✔ Follow-up management</li>
          <li>✔ Email notification system</li>
        </ul>
      </section>

      {/* SUPPORTED BY */}
     <section style={styles.section}>
  <h2>Supported By</h2>

  <div style={styles.supported}>
    <div>
      <img
        src="https://img.icons8.com/color/96/university.png"
        height="60"
      />
      <p>IIIT Allahabad</p>
    </div>

    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        height="60"
      />
      <p>United University Incubation Cell</p>
    </div>

    <div>
      <img
        src="https://img.icons8.com/color/96/graduation-cap.png"
        height="60"
      />
      <p>Asian Institute of Technology</p>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <p>📍 Hyderabad, India</p>
        <p>📞 +91 9876543210</p>
        <p>📧 curelex@gmail.com</p>
         <p>🔗 LinkedIn: https://linkedin.com/company/curelex</p>
<p>📸 Instagram: https://instagram.com/curelex.health</p>
<p>🐦 Twitter/X: https://twitter.com/curelex_ai</p>
<p>📘 Facebook: https://facebook.com/curelex</p>
        <iframe
          title="map"
          width="100%"
          height="200"
          style={{ border: 0, marginTop: 10 }}
          src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </section>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 30px",
    background: "linear-gradient(to right, #2196f3, #21cbf3)",
    color: "white",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    height: "40px",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  hero: {
    textAlign: "center",
    padding: "50px 20px",
  },

  primaryBtn: {
    padding: "10px 25px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    marginTop: 10,
  },

  section: {
    padding: "30px 20px",
  },

  supported: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20,
    textAlign: "center",
  },
};