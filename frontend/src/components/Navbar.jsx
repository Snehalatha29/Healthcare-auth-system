export default function Navbar({ goLogin }) {
  return (
    <div style={styles.nav}>
      <h2 style={{ color: "white" }}>HealthAI</h2>

      <div>
        <a href="#about" style={styles.link}>About</a>
        <a href="#supported" style={styles.link}>Supported By</a>
        <a href="#contact" style={styles.link}>Contact</a>

        <button onClick={goLogin} style={styles.btn}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    background: "#0f172a"
  },
  link: {
    color: "#ddd",
    marginRight: 20,
    textDecoration: "none"
  },
  btn: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer"
  }
};