"use client";
import { Input } from "@/components/shared/input-form/Input";
import { useLanguage } from "@/context/LanguageProvider";
import { axios } from "@/lib/axios";
import { Spin, message } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";

export const ConfirmReset: FC = () => {
    const { language, getHref } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const resetToken: string = urlParams.get("token") || "";
        localStorage.setItem("resetToken", resetToken);
    }, []);
    const passwordValidationSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, "Длина пароля должна быть не менее 8!")
            .max(24, "Длина пароля должна быть не более 24!")
            .required("Пожалуйста, введите свой пароль!"),
        repeatPassword: Yup.string()
            .required("Требуется повторить пароль")
            .test(
                "password-match",
                "Пароли должны совпадать",
                function (value) {
                    return value === this.parent.password;
                }
            ),
    });
    const handlePasswordCreation = async (password: string) => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem("resetToken");
            const response = await axios.post(`/auth/password/reset/${token}`, {
                password,
            });
            localStorage.removeItem("resetToken");
            router.push(getHref("/auth/login"));
            message.success(response.data.message);
            setIsLoading(false);
        } catch (error: any) {
            message.error(`${error?.response?.data.message}`);
        } finally {
            setIsLoading(false);
            formik.setSubmitting(false);
        }
    };
    const formik = useFormik({
        initialValues: { password: "", repeatPassword: "" },
        validationSchema: passwordValidationSchema,
        onSubmit: (values) => handlePasswordCreation(values.password),
    });
    const getHelpText = (key: "password" | "repeatPassword"): any => {
        return formik?.touched[key] && formik.errors[key];
    };

    return (
        <div className="flex justify-center items-center pt-[30px] sm:pt-0 h-max sm:h-screen">
            <div className="bg-white w-[290px] h-max sm:w-[427px] border border-[#D9D9D9] rounded-lg p-5 sm:p-10">
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black font-montserrat text-base sm:text-[26px]">
                        {language.RESET.new_password}
                    </label>
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.RESET.password}
                            </label>
                            <Input
                                placeholder={
                                    language.REGISTRATION.placeholderPassword
                                }
                                image="/icons/password.svg"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                helpText={getHelpText("password")}
                                className="text-[10px] sm:text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.RESET.confirm_password}
                            </label>
                            <Input
                                placeholder={
                                    language.REGISTRATION
                                        .placeholderPasswordRepeat
                                }
                                image="/icons/password.svg"
                                name="repeatPassword"
                                value={formik.values.repeatPassword}
                                onChange={formik.handleChange}
                                helpText={getHelpText("repeatPassword")}
                                className="text-[10px] sm:text-base"
                            />
                        </div>
                        <div>
                            <button
                                className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[250px] sm:w-[346px] h-[30px] sm:h-[40px] rounded-lg flex items-center justify-center gap-3`}
                                onClick={() => {
                                    formik.handleSubmit();
                                }}
                            >
                                {language.RESET.submit}
                                <Spin size="small" spinning={isLoading} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
