function Home() {
  return (
    <section id="home" className="hero" style={{
      minHeight: "100vh", display: "flex",
      flexDirection: "column", justifyContent: "center",
      alignItems: "center", textAlign: "center", padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem" }}>
        Hi, I'm <span style={{ color: "#38bdf8" }}>Chennakesavareddy</span>
      </h1>
      <h2 style={{ marginTop: "10px" }}>Full Stack Developer</h2>
      <p style={{ marginTop: "16px", maxWidth: "550px", lineHeight: "1.7" }}>
        I build responsive web apps and AI-powered tools using React, Python, FastAPI and SQL.
      </p>
      <div style={{ display: "flex", gap: "16px", marginTop: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <a className="contact-btn" href="#projects">View My Projects</a>
        <a className="contact-btn" href="/Chennakesavareddy_Thota_Resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;