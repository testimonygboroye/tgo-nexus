import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";

import {
  getProjects,
  getBlogs,
  getSkills,
  getExperience,
  getEducation,
  getCertificates,
} from "./services/api";

function App() {
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      setLoading(true);
      setError(null);

      const results = await Promise.all([
        getProjects(),
        getBlogs(),
        getSkills(),
        getExperience(),
        getEducation(),
        getCertificates(),
      ]);

      const [p, b, s, e, edu, c] = results;

      setProjects(p?.data?.data || []);
      setBlogs(b?.data?.data || []);
      setSkills(s?.data?.data || []);
      setExperience(e?.data?.data || []);
      setEducation(edu?.data?.data || []);
      setCertificates(c?.data?.data || []);
    } catch (err) {
      console.error("APP LOAD ERROR:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div style={styles.loading}>
          Loading TGO Nexus System...
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div style={styles.error}>
          {error}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div style={styles.container}>

        <h1 style={styles.title}>TGO NEXUS DASHBOARD</h1>

        {/* PROJECTS */}
        <Section title="Projects" data={projects} render={(p) => (
          <div style={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        )} />

        {/* BLOGS */}
        <Section title="Blogs" data={blogs} render={(b) => (
          <div style={styles.card}>
            <h3>{b.title}</h3>
            <p>{b.excerpt}</p>
          </div>
        )} />

        {/* SKILLS */}
        <Section title="Skills" data={skills} render={(s) => (
          <div style={styles.card}>
            <strong>{s.name}</strong>
            <p>{s.level}</p>
          </div>
        )} />

        {/* EXPERIENCE */}
        <Section title="Experience" data={experience} render={(e) => (
          <div style={styles.card}>
            <strong>{e.company || e.title}</strong>
            <p>{e.role || e.description}</p>
          </div>
        )} />

        {/* EDUCATION */}
        <Section title="Education" data={education} render={(edu) => (
          <div style={styles.card}>
            <strong>{edu.institution || edu.school}</strong>
            <p>{edu.degree || edu.field}</p>
          </div>
        )} />

        {/* CERTIFICATES */}
        <Section title="Certificates" data={certificates} render={(c) => (
          <div style={styles.card}>
            <strong>{c.title}</strong>
            <p>{c.issuer}</p>
          </div>
        )} />
        
        <Contact />

        <footer style={styles.footer}>
          TGO Nexus © 2026 — Production System Online
        </footer>

      </div>
    </MainLayout>
  );
}

/* -------------------- REUSABLE SECTION COMPONENT -------------------- */
function Section({ title, data, render }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.grid}>
        {data.length === 0 ? (
          <p style={styles.empty}>No {title} available</p>
        ) : (
          data.map((item) => (
            <div key={item._id} style={styles.card}>
              {render(item)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* -------------------- STYLES (PRODUCTION DARK UI) -------------------- */
const styles = {
  container: {
    padding: "40px",
    background: "#0b1220",
    minHeight: "100vh",
    color: "#e5e7eb",
    fontFamily: "system-ui",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
    fontWeight: "700",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    borderBottom: "1px solid #1f2937",
    paddingBottom: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "12px",
  },
  card: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #1f2937",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#6b7280",
  },
  loading: {
    padding: "40px",
    textAlign: "center",
  },
  error: {
    padding: "40px",
    textAlign: "center",
    color: "red",
  },
  empty: {
    color: "#6b7280",
  },
};

export default App;
