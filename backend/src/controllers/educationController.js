const Education = require("../models/Education");

// CREATE
const createEducation = async (req, res) => {
  try {
    const edu = await Education.create(req.body);

    res.status(201).json({
      success: true,
      data: edu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
const getEducations = async (req, res) => {
  try {
    const edu = await Education.find().sort({ startDate: -1 });

    res.json({
      success: true,
      count: edu.length,
      data: edu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE
const updateEducation = async (req, res) => {
  try {
    const edu = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!edu) {
      return res.status(404).json({
        success: false,
        message: "Education not found"
      });
    }

    res.json({
      success: true,
      data: edu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE
const deleteEducation = async (req, res) => {
  try {
    const edu = await Education.findByIdAndDelete(req.params.id);

    if (!edu) {
      return res.status(404).json({
        success: false,
        message: "Education not found"
      });
    }

    res.json({
      success: true,
      message: "Education deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createEducation,
  getEducations,
  updateEducation,
  deleteEducation
};
