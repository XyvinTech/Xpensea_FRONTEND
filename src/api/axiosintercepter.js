import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL: "https://xpensea-backend-189792861103.us-central1.run.app/api/v1"
});
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
