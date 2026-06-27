export default function Skills({ skills = [] }) {
  return (
    <section>
      <h2>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "16px",
        }}
      >
        {skills.length === 0 ? (
          <p>No skills available.</p>
        ) : (
          skills.map((skill) => (
            <div key={skill._id} className="card">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
