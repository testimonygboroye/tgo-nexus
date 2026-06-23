const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);

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
