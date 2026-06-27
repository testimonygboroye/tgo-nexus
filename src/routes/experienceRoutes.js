const express = require("express");
const router = express.Router();

const {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience
} = require("../controllers/experienceController");

router.post("/", createExperience);
router.get("/", getExperiences);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

module.exports = router;
