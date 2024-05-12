"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { login, register } from "./api";
import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
} from "./types";

export const loginMutation = (success: (data: LoginResponse) => void) => {
    const { message } = App.useApp();
    return useMutation<LoginResponse, AxiosError<any>, LoginRequest>({
        async mutationFn(values) {
            const { data } = await login(values);
            return data;
        },
        onSuccess(data) {
            success(data);
            message.success("Success!");
        },
        onError(error) {
            message.error(`${error?.response?.data.message}`);
        },
    });
};
export const registerMutation = () => {
    const { message } = App.useApp();
    const router = useRouter();
    const { getHref } = useLanguage();
    return useMutation<RegisterResponse, AxiosError<any>, RegisterRequest>({
        async mutationFn(values) {
            const { data } = await register(values);
            return data;
        },
        onSuccess() {
            // console.log("Success!");
            message.success("Success!");
            router.push(getHref("/auth/login"));
        },
        onError(error) {
            message.error(`${error?.response?.data.message}`);
        },
    });
};
