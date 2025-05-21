import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 15000,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { token } = JSON.parse(userData);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("userData");
      window.dispatchEvent(new CustomEvent("unauthorized"));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
