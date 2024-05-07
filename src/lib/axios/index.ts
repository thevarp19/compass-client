import { baseURL } from "@/config";
import jwtService from "../jwt";
import {
    applyJwtAuth,
    configureRefreshRetry,
    createAxiosWithBaseUrl,
} from "./helper";

const axios = createAxiosWithBaseUrl(baseURL);
const axiosAuthorized = createAxiosWithBaseUrl(baseURL);

applyJwtAuth(axiosAuthorized);
configureRefreshRetry(axiosAuthorized);

const refreshJwt = (axiosApi: any) => {
    const options = {
        refresh: jwtService.getRefreshToken() || "refresh",
    };
    return axiosApi.post("/auth/login/refresh", options);
};
const refresh = async () => {
    try {
        const refreshResponse = await refreshJwt(axiosAuthorized);
        const newAccessToken = refreshResponse.data.access;

        jwtService.saveJwt({
            access: newAccessToken,
            refresh: "",
        });
    } catch (refreshError) {}
};

export { axios, axiosAuthorized, refresh };
