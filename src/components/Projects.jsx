import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Fake Website Detector",
    desc: "Chrome extension + FastAPI backend that extracts 9 URL features (HTTPS, IP domain, keywords, subdomains, hyphens, digit ratio, etc.) and uses a RandomForest model to give a phishing probability: Safe, Suspicious or Phishing. Scan history is stored in SQLite.",
    tech: ["Python", "FastAPI", "scikit-learn", "React", "SQLite"],
    github: "https://github.com/chennakesavareddythota897/AI-Fake-Website-detector",
    live: "",
  },
  {
    title: "Healthcare Clinic Website",
    desc: "A responsive clinic website with services, doctors and appointment sections.",
    tech: ["React", "CSS"],
    github: "https://github.com/chennakesavareddythota897/HealthCare",
    live: "",
  },
  {
    title: "Restaurant Website",
    desc: "A modern restaurant website with menu, gallery and contact sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "",
  },
  {
    title: "E-commerce Project",
    desc: "An online shopping app with product listing, cart and backend APIs.",
    tech: ["React", "FastAPI", "SQL"],
    github: "",
    live: "",
  },
  {
    title: "ATM Simulator",
    desc: "An ATM simulation with balance check, deposit, withdraw and PIN verification.",
    tech: ["Python"],
    github: "https://github.com/chennakesavareddythota897/Python_Basic_ATM_Project",
    live: "",
  },
];

function Projects() {
  return (
    <section id="projects" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "30px" }}>Projects</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px", maxWidth: "1000px", margin: "0 auto"
      }}>
        {projects.map((p) => (
          <div key={p.title} className="card" style={{
            background: "#1e293b", padding: "24px", borderRadius: "12px",
            textAlign: "left", display: "flex", flexDirection: "column", gap: "12px"
          }}>
            <h3 style={{ color: "#38bdf8" }}>{p.title}</h3>
            <p style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {p.tech.map((t) => (
                <span key={t} style={{
                  background: "#0f172a", padding: "4px 10px",
                  borderRadius: "20px", fontSize: "0.8rem"
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "auto", fontSize: "1.3rem" }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaGithub />
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;