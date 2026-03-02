import { useEffect, useState } from "react";

export default function Admin() {
  const [doctors, setDoctors] = useState([]);

  // Load pending doctors
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data.filter(d => !d.approved)));
  }, []);

  const approveDoctor = async (email) => {
    await fetch(`http://localhost:5000/admin/approve/${email}`, {
      method: "POST",
    });
    alert("Doctor Approved ✅");
    window.location.reload();
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Panel 👑</h2>
      <h3>Pending Doctors</h3>

      {doctors.length === 0 ? (
        <p>No pending approvals</p>
      ) : (
        doctors.map(doc => (
          <div key={doc.email} style={{
            background: "#f3f4f6",
            padding: 15,
            marginBottom: 10,
            borderRadius: 8
          }}>
            <p><b>Name:</b> {doc.name}</p>
            <p><b>Email:</b> {doc.email}</p>

            <button onClick={() => approveDoctor(doc.email)}>
              Approve ✅
            </button>
          </div>
        ))
      )}
    </div>
  );
}