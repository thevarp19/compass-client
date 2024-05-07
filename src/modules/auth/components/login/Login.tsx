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
        <div className="flex justify-center items-center pb-[100px] sm:pb-0 pt-[30px] sm:pt-0 h-max sm:h-screen">
            <form
                className="bg-white w-[290px] h-[478px] sm:w-[427px] sm:h-[600px] border border-[#D9D9D9] rounded-lg p-5 sm:p-10"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black font-montserrat text-base sm:text-[26px]">
                        {LOGIN.login}
                    </label>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {LOGIN.mail}
                            </label>
                            <Input
                                placeholder="Введите ваш email"
                                onChange={formik.handleChange}
                                image="/icons/email.svg"
                                name="email"
                                value={formik.values.email}
                                className="text-[10px] sm:text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {LOGIN.password}
                            </label>
                            <Input
                                placeholder="Введите пароль"
                                image={"/icons/password.svg"}
                                onChange={formik.handleChange}
                                type="password"
                                name="password"
                                value={formik.values.password}
                                className="text-[10px] sm:text-base"
                            />
                        </div>
                        <div>
                            <Button text={LOGIN.enter} type="submit" />
                        </div>
                        <div className="flex justify-end">
                            <label className="font-medium font-montserrat text-black text-[8px] sm:text-xs">
                                {LOGIN.forgot_pass}
                            </label>
                        </div>
                        <div className="flex justify-center gap-2">
                            <label className="font-medium font-montserrat text-black text-[8px] sm:text-xs">
                                {LOGIN.dont_have_acc}
                            </label>
                            <Link
                                href="/auth/registration"
                                className="text-button_color text-[8px] sm:text-xs"
                            >
                                {LOGIN.registraton}
                            </Link>
                        </div>
                        <div className="flex items-center ">
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                            <label className="text-black text-[8px] sm:text-xs">
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
