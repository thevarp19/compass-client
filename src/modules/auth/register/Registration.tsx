"use client";
import { usePostRegisterMutation } from "@/lib/api/auth/auth";

import Button from "@/components/shared/button-form/Button";
import GoogleInput from "@/components/shared/google-input/Input";
import Input from "@/components/shared/input-form/Input";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import email from "../../../../public/assets/email.svg";
import password from "../../../../public/assets/password.svg";
import { REGISTRATION } from "./string";

interface RegisterFormValues {
    email: string;
    password: string;
    re_pass: string;
}

// interface ApiResponse {
//     data?: any;
//     error?: string;
// }

const Registration: React.FC = () => {
    const [postRegister] = usePostRegisterMutation();
    const formik = useFormik<RegisterFormValues>({
        initialValues: {
            email: "",
            password: "",
            re_pass: "",
        },
        onSubmit: async (values) => {
            try {
                const response = await postRegister(values);
                console.log(response);
            } catch (e) {
                console.error(e);
            }
        },
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-white_color w-[427px] h-[653px] rounded-lg"
                onSubmit={formik.handleSubmit}
            >
                <div className="ml-10 mt-10 flex flex-col gap-6">
                    <label className="font-bold text-black font-montserrat text-[26px]">
                        {REGISTRATION.registration}
                    </label>
                    <div className="flex flex-col gap-4">
                        <label className="text-black font-semibold text-base">
                            {REGISTRATION.mail}
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
                            {REGISTRATION.password}
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
                    <div className="flex flex-col gap-4">
                        <label className="text-black font-semibold text-base">
                            {REGISTRATION.confirm_password}
                        </label>
                        <Input
                            placeholder="Подтвердите ваш пароль"
                            image={password}
                            onChange={formik.handleChange}
                            type="password"
                            name="re_pass"
                            value={formik.values.re_pass}
                        />
                    </div>
                    <div>
                        <Button text="Регистрация" />
                    </div>
                    <div className="flex justify-center mr-7 gap-2">
                        <label className="text-xs font-medium font-montserrat text-black">
                            {REGISTRATION.already_have_account}
                        </label>
                        <Link href="" className="text-xs text-blue_color">
                            {REGISTRATION.login}
                        </Link>
                    </div>
                    <div className="flex items-center mr-10">
                        <hr className="flex-grow border-0 h-px bg-gray-700 mx-2"></hr>
                        <label className="text-black text-xs">
                            {REGISTRATION.or}
                        </label>
                        <hr className="flex-grow border-0 h-px bg-gray-700 mx-2"></hr>
                    </div>
                    <GoogleInput></GoogleInput>
                </div>
            </form>
        </div>
    );
};

export default Registration;
