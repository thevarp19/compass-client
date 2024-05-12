import { useLanguage } from "@/context/LanguageProvider";
import { ChangeEvent, FC, useState } from "react";

import { FormProps } from "../../types";
interface AwardProps {
    id?: number;
    name: string;
    position: string;
    year: number | undefined;
}
export const Award: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const [awards, setAwards] = useState<AwardProps[]>(formik.values.awards);

    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        const numericValue =
            name === "year" ? parseInt(value, 10) || undefined : value;

        const newAwards = awards.map((award, idx) =>
            idx === index ? { ...award, [name]: numericValue } : award
        );
        setAwards(newAwards);
        formik.setFieldValue("awards", newAwards);
    };

    const addAward = () => {
        const newAward = {
            name: "",
            position: "",
            year: undefined,
        };
        const newAwards = [...awards, newAward];
        setAwards(newAwards);
        formik.setFieldValue("awards", newAwards);
    };

    const removeAward = (index: number) => {
        const newAwards = awards.filter((_, idx) => idx !== index);
        setAwards(newAwards);
        formik.setFieldValue("awards", newAwards);
    };

    return (
        <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.awards}
            </h2>
            {awards.map((award, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.awardName}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={award.name}
                            type="text"
                            onChange={(e) => handleInputChange(index, e)}
                            name="name"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.position}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={award.position}
                            onChange={(e) => handleInputChange(index, e)}
                            name="position"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.year}
                        </h2>
                        <div className="flex gap-[6px] justify-end items-center">
                            <input
                                className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                type="number"
                                value={award.year}
                                onChange={(e) => handleInputChange(index, e)}
                                name="year"
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
                                onClick={() => removeAward(index)}
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
                    onClick={addAward}
                >
                    {language.FORM_TEXT.addMore}
                </button>
            </div>
        </div>
    );
};
