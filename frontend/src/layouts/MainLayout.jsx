function MainLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "#f8fafc",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(12px)",
          background: "rgba(11,18,32,0.9)",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          TGO NEXUS
        </div>
      </header>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
