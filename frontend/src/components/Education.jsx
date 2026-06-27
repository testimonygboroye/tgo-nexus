export default function Education({ education = [] }) {
  return (
    <section>
      <h2>Education</h2>

      {education.length === 0 ? (
        <p>No education available.</p>
      ) : (
        education.map((item) => (
          <div key={item._id} className="card">
            <h3>{item.institution || item.school}</h3>
            <p>{item.degree || item.field}</p>
          </div>
        ))
      )}
    </section>
  );
}
