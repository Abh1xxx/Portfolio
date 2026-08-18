import { useState } from "react";
const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="brand" href="#home">
        ABHIRAM <span>K RAJAN</span>
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "×" : "☰"}
      </button>
      <nav className={open ? "open" : ""}>
        {links.map(([name, id]) => (
          <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>
            {name}
          </a>
        ))}
        <a
          className="resume"
          href="/ABHIRAM DM.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
