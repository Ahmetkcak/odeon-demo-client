import { instance as axios } from "./axiosInstance";

export const registerUser = (data) => axios.post("/users/register", data);

export const loginUser = async (data) => {
    const response = await axios.post("/auth/login", data);

    if (response?.status === 200) {
        const { accessToken, refreshToken, authorities, city, email, firstName, id, lastName } = response.data;

        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("user_info", JSON.stringify({
            id,
            email,
            firstName,
            lastName,
            authorities,
            city,
        }));
    }

    return response;
} 
