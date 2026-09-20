import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={{ padding: "60px 20px 100px", textAlign: "center" }}>
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
        <a className="contact-btn" href="tel:+918978354136">
          <FaPhoneAlt /> 8978354136
        </a>
      </div>
    </section>
  );
}

export default Contact;