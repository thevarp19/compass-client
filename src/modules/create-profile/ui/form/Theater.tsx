import { ChangeEvent, FC, useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "../../types";

export const Theatres: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const [theaters, setTheaters] = useState(formik.values.theaters);
    useEffect(() => {
        setTheaters(formik.values.theaters || []);
    }, [formik.values.theaters]);
    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const numericValue =
            name === "startYear" || name === "graduationYear"
                ? parseInt(value, 10) || undefined
                : value;

        const newTheaters = theaters.map((theater, idx) =>
            idx === index ? { ...theater, [name]: numericValue } : theater
        );
        setTheaters(newTheaters);
        formik.setFieldValue("theaters", newTheaters);
    };

    const addTheater = () => {
        const newTheater = {
            name: "",
            performances: "",
            startYear: undefined,
            graduationYear: undefined,
        };
        const newTheaters = [...theaters, newTheater];
        setTheaters(newTheaters);
        formik.setFieldValue("theaters", newTheaters);
    };

    const removeTheater = (index: number) => {
        const newTheaters = theaters.filter((_, idx) => idx !== index);
        setTheaters(newTheaters);
        formik.setFieldValue("theaters", newTheaters);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.theaterWork}
            </h2>
            {theaters.map((theater, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.theater}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={theater.name}
                            type="text"
                            onChange={(e) => handleInputChange(index, e)}
                            name="name"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.performances}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={theater.performances}
                            onChange={(e) => handleInputChange(index, e)}
                            name="performances"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.yearsOfPerformance}
                        </h2>
                        <div className="flex gap-[6px] justify-end items-center">
                            <input
                                className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                type="number"
                                value={theater.startYear}
                                onChange={(e) => handleInputChange(index, e)}
                                name="startYear"
                                placeholder="YYYY"
                                maxLength={4}
                            />
                            <div className="w-[2px] h-[1px] bg-gray_border"></div>
                            <input
                                className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                type="number"
                                placeholder="YYYY"
                                maxLength={4}
                                value={theater.graduationYear}
                                onChange={(e) => handleInputChange(index, e)}
                                name="graduationYear"
                            />
                        </div>
                    </div>

                    {index > 0 && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="border border-gray_border text-[6px] sm:text-xs bg-[#f32013] text-white rounded-[3px] px-1 sm:px-2 py-[2px] sm:py-1"
                                onClick={() => removeTheater(index)}
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
                    onClick={addTheater}
                >
                    {language.FORM_TEXT.addMore}
                </button>
            </div>
        </div>
    );
};
