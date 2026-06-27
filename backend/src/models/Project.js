
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true
    },

    shortDescription: {
      type: String,
      maxlength: 300
    },

    description: {
      type: String
    },

    category: {
      type: String,
      default: "General"
    },

    technologies: [
      {
        type: String
      }
    ],

    githubUrl: String,

    liveUrl: String,

    featured: {
      type: Boolean,
      default: false
    },

    published: {
      type: Boolean,
      default: true
    },

    views: {
      type: Number,
      default: 0
    },

    likes: {
      type: Number,
      default: 0
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
