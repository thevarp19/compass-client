import { FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";
import { ContactInformation } from "./contact-information/ContactInformation";
import { ImageAndVideo } from "./photo/ImageAndVideo";
import { Social } from "./social/Social";

export const Media: FC<FormProps> = ({ formik }) => {
    return (
        <div className="border border-gray_border h-max rounded-[5px] p-[10px] flex flex-col gap-5 pb-40">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.media}
            </h2>
            <ImageAndVideo formik={formik} />
            <Social formik={formik} />
            <ContactInformation formik={formik} />
        </div>
    );
};
