const PortfolioSettings = require("../models/PortfolioSettings");

// CREATE / UPDATE SETTINGS (SINGLE DOCUMENT)
const upsertSettings = async (req, res) => {
  try {
    let settings = await PortfolioSettings.findOne();

    if (settings) {
      settings = await PortfolioSettings.findByIdAndUpdate(
        settings._id,
        req.body,
        { new: true }
      );
    } else {
      settings = await PortfolioSettings.create(req.body);
    }

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET SETTINGS
const getSettings = async (req, res) => {
  try {
    const settings = await PortfolioSettings.findOne();

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  upsertSettings,
  getSettings
};
