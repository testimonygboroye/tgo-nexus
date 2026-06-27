const path = require("path");

// UPLOAD IMAGE
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }

    res.json({
      success: true,
      filePath: `/uploads/${req.file.filename}`,
      fullUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  uploadImage
};
