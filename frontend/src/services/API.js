import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ================= AUTH (READY FOR FUTURE USE) =================
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const getMe = () => API.get("/auth/me");

// ================= PROJECTS =================
export const getProjects = () => API.get("/projects");
export const getProject = (id) => API.get(`/projects/${id}`);

// ================= BLOGS =================
export const getBlogs = () => API.get("/blogs");
export const getBlog = (id) => API.get(`/blogs/${id}`);

// ================= SKILLS =================
export const getSkills = () => API.get("/skills");

// ================= EXPERIENCE (FIXED ✔) =================
export const getExperience = () => API.get("/experience");

// ================= EDUCATION (FIXED ✔) =================
export const getEducation = () => API.get("/education");

// ================= CERTIFICATES =================
export const getCertificates = () => API.get("/certificates");

// ================= CONTACT =================
export const sendContact = (data) => API.post("/contacts", data);
export const getContacts = () => API.get("/contacts");

// ================= SETTINGS =================
export const getSettings = () => API.get("/settings");
export const updateSettings = (data) => API.put("/settings", data);

// ================= ANALYTICS =================
export const getAnalytics = () => API.get("/analytics");

// ================= UPLOAD =================
export const uploadImage = (formData) =>
  API.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export default API;
