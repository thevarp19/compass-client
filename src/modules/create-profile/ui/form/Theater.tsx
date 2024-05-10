import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";
import { FORM_TEXT } from "../../strings/string";
import { FormProps } from "../../types";

export const Theatres: FC<FormProps> = ({ formik }) => {
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
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {FORM_TEXT.theaterWork}
            </h2>
            <FieldArray name="theaters">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        {formik.values.theaters.map((theaters, index) => (
                            <div
                                className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {FORM_TEXT.theater}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={theaters.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`theaters[${index}].name`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {FORM_TEXT.performances}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={theaters.performances}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`theaters[${index}].performances`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {FORM_TEXT.yearsOfPerformance}
                                    </h2>
                                    <div className="flex gap-[6px] justify-end items-center">
                                        <input
                                            className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                theaters.startYear === 0
                                                    ? ""
                                                    : theaters.startYear
                                            }
                                            onChange={handleInputChange}
                                            name={`theaters[${index}].startYear`}
                                            placeholder="YYYY"
                                            maxLength={4}
                                        />
                                        <div className="w-[2px] h-[1px] bg-gray_border"></div>
                                        <input
                                            className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                theaters.graduationYear === 0
                                                    ? ""
                                                    : theaters.graduationYear
                                            }
                                            onChange={handleInputChange}
                                            name={`theaters[${index}].graduationYear`}
                                            placeholder="YYYY"
                                            maxLength={4}
                                        />
                                    </div>
                                </div>
                                {index > 0 && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="border border-gray_border text-[6px] sm:text-xs bg-[#f32013] text-white rounded-[3px] px-1 sm:px-2 py-[2px] sm:py-1"
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
                                className="text-[6px] sm:text-xs text-button_color"
                                onClick={() =>
                                    push({
                                        name: "",
                                        performances: "",
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
