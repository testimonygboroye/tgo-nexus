import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Blog", "Contact"];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      background: "var(--bg)",
      borderBottom: "1px solid #1e293b",
      zIndex: 1000
    }}>

      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 0"
      }}>

        {/* BRAND */}
        <div style={{
          color: "var(--primary)",
          fontWeight: "bold",
          fontSize: "20px"
        }}>
          TGO Nexus
        </div>

        {/* DESKTOP MENU */}
        <nav className="desktop" style={{
          display: "flex",
          gap: "20px"
        }}>
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: "var(--muted)"
            }}>
              {item}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <div onClick={() => setOpen(!open)} style={{
          fontSize: "26px",
          cursor: "pointer",
          color: "white"
        }}>
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "15px",
          borderTop: "1px solid #1e293b"
        }}>
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: "var(--muted)"
            }}>
              {item}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
