function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "10px",
      padding: "16px 40px", background: "rgba(30, 41, 59, 0.9)",
      backdropFilter: "blur(8px)", zIndex: 10
    }}>
      <h2 style={{ color: "#38bdf8" }}>chennakesavareddy</h2>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#skills">Skills</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;