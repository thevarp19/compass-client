"use client";
import { Input } from "@/components/shared/input-form/Input";
import { useLanguage } from "@/context/LanguageProvider";
import { axios } from "@/lib/axios";
import { Spin, message } from "antd";
import Link from "next/link";
import { FC, useState } from "react";

export const Reset: FC = () => {
    const { language, getHref } = useLanguage();
    const [emailInput, setEmailInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const submitForm = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.post("/auth/password/reset", {
                email: emailInput,
            });
            message.success(
                data.message ||
                    "Ссылка на восстановление отправлена на вашу почту"
            );
        } catch (error: any) {
            message.error(`${error?.response?.data.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center pt-[30px] sm:pt-0 h-max sm:h-screen">
            <div className="bg-white w-[290px] h-max sm:w-[427px] border border-[#D9D9D9] rounded-lg p-5 sm:p-10">
                <div className="flex flex-col gap-10">
                    <label className="font-bold text-black font-montserrat text-base sm:text-[26px]">
                        {language.RESET.reset_title}
                    </label>
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-4">
                            <label className="text-black font-semibold text-[10px] sm:text-base">
                                {language.RESET.email}
                            </label>
                            <Input
                                placeholder={language.LOGIN.placeholderEmail}
                                image="/icons/email.svg"
                                name="email"
                                value={emailInput}
                                onChange={(e: any) => {
                                    setEmailInput(e.target.value);
                                }}
                                className="text-[10px] sm:text-base"
                            />
                        </div>

                        <div>
                            <button
                                className={`bg-button_color text-[8px] sm:text-base text-white font-bold w-[250px] sm:w-[346px] h-[30px] sm:h-[40px] rounded-lg flex items-center justify-center gap-3`}
                                onClick={() => {
                                    submitForm();
                                }}
                            >
                                {language.RESET.submit}
                                <Spin size="small" spinning={isLoading} />
                            </button>
                        </div>

                        <div className="flex justify-center gap-2">
                            <Link
                                href={getHref("/auth/login")}
                                className="text-button_color text-[8px] sm:text-xs"
                            >
                                {language.RESET.go_back}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
