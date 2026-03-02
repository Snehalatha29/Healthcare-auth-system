export default function Doctor({ goHome }) {
  return (
    <div style={{ padding: 30 }}>
      <h2>🩺 Doctor Panel</h2>
      <p>Welcome Doctor 👨‍⚕️</p>

      <div style={card}>
        <h3>👥 Patients</h3>
        <p>John, Ramesh, Priya</p>
      </div>

      <div style={card}>
        <h3>📅 Appointments</h3>
        <p>5 scheduled today</p>
      </div>

      <div style={card}>
        <h3>💊 Prescriptions</h3>
        <p>Manage patient medicines</p>
      </div>

      <button onClick={goHome}>⬅ Logout</button>
    </div>
  );
}

const card = {
  background: "#f3f3f3",
  padding: 15,
  margin: "15px 0",
  borderRadius: 8,
};