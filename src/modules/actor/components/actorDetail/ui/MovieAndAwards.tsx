import { FORM_TEXT } from "@/modules/create-profile/strings/string";
import { FC } from "react";
import { AllInfoProps } from "./AllInfo";

export const MovieAndAwards: FC<AllInfoProps> = ({ actor }) => {
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-xl font-semibold text-black">
                    {FORM_TEXT.movies}
                </h2>

                {actor?.movies.map((movie, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <h2 className="text-grayDark_text">
                            {movie.releasedYear}{" "}
                        </h2>
                        <div className="w-max">
                            <h2 className="text-grayDark_text w-max">
                                {movie.name}
                            </h2>
                            <h2 className="text-grayDark_text w-max">
                                {movie.role}{" "}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-xl font-semibold text-black">
                    {FORM_TEXT.awards}
                </h2>

                {actor?.awards.map((award, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <h2 className="text-grayDark_text">{award.year} </h2>
                        <div className="w-max">
                            <h2 className="text-grayDark_text w-max">
                                {award.name}
                            </h2>
                            <h2 className="text-grayDark_text w-max">
                                {award.position}{" "}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
