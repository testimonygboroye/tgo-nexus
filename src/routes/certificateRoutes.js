const express = require("express");
const router = express.Router();

const {
  createCertificate,
  getCertificates,
  updateCertificate,
  deleteCertificate
} = require("../controllers/certificateController");

router.post("/", createCertificate);
router.get("/", getCertificates);
router.put("/:id", updateCertificate);
router.delete("/:id", deleteCertificate);

module.exports = router;
