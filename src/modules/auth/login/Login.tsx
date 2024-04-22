"use client";
import { usePostLoginMutation } from "@/lib/api/auth/auth";
import { setToken } from "@/lib/features/token/tokenSlice";

import Button from "@/components/shared/button-form/Button";
import GoogleInput from "@/components/shared/google-input/Input";
import Input from "@/components/shared/input-form/Input";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import email from "../../../../public/assets/email.svg";
import password from "../../../../public/assets/password.svg";
import { LOGIN } from "./string";

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

const Login: React.FC = () => {
    const [postLogin] = usePostLoginMutation();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                const response = (await postLogin(values)) as {
                    data: LoginResponse;
                };

                dispatch(
                    setToken({
                        token: response.data.accessToken,
                        type: "access",
                        cookieName: "accessToken",
                    })
                );
                dispatch(
                    setToken({
                        token: response.data.refreshToken,
                        type: "refresh",
                        cookieName: "refreshToken",
                    })
                );
            } catch (e) {
                console.log(e);
            }
        },
    });

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <form
                    className="bg-white_color w-[427px] h-[600px] rounded-lg"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="ml-10 mt-10 flex flex-col gap-6">
                        <label className="font-bold text-black font-montserrat text-[26px]">
                            {LOGIN.login}
                        </label>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {LOGIN.mail}
                            </label>
                            <Input
                                placeholder="Введите ваш email"
                                onChange={formik.handleChange}
                                image={email}
                                name="email"
                                value={formik.values.email}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {LOGIN.password}
                            </label>
                            <Input
                                placeholder="Введите пароль"
                                image={password}
                                onChange={formik.handleChange}
                                type="password"
                                name="password"
                                value={formik.values.password}
                            />
                        </div>
                        <div>
                            <Button text="Регистрация" />
                        </div>
                        <div className="flex justify-center mr-7 gap-2">
                            <label className="text-xs font-medium font-montserrat text-black">
                                {LOGIN.dont_have_acc}
                            </label>
                            <Link href="" className="text-xs text-blue_color">
                                {LOGIN.registraton}
                            </Link>
                        </div>
                        <div className="flex items-center mr-10">
                            <hr className="flex-grow border-0 h-px bg-gray-700 mx-2"></hr>
                            <label className="text-black text-xs">
                                {LOGIN.or}
                            </label>
                            <hr className="flex-grow border-0 h-px bg-gray-700 mx-2"></hr>
                        </div>
                        <GoogleInput></GoogleInput>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
