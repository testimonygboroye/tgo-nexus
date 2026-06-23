const authService = require("../services/authService");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({
      message: "User profile fetched successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
  profile
};
