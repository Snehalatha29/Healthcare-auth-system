export default function About() {
  return (
    <div id="about" style={styles.section}>
      <h2>About Us</h2>
      <p>
        We are building AI-powered healthcare solutions to connect patients and
        doctors digitally. Our mission is to make healthcare accessible,
        affordable, and intelligent.
      </p>

      <p>
        Vision: Remote healthcare for everyone. <br />
        Mission: Smart medical tracking and early diagnosis.
      </p>
    </div>
  );
}

const styles = { section: { padding: 40, textAlign: "center" } };