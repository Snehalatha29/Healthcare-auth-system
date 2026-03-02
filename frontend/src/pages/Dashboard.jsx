import { useState, useEffect } from "react";

function Dashboard() {
  // ✅ Get name from login
  const [name, setName] = useState("");

  const [symptom, setSymptom] = useState("");
  const [prescription, setPrescription] = useState("");
  const [followup, setFollowup] = useState("");

  const [symptomsList, setSymptomsList] = useState([]);
  const [prescriptionsList, setPrescriptionsList] = useState([]);
  const [followupsList, setFollowupsList] = useState([]);

  // ✅ Load saved data
  useEffect(() => {
    const storedName = localStorage.getItem("patientName");
    if (storedName) setName(storedName);

    setSymptomsList(JSON.parse(localStorage.getItem("symptoms")) || []);
    setPrescriptionsList(JSON.parse(localStorage.getItem("prescriptions")) || []);
    setFollowupsList(JSON.parse(localStorage.getItem("followups")) || []);
  }, []);

  // ================== ADD FUNCTIONS ==================
  const addSymptom = () => {
    if (!symptom) return;
    const updated = [...symptomsList, symptom];
    setSymptomsList(updated);
    localStorage.setItem("symptoms", JSON.stringify(updated));
    setSymptom("");
  };

  const addPrescription = () => {
    if (!prescription) return;
    const updated = [...prescriptionsList, prescription];
    setPrescriptionsList(updated);
    localStorage.setItem("prescriptions", JSON.stringify(updated));
    setPrescription("");
  };

  const addFollowup = () => {
    if (!followup) return;
    const updated = [...followupsList, followup];
    setFollowupsList(updated);
    localStorage.setItem("followups", JSON.stringify(updated));
    setFollowupsList(updated);
    setFollowup("");
  };

  // ================== LOGOUT ==================
  const logout = () => {
    if (window.confirm("Logout now?")) {
      localStorage.clear();
      window.location.href = "/login";
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      
      {/* Logout */}
      <button
        onClick={logout}
        style={{
          width: "100%",
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "12px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Logout
      </button>

      <h2>Welcome to Patient Dashboard </h2>
      <h3>Hello, {name || "Patient"} </h3>

      {/* ================= SYMPTOMS ================= */}
      <h3>Current Symptoms</h3>
      <input
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter symptom"
        style={{ width: "100%", padding: "10px", marginBottom: "8px" }}
      />
      <button onClick={addSymptom} className="btn">Add</button>

      <ul>
        {symptomsList.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* ================= PRESCRIPTIONS ================= */}
      <h3>Past Prescriptions</h3>
      <input
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        placeholder="Enter prescription"
        style={{ width: "100%", padding: "10px", marginBottom: "8px" }}
      />
      <button onClick={addPrescription} className="btn">Add</button>

      <ul>
        {prescriptionsList.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* ================= FOLLOWUPS ================= */}
      <h3>Follow-Ups</h3>
      <input
        value={followup}
        onChange={(e) => setFollowup(e.target.value)}
        placeholder="Enter follow-up"
        style={{ width: "100%", padding: "10px", marginBottom: "8px" }}
      />
      <button onClick={addFollowup} className="btn">Add</button>

      <ul>
        {followupsList.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;