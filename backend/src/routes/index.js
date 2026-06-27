const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const projectRoutes = require("./projectRoutes");

// Mount modules
router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);

router.get("/", (req, res) => {
  res.json({
    success: true,
    project: "TGO Nexus API",
    version: "1.0.0",
    endpoints: {
      auth: "/api/v1/auth",
      projects: "/api/v1/projects",
      blogs: "/api/v1/blogs",
      contacts: "/api/v1/contacts",
      health: "/health"
    }
  });
});

module.exports = router;



