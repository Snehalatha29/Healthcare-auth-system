export default function Contact() {
  return (
    <div id="contact" style={styles.section}>
      <h2>Contact Us</h2>

      <p>Email: contact@healthai.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: Hyderabad, India</p>

      <div style={{ marginTop: 10 }}>
        <a href="#">LinkedIn</a> | <a href="#">Twitter</a> |
        <a href="#"> Instagram</a> | <a href="#"> Facebook</a>
      </div>
    </div>
  );
}

const styles = { section: { padding: 40, textAlign: "center" } };