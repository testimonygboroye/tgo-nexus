const Certificate = require("../models/Certificate");

// CREATE
const createCertificate = async (req, res) => {
  try {
    const cert = await Certificate.create(req.body);

    res.status(201).json({
      success: true,
      data: cert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
const getCertificates = async (req, res) => {
  try {
    const certs = await Certificate.find().sort({ dateIssued: -1 });

    res.json({
      success: true,
      count: certs.length,
      data: certs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE
const updateCertificate = async (req, res) => {
  try {
    const cert = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!cert) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found"
      });
    }

    res.json({
      success: true,
      data: cert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE
const deleteCertificate = async (req, res) => {
  try {
    const cert = await Certificate.findByIdAndDelete(req.params.id);

    if (!cert) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found"
      });
    }

    res.json({
      success: true,
      message: "Certificate deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createCertificate,
  getCertificates,
  updateCertificate,
  deleteCertificate
};
