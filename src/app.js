const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ===== Health Check =====
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "TGO Nexus API",
    time: new Date().toISOString()
  });
});

// ===== Base Route =====
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to TGO Nexus API 🚀"
  });
});

module.exports = app;
