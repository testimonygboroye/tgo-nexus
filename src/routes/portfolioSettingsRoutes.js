const express = require("express");
const router = express.Router();

const {
  upsertSettings,
  getSettings
} = require("../controllers/portfolioSettingsController");

router.get("/", getSettings);
router.post("/", upsertSettings);

module.exports = router;
