const mongoose = require("mongoose");

const portfolioSettingsSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "My Portfolio"
    },
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "Full Stack Developer"
    },
    bio: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      instagram: String,
      website: String
    },
    resumeUrl: {
      type: String,
      default: ""
    },
    profileImage: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PortfolioSettings", portfolioSettingsSchema);
