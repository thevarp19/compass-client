import { FC } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { AllInfoProps } from "./AllInfo";

export const GeneralInformation: FC<AllInfoProps> = ({ actor }) => {
    const { language, getHref } = useLanguage();

    return (
        <>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                    {language.FORM_TEXT.generalInfo}
                </h2>

                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-grayDark_text min-w-[50%] sm:min-w-none text-[8px] sm:text-base sm:leading-[130%] ">
                        {language.FORM_TEXT.gender}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-grayDark_text text-[8px] sm:text-base leading-[130%]">
                            {actor?.gender === "male" ? "Мужчина" : "Женшина"}
                        </h2>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text sm:leading-[130%]">
                        {language.FORM_TEXT.nationality}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text leading-[130%]">
                            {actor?.citizenship}
                        </h2>
                    </div>
                </div>
                {/* <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text sm:leading-[130%]">
                        {language.FORM_TEXT.specialization}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text leading-[130%]">
                            {actor?.specialization}
                        </h2>
                    </div>
                </div> */}
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text sm:leading-[130%]">
                        {language.FORM_TEXT.cityOfResidence}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text leading-[130%]">
                            {actor?.cityAccommodation}
                        </h2>
                    </div>
                </div>
                {/* <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text sm:leading-[130%]">
                        {language.FORM_TEXT.legalStatus}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text leading-[130%]">
                            {actor?.legalStatus}
                        </h2>
                    </div>
                </div> */}
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text sm:leading-[130%]">
                        {language.FORM_TEXT.agency}
                    </h2>
                    <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        <h2 className="text-[8px] sm:text-base text-grayDark_text ">
                            {actor?.agency}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.externalData}
                </h2>
                <div className="flex justify-between items-center gap-1 sm:gap-0 ">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.height}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.height} см.
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.weight}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.weight} кг.
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.clothingSize}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.clothingSize}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.shoeSize}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.shoeSize}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.hairLength}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.hairLength}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.hairColor}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.hairColor}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.eyeColor}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.eyeColor}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.bodyPosition}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.bodyType}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.appearanceType}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.typeOfAppearance}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.features}
                    </h2>
                    <h2 className="text-[8px] sm:text-base text-grayDark_text min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                        {actor?.peculiarities}
                    </h2>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.skills}
                </h2>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.sport}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.sports?.map((sport, index) => (
                            <span key={index}>
                                {sport}
                                {index !== actor.sports.length - 1 && ", "}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.dance}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.dancings?.map((dance, index) => (
                            <span key={index}>
                                {dance}
                                {index !== actor.dancings.length - 1 && ", "}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.musicalInstruments}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.musicalInstruments?.map((music, index) => (
                            <span key={index}>
                                {music}
                                {index !==
                                    actor.musicalInstruments.length - 1 && ", "}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.singing}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.singing?.map((sing, index) => (
                            <span key={index}>
                                {sing}
                                {index !== actor.singing.length - 1 && ", "}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.foreignLanguages}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.foreignLanguages?.map((lang, index) => (
                            <span key={index}>
                                {lang}
                                {index !== actor.foreignLanguages.length - 1 &&
                                    ", "}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className="flex justify-between items-center gap-1 sm:gap-0">
                    <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                        {language.FORM_TEXT.drivingLicenses}
                    </h2>
                    <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                        {actor?.rights?.map((right, index) => (
                            <span key={index}>
                                {right}
                                {index !== actor.rights.length - 1 && ", "}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] min-w-[50%] sm:max-w-none sm:text-xl font-semibold text-black   border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.education}
                </h2>
                {actor?.educations?.map((education, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center gap-1 sm:gap-0"
                    >
                        <h2 className="text-[8px] sm:text-base min-w-[50%] sm:min-w-none text-grayDark_text">
                            {education.startYear} - {education.graduationYear}
                        </h2>
                        <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {education.university}
                            </h2>
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {education.faculty}{" "}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] min-w-[50%] sm:max-w-none sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.theaterWork}
                </h2>
                {actor?.theaters?.map((theater, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center gap-1 sm:gap-0"
                    >
                        <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text">
                            {theater.startYear} - {theater.graduationYear}
                        </h2>
                        <div className="min-w-[50%] sm:max-w-none  sm:min-w-[311px]">
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {theater.name}
                            </h2>
                            <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                {theater.performances}{" "}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex sm:flex-row flex-col gap-[10px] sm:gap-0 justify-between w-full border-b border-gray_border sm:leading-10">
                <h2 className="text-[10px] sm:text-xl min-w-[50%] sm:min-w-none font-semibold text-black ">
                    {language.FORM_TEXT.comments}
                </h2>
                <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                        {actor?.additionalInformation}
                    </h2>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-[10px] sm:gap-0 w-full ">
                <h2 className="text-[10px] sm:text-xl min-w-[50%] sm:min-w-none font-semibold text-black whitespace-pre-wrap ">
                    {language.FORM_TEXT.additionalInfo}
                </h2>
                <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                        {actor?.comments}
                    </h2>
                </div>
            </div>
        </>
    );
};
