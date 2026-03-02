import { useState } from "react";

function DoctorSignup() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    specialization: "",
    regNumber: "",
    regState: "",
    hospital: "",
    experience: "",
    patientsTreated: "",
    password: "",           // ✅ ADDED
    confirmPassword: "",    // ✅ ADDED
  });

  const [photo, setPhoto] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ PASSWORD VALIDATION (ADDED)
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    const formData = new FormData();

    // TEXT FIELDS
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    // FILES
    formData.append("photo", photo);
    formData.append("certificate", certificate);

    try {
      const res = await fetch("http://localhost:5000/api/doctor/signup", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Doctor registered successfully ✅");
      } else {
        alert("Doctor registration failed");
      }
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Doctor Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Doctor Name" required onChange={handleChange} />
        <input name="age" placeholder="Age" required onChange={handleChange} />

        <select name="gender" required onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input name="specialization" placeholder="Specialization" required onChange={handleChange} />
        <input name="regNumber" placeholder="Medical Registration Number" required onChange={handleChange} />
        <input name="regState" placeholder="Registration State" required onChange={handleChange} />
        <input name="hospital" placeholder="Current Hospital" required onChange={handleChange} />
        <input name="experience" placeholder="Years of Experience" required onChange={handleChange} />
        <input name="patientsTreated" placeholder="Patients Treated Count" required onChange={handleChange} />

        {/* ✅ ADDED PASSWORD FIELDS */}
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          onChange={handleChange}
        />

        {/* PHOTO */}
        <label>Professional Photo</label>
        <input type="file" accept="image/*" required onChange={(e) => setPhoto(e.target.files[0])} />

        {/* CERTIFICATE */}
        <label>Registration Certificate</label>
        <input type="file" accept="image/*" required onChange={(e) => setCertificate(e.target.files[0])} />

        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default DoctorSignup;