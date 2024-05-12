import { ChangeEvent, FC, useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { FormProps } from "../../types";

export const Movie: FC<FormProps> = ({ formik }) => {
    const { language } = useLanguage();
    const [movies, setMovies] = useState(formik.values.movies);

    const handleInputChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newMovies = movies.map((movie, idx) =>
            idx === index
                ? { ...movie, [e.target.name]: e.target.value }
                : movie
        );
        setMovies(newMovies);
        formik.setFieldValue("movies", newMovies);
    };

    const addMovie = () => {
        const newMovie = {
            name: "",
            role: "",
            releasedYear: undefined,
        };
        const newMovies = [...movies, newMovie];
        setMovies(newMovies);
        formik.setFieldValue("movies", newMovies);
    };

    const removeMovie = (index: number) => {
        const newMovies = movies.filter((_, idx) => idx !== index);
        setMovies(newMovies);
        formik.setFieldValue("movies", newMovies);
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                {language.FORM_TEXT.movies}
            </h2>
            {movies.map((movie, index) => (
                <div
                    key={index}
                    className={`flex flex-col gap-[10px] sm:gap-5 w-full ${
                        index > 0 && "border-t-[1px] border-gray_border pt-5"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.movieTitle}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={movie.name}
                            type="text"
                            onChange={(e) => handleInputChange(index, e)}
                            name="name"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.role}
                        </h2>
                        <input
                            className={`!w-[92px] h-[14px] sm:!w-[237px] sm:h-[24px] px-[4px] sm:px-[10px] py-[3px] sm:py-[4px]  !indent-0 text-[6px] sm:text-xs border border-gray_border !rounded-[2px] outline-none text-grayDark_text`}
                            value={movie.role}
                            onChange={(e) => handleInputChange(index, e)}
                            name="role"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text">
                            {language.FORM_TEXT.releaseYear}
                        </h2>
                        <div className="flex gap-[6px] justify-end items-center">
                            <input
                                className="w-[28px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[6px] sm:text-xs text-center rounded-[3px] outline-none text-grayDark_text"
                                type="number"
                                value={movie.releasedYear}
                                onChange={(e) => handleInputChange(index, e)}
                                name="releasedYear"
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
                                onClick={() => removeMovie(index)}
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
                    onClick={addMovie}
                >
                    {language.FORM_TEXT.addMore}
                </button>
            </div>
        </div>
    );
};
