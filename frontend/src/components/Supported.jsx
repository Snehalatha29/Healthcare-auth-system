export default function Supported() {
  return (
    <div id="supported" style={styles.section}>
      <h2>Supported By</h2>
      <ul style={styles.list}>
        <li>Indian Institute of Information Technology, Allahabad</li>
        <li>Startup and Incubation Cell United University</li>
        <li>Asian Institute of Technology</li>
      </ul>
    </div>
  );
}

const styles = {
  section: { padding: 40, background: "#f1f5f9", textAlign: "center" },
  list: { listStyle: "none", padding: 0 }
};