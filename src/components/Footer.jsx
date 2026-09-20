import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const PORTFOLIO_URL = "https://my-portfolio-five-phi-59.vercel.app";

function Footer() {
  const iconStyle = { color: "white", fontSize: "1.5rem" };
  return (
    <footer style={{
      textAlign: "center", padding: "40px 20px",
      background: "#1e293b", marginTop: "40px"
    }}>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "16px" }}>
        <a href="https://github.com/chennakesavareddythota897" target="_blank" rel="noreferrer" style={iconStyle}><FaGithub /></a>
        <a href="https://www.linkedin.com/in/thota-chennakesavareddy-8818a7276" target="_blank" rel="noreferrer" style={iconStyle}><FaLinkedin /></a>
        <a href="mailto:chennakesavareddythota@gmail.com" style={iconStyle}><FaEnvelope /></a>
        <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" style={iconStyle}><FaGlobe /></a>
      </div>
      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        Portfolio: <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" style={{ color: "#38bdf8" }}>{PORTFOLIO_URL}</a>
      </p>
      <p style={{ fontSize: "0.85rem", opacity: 0.6, marginTop: "8px" }}>
        © 2026 Chennakesava Reddy Thota. Built with React
      </p>
    </footer>
  );
}

export default Footer;