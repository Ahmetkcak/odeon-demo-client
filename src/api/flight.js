import { instance as axios } from "./axiosInstance";

export const createFlight = (data) => axios.post("/flights/create", data);
export const getAllFlights = () => axios.get("/flights/getAll");