import { useLanguage } from "@/context/LanguageProvider";
import { FC } from "react";
import { FormProps } from "../../types";
import { ContactInformation } from "./contact-information/ContactInformation";
import { ImageAndVideo } from "./photo/ImageAndVideo";
import { Social } from "./social/Social";

export const Media: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    return (
        <div className="border border-gray_border h-max rounded-[5px] p-[5px] sm:p-[10px] flex flex-col gap-[10px] sm:gap-5 pb-20 sm:pb-40">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.media}
            </h2>
            <ImageAndVideo formik={formik} />
            <Social formik={formik} />
            <ContactInformation formik={formik} />
        </div>
    );
};
