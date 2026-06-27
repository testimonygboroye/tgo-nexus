export default function Certificates({ certificates = [] }) {
  return (
    <section>
      <h2>Certificates</h2>

      {certificates.length === 0 ? (
        <p>No certificates available.</p>
      ) : (
        certificates.map((item) => (
          <div key={item._id} className="card">
            <h3>{item.title}</h3>
            <p>{item.issuer}</p>
          </div>
        ))
      )}
    </section>
  );
}
