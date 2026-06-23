const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  getProject
} = require("../controllers/projectController");

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:id", getProject);

module.exports = router;
