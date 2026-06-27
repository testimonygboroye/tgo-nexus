const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Skill = require("../models/Skill");

const searchAll = async (req, res) => {
  try {
    const query = req.query.q || "";

    const projects = await Project.find({
      title: { $regex: query, $options: "i" }
    });

    const blogs = await Blog.find({
      title: { $regex: query, $options: "i" }
    });

    const skills = await Skill.find({
      name: { $regex: query, $options: "i" }
    });

    res.json({
      success: true,
      query,
      results: {
        projects,
        blogs,
        skills
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { searchAll };
