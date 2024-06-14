"use client";

import Button from "@/components/shared/button-form/Button";
import GoogleInput from "@/components/shared/google-input/Input";
import Link from "next/link";
import React from "react";

import { Input } from "@/components/shared/input-form/Input";
import { useLanguage } from "@/context/LanguageProvider";
import { useRegister } from "../../forms";

const Registration: React.FC = () => {
    const { formik } = useRegister();
    const { language, getHref } = useLanguage();
    return (
        <div className="flex justify-center items-center pb-[100px] sm:pb-0 pt-[30px] sm:pt-0 h-max sm:h-screen">
            <div
                onSubmit={() => {}}
                className="bg-white w-[290px] h-[478px] sm:w-[427px] sm:h-[653px] rounded-lg border border-[#D9D9D9] p-5 sm:p-10"
            >
                <div className="flex flex-col gap-5 sm:gap-10">
                    <label className="font-bold text-black text-base sm:text-[26px]">
                        {language.REGISTRATION.registration}
                    </label>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.REGISTRATION.mail}
                            </label>
                            <Input
                                placeholder={
                                    language.REGISTRATION.placeholderEmail
                                }
                                onChange={formik.handleChange}
                                image={"/icons/email.svg"}
                                name="email"
                                className="text-[10px] sm:text-base"
                                value={formik.values.email}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.REGISTRATION.password}
                            </label>
                            <Input
                                placeholder={
                                    language.REGISTRATION.placeholderPassword
                                }
                                image={"/icons/password.svg"}
                                onChange={formik.handleChange}
                                type="password"
                                name="password"
                                className="text-[10px] sm:text-base"
                                value={formik.values.password}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.REGISTRATION.confirm_password}
                            </label>
                            <Input
                                placeholder={
                                    language.REGISTRATION
                                        .placeholderPasswordRepeat
                                }
                                image={"/icons/password.svg"}
                                onChange={formik.handleChange}
                                type="password"
                                className="text-[10px] sm:text-base"
                                name="confirmationPassword"
                                value={formik.values.confirmationPassword}
                            />
                        </div>
                        <div>
                            <Button
                                text="Регистрация"
                                onClick={() => formik.handleSubmit()}
                            />
                        </div>
                        <div className="flex justify-center gap-2">
                            <label className="text-[8px] sm:text-xs font-medium font-montserrat text-black">
                                {language.REGISTRATION.already_have_account}
                            </label>
                            <Link
                                href={getHref("/auth/login")}
                                className="text-[8px] sm:text-xs text-button_color"
                            >
                                {language.REGISTRATION.login}
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                            <label className="text-black text-[8px] sm:text-xs">
                                {language.REGISTRATION.or}
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

export default Registration;
