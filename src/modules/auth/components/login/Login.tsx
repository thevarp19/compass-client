"use client";

import GoogleInput from "@/components/shared/google-input/Input";
import Link from "next/link";
import React from "react";

import { Input } from "@/components/shared/input-form/Input";
import { useLanguage } from "@/context/LanguageProvider";
import { loginSuccess } from "@/redux/user/auth/actions";
import { useAppDispatch } from "@/redux/utils";
import { useRouter } from "next/navigation";
import { useLogin } from "../../forms";
import { LoginResponse } from "../../types";

const Login: React.FC = () => {
    const { language, getHref } = useLanguage();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const navigateToProfile = () => {
        router.push(getHref("/"));
    };
    // const { handleLogin } = useAuthContext();
    const success = (data: LoginResponse) => {
        dispatch(loginSuccess(data));
        navigateToProfile();
    };
    const { formik, mutation } = useLogin(success);

    return (
        <div className="flex justify-center items-center pb-[100px] sm:pb-0 pt-[30px] sm:pt-0 h-max sm:h-screen">
            <div className="bg-white w-[290px] h-[478px] sm:w-[427px] sm:h-[600px] border border-[#D9D9D9] rounded-lg p-5 sm:p-10">
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black font-montserrat text-base sm:text-[26px]">
                        {language.LOGIN.login}
                    </label>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.LOGIN.mail}
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
                                {language.LOGIN.password}
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
                            <button
                                className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[250px] sm:w-[346px] h-[30px] sm:h-[40px] rounded-lg `}
                                onClick={() => {
                                    formik.handleSubmit();
                                }}
                            >
                                {language.LOGIN.enter}
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <Link
                                href={getHref("/auth/reset")}
                                className="font-medium font-montserrat text-black text-[8px] sm:text-xs"
                            >
                                {language.LOGIN.forgot_pass}
                            </Link>
                        </div>
                        <div className="flex justify-center gap-2">
                            <label className="font-medium font-montserrat text-black text-[8px] sm:text-xs">
                                {language.LOGIN.dont_have_acc}
                            </label>
                            <Link
                                href={getHref("/auth/registration")}
                                className="text-button_color text-[8px] sm:text-xs"
                            >
                                {language.LOGIN.registraton}
                            </Link>
                        </div>
                        <div className="flex items-center ">
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                            <label className="text-black text-[8px] sm:text-xs">
                                {language.LOGIN.or}
                            </label>
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                        </div>
                        <GoogleInput></GoogleInput>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
