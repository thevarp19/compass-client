import { useLanguage } from "@/context/LanguageProvider";
import { FC } from "react";
import { AllInfoProps } from "./AllInfo";

export const MovieAndAwards: FC<AllInfoProps> = ({ actor }) => {
    const { language } = useLanguage();

    const renderField = (label: string, value: any) => (
        <div className="flex justify-between items-center">
            <h2 className="text-[7px] min-w-[30%] sm:min-w-none sm:text-base text-grayDark_text">
                {label}
            </h2>
            <div className="w-full sm:w-max">
                <h2 className="text-[7px] text-end sm:text-base text-grayDark_text">
                    {value || "—"}
                </h2>
            </div>
        </div>
    );

    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                    {language.FORM_TEXT.movies}
                </h2>

                {actor?.movies?.length ? (
                    actor.movies.map((movie, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <h2 className="text-[7px] min-w-[30%] sm:min-w-none sm:text-base text-grayDark_text">
                                {movie.releasedYear || "—"}
                            </h2>
                            <div className="w-full sm:w-max">
                                <h2 className="text-[7px] text-end sm:text-base text-grayDark_text">
                                    {movie.name || "—"}
                                </h2>
                                <h2 className="text-[7px] text-end sm:text-base grayDark_text">
                                    {movie.role || "—"}
                                </h2>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2 className="text-[7px] text-grayDark_text">—</h2>
                )}
            </div>
            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                    {language.FORM_TEXT.awards}
                </h2>

                {actor?.awards?.length ? (
                    actor.awards.map((award, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <h2 className="text-[7px] min-w-[30%] sm:min-w-none sm:text-base text-grayDark_text">
                                {award.year || "—"}
                            </h2>
                            <div className="w-max">
                                <h2 className="text-[7px] text-end sm:text-base text-grayDark_text">
                                    {award.name || "—"}
                                </h2>
                                <h2 className="text-[7px] text-end sm:text-base text-grayDark_text">
                                    {award.position || "—"}
                                </h2>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2 className="text-[7px] text-grayDark_text">—</h2>
                )}
            </div>
        </>
    );
};
