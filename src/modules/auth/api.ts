import { axios, axiosAuthorized } from "@/lib/axios";
import { LoginRequest, LoginResponse } from "./types";

export function login(values: LoginRequest) {
    return axios.post<LoginResponse>("/auth/sign-in", values);
}

export function register(values: LoginRequest) {
    return axios.post<LoginResponse>("/auth/sign-up", values);
}

export const verifyAuth = async (token: string) => {
    return await axiosAuthorized.post("/auth/login/verify", { token });
};
export const getProfile = async () => {
    return await axiosAuthorized.get("/user/profile");
};
