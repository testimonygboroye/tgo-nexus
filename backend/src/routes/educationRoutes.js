const express = require("express");
const router = express.Router();

const {
  createEducation,
  getEducations,
  updateEducation,
  deleteEducation
} = require("../controllers/educationController");

router.post("/", createEducation);
router.get("/", getEducations);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
