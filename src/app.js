const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const analyticsRoutes = require("./routes/analyticsRoutes");

const searchRoutes = require("./routes/searchRoutes");

const portfolioSettingsRoutes = require("./routes/portfolioSettingsRoutes");

const uploadRoutes = require("./routes/uploadRoutes");

const certificateRoutes = require("./routes/certificateRoutes");

const educationRoutes = require("./routes/educationRoutes");

const experienceRoutes = require("./routes/experienceRoutes");

const skillRoutes = require("./routes/skillRoutes");

const contactRoutes = require("./routes/contactRoutes");

const indexRoutes = require("./routes/index");

const authRoutes = require("./routes/authRoutes");

const projectRoutes = require("./routes/projectRoutes");

const blogRoutes = require("./routes/blogRoutes");

const routes = require("./routes");
const app = express();

// ===== Middleware =====
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", routes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/contacts", contactRoutes);
app.use("/api", indexRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/experiences", experienceRoutes);
app.use("/api/v1/educations", educationRoutes);
app.use("/api/v1/certificates", certificateRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/v1/settings", portfolioSettingsRoutes);
app.use("/api/v1/search", searchRoutes);
app.use("/api/v1/analytics", analyticsRoutes);

// ===== Health Check =====
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "TGO Nexus API",
    time: new Date().toISOString()
  });
});

// ===== Base Route =====
app.get("/api", (req, res) => {
  res.json({
    name: "TGO Nexus API",
    version: "1.0.0",
    status: "running",
    endpoints: {
      health: "/health",
      register: "POST /api/v1/auth/register",
      login: "POST /api/v1/auth/login"
    }
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to TGO Nexus API 🚀"
  });
});

module.exports = app;
