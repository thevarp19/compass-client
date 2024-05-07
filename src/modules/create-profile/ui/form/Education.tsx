import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const Education: FC<FormProps> = ({ formik }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        if (
            name.includes("startYear") ||
            (name.includes("graduationYear") && type === "number")
        ) {
            const numberValue = value === "" ? "" : Number(value);
            formik.setFieldValue(name, numberValue);
        } else {
            formik.setFieldValue(name, value);
        }
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-xl font-semibold text-black">
                {FORM_TEXT.education}
            </h2>
            <FieldArray name="educations">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-5">
                        {formik.values.educations?.map((education, index) => (
                            <div
                                className={`flex flex-col gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.university}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={education.university}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`educations[${index}].university`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.faculty}
                                    </h2>
                                    <input
                                        className={`!w-[237px] h-[24px] px-[10px] py-[4px] !indent-0 text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={education.faculty}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`educations[${index}].faculty`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-grayDark_text">
                                        {FORM_TEXT.yearsOfStudy}
                                    </h2>
                                    <div className="flex gap-[6px] justify-end items-center">
                                        <input
                                            className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                education.startYear === 0
                                                    ? ""
                                                    : education.startYear
                                            }
                                            onChange={handleInputChange}
                                            name={`educations[${index}].startYear`}
                                            placeholder="YYYY"
                                            maxLength={4}
                                        />
                                        <div className="w-[2px] h-[1px] bg-gray_border"></div>
                                        <input
                                            className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                education.graduationYear === 0
                                                    ? ""
                                                    : education.graduationYear
                                            }
                                            onChange={handleInputChange}
                                            name={`educations[${index}].graduationYear`}
                                            placeholder="YYYY"
                                            maxLength={4}
                                        />
                                    </div>
                                </div>
                                {index > 0 && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="border border-gray_border text-xs text-white bg-[#f32013] rounded-[3px] px-2 py-1"
                                            onClick={() => remove(index)}
                                        >
                                            {FORM_TEXT.remove}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="flex justify-end ">
                            <button
                                type="button"
                                className="text-xs text-button_color"
                                onClick={() =>
                                    push({
                                        university: "",
                                        faculty: "",
                                        startYear: "",
                                        graduationYear: "",
                                    })
                                }
                            >
                                {FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};
