import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getApplications = async () => {
  const response = await API.get("/applications");
  return response.data;
};

export default API;