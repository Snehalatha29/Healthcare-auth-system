import { useEffect, useState } from "react";

function DoctorDashboard() {
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("doctorName");
    setDoctorName(name || "Doctor");
  }, []);

  return (
    <div style={styles.container}>
      <h1>Hello  {doctorName} </h1>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Pending Approvals</h3>
          <p>New patient requests waiting...</p>
        </div>

        <div style={styles.card}>
          <h3>Patients List</h3>
          <p>View all assigned patients</p>
        </div>

        <div style={styles.card}>
          <h3>Documents</h3>
          <p>Uploaded certificates & records</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    width: "220px",
    padding: "20px",
    boxShadow: "0 0 10px #ccc",
    borderRadius: "10px",
  },
};

export default DoctorDashboard;