export default function Blog({ blogs = [] }) {
  return (
    <section>
      <h2>Blogs</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "16px",
        }}
      >
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="card"
            >
              <h3>{blog.title}</h3>

              <p style={{ marginTop: "10px" }}>
                {blog.excerpt}
              </p>

              {blog.category && (
                <p
                  style={{
                    marginTop: "10px",
                    opacity: 0.7,
                    fontSize: "14px",
                  }}
                >
                  {blog.category}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
