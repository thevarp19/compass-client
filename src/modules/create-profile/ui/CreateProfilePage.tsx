"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { useCreateProfile } from "../forms";
import { Form } from "./form/Form";

export const CreateProfilePage = () => {
    const { formik } = useCreateProfile();
    const { language } = useLanguage();
    return (
        <div className="bg-gray flex flex-col px-[15px] min-[410px]:px-[25px] py-[30px] sm:px-[146px] sm:py-[60px]">
            <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                {language.FORM_TEXT.create_profile}
            </span>
            <Form formik={formik} />
        </div>
    );
};
