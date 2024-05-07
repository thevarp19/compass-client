import axios, { Axios } from "axios";
import jwtService from "../jwt";

const refreshJwtUrl = "/auth/login/refresh";

const setAuthHeader = (config: any) => {
    const access = jwtService.getAccessToken();
    if (access) {
        config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
};

const isAxiosUnauthorized = (error: any) => {
    return error?.response?.status === 401;
};

const refreshJwt = (axiosApi: any) => {
    const options = {
        refresh: jwtService.getRefreshToken() || "refresh",
    };
    return axiosApi.post(refreshJwtUrl, options, { _retry: true });
};

const refreshAndRetry = async (axiosApi: any, originalRequest: Axios) => {
    try {
        const refreshResponse = await refreshJwt(axiosApi);
        const newAccessToken = refreshResponse.data.access;

        jwtService.saveJwt({
            access: newAccessToken,
            refresh: "",
        });
        setAuthHeader(originalRequest);
        return axiosApi(originalRequest);
    } catch (refreshError) {
        // window.location.href = "/auth/login";
    }
};

export const createAxiosWithBaseUrl = (baseURL: string) => {
    return axios.create({
        baseURL: baseURL,
    });
};

export const applyJwtAuth = (axiosApi: Axios) => {
    axiosApi.interceptors.request.use((config) => {
        return setAuthHeader(config);
    });
};

export const configureRefreshRetry = (axiosApi: Axios) => {
    axiosApi.interceptors.response.use(undefined, async (error) => {
        const originalRequest = error.config;
        if (isAxiosUnauthorized(error) && !originalRequest._retry) {
            originalRequest._retry = true;
            return await refreshAndRetry(axiosApi, originalRequest);
        }

        if (isAxiosUnauthorized(error)) {
            jwtService.removeJwt();
        }

        return Promise.reject(error);
    });
};
