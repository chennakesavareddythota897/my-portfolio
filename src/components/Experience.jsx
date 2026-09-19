function Experience() {
  return (
    <section id="experience" style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "30px", textAlign: "center" }}>
        Work Experience
      </h2>
      <div className="card" style={{ background: "#1e293b", padding: "28px", borderRadius: "12px" }}>
        <h3 style={{ color: "#38bdf8" }}>Healthcare Clinic Intern</h3>
        <p style={{ marginTop: "4px", fontWeight: 600 }}>PY Digital Services Pvt. Ltd.</p>
        <p style={{ opacity: 0.7, fontSize: "0.9rem", marginBottom: "16px" }}>Jan 2026 - Jul 2026</p>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>Developed responsive, reusable frontend interfaces using React.js, HTML, CSS and JavaScript for the Healthcare Clinic Website.</li>
          <li>Built and integrated REST APIs using Python and FastAPI for user management, authentication, appointment management and CRUD operations.</li>
          <li>Worked on API integration, form validation, password hashing, environment configuration and collaborative development using Git/GitHub.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;