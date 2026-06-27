const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Auth routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected route
router.get("/profile", authMiddleware, authController.profile);

module.exports = router;
