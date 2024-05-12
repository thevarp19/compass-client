import { useLanguage } from "@/context/LanguageProvider";
import { ChangeEvent, FC } from "react";

import { FormProps } from "../../types";

export const Award: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.awards}
            </h2>
            {/* { <FieldArray name="awards">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        {formik.values.awards?.map((awards, index) => (
                            <div
                                className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.awardName}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={awards.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`awards[${index}].name`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.position}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px] !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={awards.position}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`awards[${index}].position`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.year}
                                    </h2>
                                    <div className="flex justify-end items-center">
                                        <input
                                            className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                awards.year === 0
                                                    ? ""
                                                    : awards.year
                                            }
                                            onChange={handleInputChange}
                                            name={`awards[${index}].year`}
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
                                            {language.FORM_TEXT.remove}
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
                                        position: "",
                                        year: "",
                                    })
                                }
                            >
                                {language.FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray>} */}
        </div>
    );
};
