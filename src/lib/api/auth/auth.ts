import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Interfaces
interface RegisterRequest {
    email: string;
    password: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface AuthResponse {
    accessToken: string;
    refreshToken?: string;
}

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/auth/",
    }),
    endpoints: (builder) => ({
        postRegister: builder.mutation<AuthResponse, RegisterRequest>({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
        }),
        postLogin: builder.mutation<AuthResponse, LoginRequest>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { usePostRegisterMutation, usePostLoginMutation } = authApi;
