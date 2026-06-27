export default function Experience({ experience = [] }) {
  return (
    <section>
      <h2>Experience</h2>

      {experience.length === 0 ? (
        <p>No experience available.</p>
      ) : (
        experience.map((item) => (
          <div key={item._id} className="card">
            <h3>{item.company || item.title}</h3>
            <p>{item.role || item.description}</p>
          </div>
        ))
      )}
    </section>
  );
}
