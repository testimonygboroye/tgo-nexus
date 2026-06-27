const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    issuer: {
      type: String,
      required: true,
      trim: true
    },
    dateIssued: {
      type: Date,
      required: true
    },
    credentialId: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", certificateSchema);
