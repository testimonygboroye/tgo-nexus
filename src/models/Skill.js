const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced", "expert"],
      default: "beginner"
    },
    category: {
      type: String,
      default: "general"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
