function Education() {
  const box = { background: "#1e293b", padding: "24px", borderRadius: "12px", textAlign: "left" };
  return (
    <section id="education" style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "30px", textAlign: "center" }}>
        Education & Certifications
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="card" style={box}>
          <h3 style={{ color: "#38bdf8" }}>B.Tech in Artificial Intelligence (CSE)</h3>
          <p style={{ fontWeight: 600 }}>Gates Institute of Technology, Gooty</p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>Nov 2021 - Apr 2025</p>
        </div>
        <div className="card" style={box}>
          <h3 style={{ color: "#38bdf8" }}>Intermediate (MPC)</h3>
          <p style={{ fontWeight: 600 }}>Swami Vivekananda Junior College, Anantapur</p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>Jun 2018 - Mar 2020</p>
        </div>
        <div className="card" style={box}>
          <h3 style={{ color: "#38bdf8" }}>Python FullStack Development</h3>
          <p style={{ fontWeight: 600 }}>Besant Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default Education;