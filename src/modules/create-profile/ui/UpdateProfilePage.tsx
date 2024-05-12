"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { useGetProfile } from "@/modules/actor/queries";
import { useUpdateProfile } from "../forms";
import { Form } from "./form/Form";

export const UpdateProfilePage = () => {
    const { language } = useLanguage();
    const { data: profile } = useGetProfile();
    const { formik } = useUpdateProfile(profile);
    return (
        <div className="bg-gray flex flex-col px-[15px] min-[410px]:px-[25px] py-[30px] sm:px-[146px] sm:py-[60px]">
            <span className="text-[20px] sm:text-[32px] font-semibold text-black">
                {language.FORM_TEXT.edit_profile}
            </span>
            <Form formik={formik} />
        </div>
    );
};
