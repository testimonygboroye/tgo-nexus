import { useEffect, useState } from "react";
import { getProjects, getBlogs } from "../services/api";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsRes, blogsRes] = await Promise.all([
          getProjects(),
          getBlogs(),
        ]);

        setProjects(projectsRes.data.data || []);
        setBlogs(blogsRes.data.data || []);
      } catch (err) {
        console.error("Home load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={styles.loading}>
        Loading TGO Nexus Dashboard...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TGO NEXUS DASHBOARD</h1>

      {/* PROJECTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((p) => (
            <div key={p._id} style={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span style={styles.tag}>{p.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOGS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Blogs</h2>
        <div style={styles.grid}>
          {blogs.map((b) => (
            <div key={b._id} style={styles.card}>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
              <span style={styles.tag}>{b.category}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#0f172a",
    color: "#fff",
    minHeight: "100vh",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "15px",
    borderBottom: "1px solid #334155",
    paddingBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  tag: {
    display: "inline-block",
    marginTop: "10px",
    fontSize: "12px",
    background: "#334155",
    padding: "4px 8px",
    borderRadius: "6px",
  },
  loading: {
    color: "#fff",
    padding: "40px",
    fontSize: "18px",
  },
};
