import { FormikProps } from "formik";
import { FC } from "react";
import { Input, InputProps } from "../input-form/Input";

interface FormikInputProps extends InputProps {
    formik?: FormikProps<any>;
    name?: string;
    className?: string;
}

export const FormikInput: FC<FormikInputProps> = ({
    formik,
    name,
    className,
    ...props
}) => {
    return (
        <Input
            {...props}
            onChange={formik?.handleChange}
            name={name}
            className={`!w-[92px] sm:!w-[237px] h-[14px] sm:h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text ${className}`}
            // helpText={getFormikHelpText(formik, name)}
        />
    );
};
