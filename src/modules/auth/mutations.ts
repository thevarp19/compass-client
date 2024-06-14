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
            // Convert email to lowercase
            values.email = values.email.toLowerCase();
            const { data } = await login(values);
            return data;
        },
        onSuccess(data) {
            success(data);
            message.success("Успешно!");
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
            // Convert email to lowercase
            values.email = values.email.toLowerCase();
            const { data } = await register(values);
            return data;
        },
        onSuccess() {
            message.success("Успешно!");
            router.push(getHref("/auth/login"));
        },
        onError(error) {
            message.error(`${error?.response?.data.message}`);
        },
    });
};
