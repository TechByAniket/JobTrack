import axios from "axios";

const API = axios.create({
  baseURL: process.env.BACKEND_API || "http://localhost:5000/api",
});

// GET all applications
export const getApplications = async () => {
  const response = await API.get("/applications");
  return response.data;
};

// POST a new application
export const createApplication = async (data) => {
  const response = await API.post("/applications", data);
  return response.data;
};

// PUT update an application
export const updateApplication = async (id, data) => {
  const response = await API.put(`/applications/${id}`, data);
  return response.data;
};

// DELETE an application
export const deleteApplication = async (id) => {
  const response = await API.delete(`/applications/${id}`);
  return response.data;
};

export default API;