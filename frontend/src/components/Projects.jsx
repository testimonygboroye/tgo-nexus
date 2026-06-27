export default function Projects({ projects = [] }) {
  return (
    <section>
      <h2>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "16px",
        }}
      >
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="card"
            >
              <h3>{project.title}</h3>

              <p style={{ marginTop: "10px" }}>
                {project.description}
              </p>

              {project.category && (
                <p
                  style={{
                    marginTop: "10px",
                    opacity: 0.7,
                    fontSize: "14px",
                  }}
                >
                  {project.category}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
