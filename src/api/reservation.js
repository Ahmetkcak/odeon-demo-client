import { instance as axios } from "./axiosInstance";

export const createReservation = (data) => axios.post("/reservations/create", data);
export const deleteReservation = (id) => axios.delete(`/reservations/delete/${id}`);
