const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Contact = require("../models/Contact");

const getAnalytics = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalBlogs = await Blog.countDocuments();
    const totalContacts = await Contact.countDocuments();

    const recentProjects = await Project.find().sort({ createdAt: -1 }).limit(5);
    const recentBlogs = await Blog.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      data: {
        totals: {
          projects: totalProjects,
          blogs: totalBlogs,
          contacts: totalContacts
        },
        recent: {
          projects: recentProjects,
          blogs: recentBlogs
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { getAnalytics };
