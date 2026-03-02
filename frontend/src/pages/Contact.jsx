export default function Contact() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Contact Us</h2>

      <p><b>Address:</b> HealthCare+ HQ, Hyderabad, India</p>
      <p><b>Email:</b> healthcareplus@gmail.com</p>
      <p><b>Phone:</b> +91 98765 43210</p>

      <h3 style={{ marginTop: 20 }}>Follow Us</h3>
      <p>LinkedIn | Twitter | Instagram | Facebook</p>

      {/* Optional Google Map */}
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: 20 }}
      />
    </div>
  );
}