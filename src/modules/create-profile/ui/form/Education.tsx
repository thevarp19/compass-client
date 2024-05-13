import { useLanguage } from "@/context/LanguageProvider";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { FormProps } from "../../types";

export const Education: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    useEffect(() => {
        setEducations(formik.values.educations || []);
    }, [formik.values.educations]);
    const [educations, setEducations] = useState(formik.values.educations);

    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const numericValue =
            name === "startYear" || name === "graduationYear"
                ? parseInt(value, 10) || undefined
                : value;

        const newEducations = educations.map((education, idx) =>
            idx === index ? { ...education, [name]: numericValue } : education
        );
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    const addEducation = () => {
        const newEducation = {
            university: "",
            faculty: "",
            startYear: undefined,
            graduationYear: undefined,
        };
        const newEducations = [...educations, newEducation];
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    const removeEducation = (index: number) => {
        const newEducations = educations.filter((_, idx) => idx !== index);
        setEducations(newEducations);
        formik.setFieldValue("educations", newEducations);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.education}
            </h2>
            {educations.map((education, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.university}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={education.university}
                            type="text"
                            onChange={(e) => handleInputChange(index, e)}
                            name="university"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.faculty}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={education.faculty}
                            onChange={(e) => handleInputChange(index, e)}
                            name="faculty"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.yearsOfStudy}
                        </h2>
                        <div className="flex gap-[6px] justify-end items-center">
                            <input
                                className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                type="number"
                                value={education.startYear}
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
                                value={education.graduationYear}
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
                                onClick={() => removeEducation(index)}
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
                    onClick={addEducation}
                >
                    {language.FORM_TEXT.addMore}
                </button>
            </div>
        </div>
    );
};
