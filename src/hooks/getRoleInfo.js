import { getUserInfo } from "./getUserInfo";

export const isAdmin = () => {
    const userInfo = getUserInfo();

    const res = userInfo &&
        Array.isArray(userInfo.authorities) &&
        userInfo.authorities.length === 1 &&
        userInfo.authorities[0] === "Admin";
    return res;
};