function About() {
  return (
    <section id="about" style={{
      minHeight: "70vh", padding: "100px 20px 60px",
      maxWidth: "800px", margin: "0 auto", textAlign: "center"
    }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "20px" }}>About Me</h2>
      <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        I'm Chennakesava Reddy Thota, a Full Stack Developer with 6 months of internship
        experience building responsive web applications using React.js, Python and FastAPI.
        I have hands-on experience with reusable frontend components, RESTful APIs,
        authentication, CRUD operations and database-driven applications. I hold a B.Tech
        in Artificial Intelligence and enjoy building scalable end-to-end web apps.
      </p>
    </section>
  );
}

export default About;