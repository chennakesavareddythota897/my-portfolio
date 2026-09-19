import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub, FaBrain, FaChrome } from "react-icons/fa";
import { SiFastapi, SiScikitlearn, SiSqlite, SiMysql, SiMui, SiBootstrap, SiTailwindcss, SiPostman, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Python", icon: <FaPython /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "scikit-learn", icon: <SiScikitlearn /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "Chrome Extensions", icon: <FaChrome /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma", icon: <SiFigma /> },
];
function Skills() {
  return (
    <section id="skills" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "30px" }}>Skills</h2>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "20px",
        justifyContent: "center", maxWidth: "800px", margin: "0 auto"
      }}>
        {skills.map((skill) => (
          <div key={skill.name} ClassName="card" style={{
            background: "#1e293b", padding: "20px", borderRadius: "12px",
            width: "130px", display: "flex", flexDirection: "column",
            alignItems: "center", gap: "10px", fontSize: "2rem", color: "#38bdf8"
          }}>
            {skill.icon}
            <span style={{ fontSize: "1rem", color: "#e2e8f0" }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;