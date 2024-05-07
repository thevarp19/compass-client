import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const ExtraInformation: FC<FormProps> = ({ formik }) => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.additionalInfo}
            </h2>
            <TextArea
                name="additionalInformation"
                value={formik.values.additionalInformation}
                onChange={formik.handleChange}
                className="w-full text-black !h-[150px] shadow-md border border-gray_color"
            />
        </div>
    );
};
