import axios from "axios";
import { toast } from "react-toastify";

// apiURL should be taken from .env file
const apiURL = "http://localhost:8082/api/";

const instance = axios.create({
    baseURL: apiURL,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            toast.warning("Please login again.");
        }
        try {
            // toast.error(error?.response?.data?.message);
        } catch (e) {
            toast.error("An error occurred. Please try again.");
        }
        return error;
    }
);

const fetcher = (url) => instance.get(url).then((res) => res.data);

export { instance, fetcher };