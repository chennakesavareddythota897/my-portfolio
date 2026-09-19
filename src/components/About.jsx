function About() {
  return (
    <section id="about" style={{
      minHeight: "70vh", padding: "100px 20px 60px",
      maxWidth: "800px", margin: "0 auto", textAlign: "center"
    }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "20px" }}>About Me</h2>
      <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        I'm Chennakesavareddy Thota, a Full Stack Developer who enjoys building
        responsive, user-friendly web applications. I work with React, Python,
        FastAPI and SQL. My projects include an AI Fake Website Detector
        (Chrome extension with a machine learning backend), a Healthcare Clinic
        website, a Restaurant website, an E-commerce app and an ATM Simulator.
      </p>
    </section>
  );
}

export default About;