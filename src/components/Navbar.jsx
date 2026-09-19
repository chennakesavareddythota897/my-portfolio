import { useState } from "react";

const links = ["home", "about", "skills", "experience", "projects", "education", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Chennakesavareddy Thota</h2>
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l} className="nav-link" href={`#${l}`} onClick={() => setOpen(false)}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;