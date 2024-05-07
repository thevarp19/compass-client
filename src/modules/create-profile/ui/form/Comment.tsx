import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const Comment: FC<FormProps> = ({ formik }) => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.comments}
            </h2>
            <TextArea
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                className="w-full text-black !h-[150px] shadow-md border border-gray_color"
            />
        </div>
    );
};
