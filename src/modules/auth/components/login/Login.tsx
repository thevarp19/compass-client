"use client";

import Button from "@/components/shared/button-form/Button";
import GoogleInput from "@/components/shared/google-input/Input";
import Link from "next/link";
import React from "react";

import { Input } from "@/components/shared/input-form/Input";
import { useAuthContext } from "@/context/AuthContext";
import { loginSuccess } from "@/redux/user/auth/actions";
import { useAppDispatch } from "@/redux/utils";
import { useRouter } from "next/navigation";
import { useLogin } from "../../forms";
import { LoginResponse } from "../../types";
import { LOGIN } from "./string";

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const navigateToProfile = () => {
        router.push("/");
    };
    const { handleLogin } = useAuthContext();
    const success = (data: LoginResponse) => {
        dispatch(loginSuccess(data));
        navigateToProfile();
        handleLogin();
    };
    const { formik, mutation } = useLogin(success);

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-white w-[427px] h-[600px] border border-[#D9D9D9] rounded-lg p-10"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black font-montserrat text-[26px]">
                        {LOGIN.login}
                    </label>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {LOGIN.mail}
                            </label>
                            <Input
                                placeholder="Введите ваш email"
                                onChange={formik.handleChange}
                                image="/icons/email.svg"
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
                                image={"/icons/password.svg"}
                                onChange={formik.handleChange}
                                type="password"
                                name="password"
                                value={formik.values.password}
                            />
                        </div>
                        <div>
                            <Button text={LOGIN.enter} type="submit" />
                        </div>
                        <div className="flex justify-end">
                            <label className="text-xs font-medium font-montserrat text-black">
                                {LOGIN.forgot_pass}
                            </label>
                        </div>
                        <div className="flex justify-center gap-2">
                            <label className="text-xs font-medium font-montserrat text-black">
                                {LOGIN.dont_have_acc}
                            </label>
                            <Link
                                href="/auth/registration"
                                className="text-xs text-button_color"
                            >
                                {LOGIN.registraton}
                            </Link>
                        </div>
                        <div className="flex items-center ">
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                            <label className="text-black text-xs">
                                {LOGIN.or}
                            </label>
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                        </div>
                        <GoogleInput></GoogleInput>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
