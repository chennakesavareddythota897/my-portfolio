import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const PORTFOLIO_URL = "https://my-portfolio-five-phi-59.vercel.app";

function Contact() {
  return (
    <section id="contact" style={{
      padding: "60px 20px 40px", textAlign: "center", background: "#1e293b"
    }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "16px" }}>Contact Me</h2>
      <p style={{ marginBottom: "30px" }}>
        Open to Full Stack Developer opportunities. Let's connect!
      </p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <a className="contact-btn" href="mailto:chennakesavareddythota@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a className="contact-btn" href="https://github.com/chennakesavareddythota897" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a className="contact-btn" href="https://www.linkedin.com/in/thota-chennakesavareddy-8818a7276" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a className="contact-btn" href={PORTFOLIO_URL} target="_blank" rel="noreferrer">
          <FaGlobe /> Portfolio
        </a>
      </div>
      <p style={{ marginTop: "50px", fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Chennakesava Reddy Thota. Built with React
      </p>
    </section>
  );
}

export default Contact;