import multer from "multer";
import path from "path";

// ================= IMPORTS =================
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import fs from "fs";

// ================= FILE UPLOAD CONFIG =================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + file.originalname;
    cb(null, unique);
  },
});

const upload = multer({ storage });

// ================= INIT =================
const app = express();
app.use(cors());
app.use(express.json());

// STATIC FILES
app.use("/uploads", express.static("uploads"));

// ================= FILE DATABASE =================
const DATA_FILE = "patients.json";

let patients = [];

// Load existing data
if (fs.existsSync(DATA_FILE)) {
  patients = JSON.parse(fs.readFileSync(DATA_FILE));
}

// Save function
function savePatients() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(patients, null, 2));
}

// ================= EMAIL CONFIG =================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your-app-password",
  },
});

// ================= PATIENT SIGNUP =================
app.post("/api/patient/signup", async (req, res) => {
  try {
    const data = req.body;

    const exists = patients.find((p) => p.email === data.email);
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    patients.push(data);
    savePatients();

    await transporter.sendMail({
      from: "yourgmail@gmail.com",
      to: "yourgmail@gmail.com",
      subject: "New Patient Registered",
      html: `
        <h2>New Patient Signup</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Gender:</b> ${data.gender}</p>
        <p><b>Mobile:</b> ${data.mobile}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Address:</b> ${data.address}</p>
      `,
    });

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// ================= PATIENT LOGIN =================
app.post("/api/patient/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = patients.find((u) => u.email === email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      success: true,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================= DOCTOR PANEL DATA =================
app.get("/api/patients", (req, res) => {
  res.json(patients);
});

// ================= DOCTOR SIGNUP =================
let doctors = [];

app.post(
  "/api/doctor/signup",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = req.body;

      const photo = req.files.photo?.[0]?.filename;
      const certificate = req.files.certificate?.[0]?.filename;

      const doctor = {
        ...data,
        photo,
        certificate,
        approved: true, // AUTO APPROVE
      };

      doctors.push(doctor);

      console.log("Doctor saved:", doctor);

      res.json({ success: true });
    } catch (err) {
      console.log("Doctor upload error:", err);
      res.status(500).json({ success: false });
    }
  }
);

// ================= DOCTOR LOGIN (ADDED) =================
app.post("/api/doctor/login", async (req, res) => {
  const { regNumber, password } = req.body;

  const doctor = doctors.find((d) => d.regNumber === regNumber);

  console.log("LOGIN CHECK:", doctor);

  if (!doctor) {
    return res.json({ message: "Doctor not found" });
  }

  if (doctor.approved === false) {
    return res.json({ message: "Doctor not approved yet" });
  }

  res.json({
    success: true,
    name: doctor.name,
  });
});

// ================= START SERVER =================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});