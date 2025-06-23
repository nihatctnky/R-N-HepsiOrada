import axios from "axios";
import { BASE_URL } from "./url";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
});

// Interceptor tanımla
axiosClient.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // $(token) değil, ${token}
    }
  
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default axiosClient;
