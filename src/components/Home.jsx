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
      <a className="contact-btn" href="#projects" style={{ marginTop: "30px" }}>
        View My Projects
      </a>
    </section>
  );
}

export default Home;