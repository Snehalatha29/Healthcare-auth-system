import { useEffect, useState } from "react";

function PatientDashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("patientName"));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Hello, {name} 👋</h2>

      <div style={styles.grid}>
        <Card title="🩺 Current Symptoms" items={[
          "Fever (2 days)",
          "Mild headache",
          "Body pain"
        ]} />

        <Card title="💊 Past Prescriptions" items={[
          "Paracetamol - Jan 2025",
          "Vitamin D - Dec 2024"
        ]} />

        <Card title="📅 Past Follow-Ups" items={[
          "Dr. Rao - 12 Jan 2025",
          "Dr. Mehta - 02 Dec 2024"
        ]} />

        <Card title="⏳ Current Follow-Up Status" items={[
          "Next appointment: 25 March",
          "Doctor: General Physician"
        ]} />
      </div>
    </div>
  );
}

const Card = ({ title, items }) => (
  <div style={styles.card}>
    <h3>{title}</h3>
    <ul>
      {items.map((i, idx) => <li key={idx}>{i}</li>)}
    </ul>
  </div>
);

const styles = {
  container: { padding: 30 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
    marginTop: 20,
  },
  card: {
    background: "#f5f9ff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  }
};

export default PatientDashboard;