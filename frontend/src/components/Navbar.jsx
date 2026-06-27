export default function Navbar() {
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
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 0"
      }}>

        {/* BRAND */}
        <div style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "var(--primary)",
          letterSpacing: "1px"
        }}>
          TGO Nexus
        </div>

        {/* NAV LINKS */}
        <nav style={{
          display: "flex",
          gap: "22px",
          alignItems: "center"
        }}>
          {["About","Skills","Projects","Experience","Blog","Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "var(--muted)",
                fontSize: "14px",
                fontWeight: 500
              }}
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
