function Hero() {
  return (
    <section
      style={{
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          marginBottom: "20px",
        }}
      >
        Hi, I'm Testimony Gboroye
      </h1>

      <h3
        style={{
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        Full Stack Developer
      </h3>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        I build modern web applications, REST APIs, scalable backend systems,
        and beautiful user interfaces using JavaScript, React, Node.js,
        Express, and MongoDB.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button>View Projects</button>
        <button>Hire Me</button>
      </div>
    </section>
  );
}

export default Hero;
