const Experience = require("../models/Experience");

// CREATE
const createExperience = async (req, res) => {
  try {
    const exp = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      data: exp
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
const getExperiences = async (req, res) => {
  try {
    const exps = await Experience.find().sort({ startDate: -1 });

    res.json({
      success: true,
      count: exps.length,
      data: exps
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE
const updateExperience = async (req, res) => {
  try {
    const exp = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!exp) {
      return res.status(404).json({
        success: false,
        message: "Experience not found"
      });
    }

    res.json({
      success: true,
      data: exp
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE
const deleteExperience = async (req, res) => {
  try {
    const exp = await Experience.findByIdAndDelete(req.params.id);

    if (!exp) {
      return res.status(404).json({
        success: false,
        message: "Experience not found"
      });
    }

    res.json({
      success: true,
      message: "Experience deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience
};
