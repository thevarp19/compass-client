"use client";

import Button from "@/components/shared/button-form/Button";
import GoogleInput from "@/components/shared/google-input/Input";
import Link from "next/link";
import React from "react";

import { Input } from "@/components/shared/input-form/Input";
import { useRegister } from "../../forms";
import { REGISTRATION } from "./string";

const Registration: React.FC = () => {
    const { formik, mutation } = useRegister();

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-white w-[427px] h-[653px] rounded-lg border border-[#D9D9D9] p-10"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black text-[26px]">
                        {REGISTRATION.registration}
                    </label>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {REGISTRATION.mail}
                            </label>
                            <Input
                                placeholder="Введите ваш email"
                                onChange={formik.handleChange}
                                image={"/icons/email.svg"}
                                name="email"
                                value={formik.values.email}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {REGISTRATION.password}
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
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-base">
                                {REGISTRATION.confirm_password}
                            </label>
                            <Input
                                placeholder="Подтвердите ваш пароль"
                                image={"/icons/password.svg"}
                                onChange={formik.handleChange}
                                type="password"
                                name="confirmationPassword"
                                value={formik.values.confirmationPassword}
                            />
                        </div>
                        <div>
                            <Button text="Регистрация" />
                        </div>
                        <div className="flex justify-center gap-2">
                            <label className="text-xs font-medium font-montserrat text-black">
                                {REGISTRATION.already_have_account}
                            </label>
                            <Link
                                href="/auth/login"
                                className="text-xs text-button_color"
                            >
                                {REGISTRATION.login}
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <hr className="flex-grow border-0 h-px bg-gray_border mx-2"></hr>
                            <label className="text-black text-xs">
                                {REGISTRATION.or}
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

export default Registration;
