import { useLanguage } from "@/context/LanguageProvider";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import { FormProps } from "../../types";

export const ExtraInformation: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.additionalInfo}
            </h2>
            <TextArea
                name="additionalInformation"
                value={formik.values.additionalInformation}
                onChange={formik.handleChange}
                className="w-full !text-[8px] sm:!text-[14px] text-black !h-[50px] sm:!h-[150px] shadow-md border border-gray_color"
            />
        </div>
    );
};
