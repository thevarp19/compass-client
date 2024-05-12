import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "../../types";

export const Comment: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.comments}
            </h2>
            <TextArea
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                className="w-full !text-[8px] sm:!text-[14px] text-black !h-[50px] sm:!h-[150px] shadow-md border border-gray_color"
            />
        </div>
    );
};
