import { FormikProps } from "formik";
import { get } from "lodash";
import { FC } from "react";
import { Input, InputProps } from "../input-form/Input";

interface FormikInputProps extends InputProps {
    formik: FormikProps<any>;
    name: string;
    className?: string;
}

const getFormikHelpText = (formik: FormikProps<any>, name: string) => {
    const error = get(formik.errors, name);
    const touched = get(formik.touched, name);
    if (touched && error) {
        return error;
    }
    return "";
};

export const FormikInput: FC<FormikInputProps> = ({
    formik,
    name,
    className,
    ...props
}) => {
    const helpText = getFormikHelpText(formik, name) as string;
    return (
        <Input
            {...props}
            name={name}
            onChange={formik.handleChange}
            className={`!w-[92px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text ${className}`}
            helpText={helpText}
        />
    );
};
