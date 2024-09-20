import { instance as axios } from "./axiosInstance";

export const registerUser = (data) => axios.post("/users/register", data);

export const loginUser = (data) => axios.post("/auth/login", data);