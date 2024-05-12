import { FieldArray } from "formik";
import { ChangeEvent, FC } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "../../types";

export const Movie: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
    };
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.movies}
            </h2>
            <FieldArray name="movies">
                {({ remove, push }) => (
                    <div className="flex flex-col gap-[10px] sm:gap-5">
                        {formik.values.movies?.map((movies, index) => (
                            <div
                                className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                                    index > 0 &&
                                    "border-t-[1px] border-gray_border pt-5"
                                }`}
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.movieTitle}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={movies.name}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`movies[${index}].name`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.role}
                                    </h2>
                                    <input
                                        className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                                        value={movies.role}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={`movies[${index}].role`}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                        {language.FORM_TEXT.releaseYear}
                                    </h2>
                                    <div className="flex justify-end items-center">
                                        <input
                                            className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                            type="number"
                                            value={
                                                movies.releasedYear === 0
                                                    ? ""
                                                    : movies.releasedYear
                                            }
                                            onChange={handleInputChange}
                                            name={`movies[${index}].releasedYear`}
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
                                        role: "",
                                        releasedYear: "",
                                    })
                                }
                            >
                                {language.FORM_TEXT.addMore}
                            </button>
                        </div>
                    </div>
                )}
            </FieldArray>
        </div>
    );
};
