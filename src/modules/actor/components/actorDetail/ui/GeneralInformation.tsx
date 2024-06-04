import { useLanguage } from "@/context/LanguageProvider";
import { FC } from "react";
import { AllInfoProps } from "./AllInfo";

export const GeneralInformation: FC<AllInfoProps> = ({ actor }) => {
    const { language } = useLanguage();

    const renderField = (label: string, value: any) => (
        <div className="flex justify-between items-center gap-1 sm:gap-0">
            <h2 className="text-grayDark_text min-w-[50%] sm:min-w-none text-[8px] sm:text-base sm:leading-[130%]">
                {label}
            </h2>
            <div className="flex items-center min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                <h2 className="text-grayDark_text text-[8px] sm:text-base leading-[130%]">
                    {value || "—"}
                </h2>
            </div>
        </div>
    );

    const renderListField = (label: string, values: any[] | undefined) => (
        <div className="flex justify-between items-center gap-1 sm:gap-0">
            <h2 className="text-[8px] min-w-[50%] sm:max-w-none sm:text-base text-grayDark_text">
                {label}
            </h2>
            <h2 className="min-w-[50%] sm:max-w-none sm:min-w-[311px] text-[8px] sm:text-base text-grayDark_text">
                {values?.length ? values.join(", ") : "—"}
            </h2>
        </div>
    );

    return (
        <>
            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black">
                    {language.FORM_TEXT.generalInfo}
                </h2>
                {renderField(
                    language.FORM_TEXT.gender,
                    actor?.gender === "male"
                        ? "Мужчина"
                        : actor?.gender === "female"
                        ? "Женшина"
                        : "—"
                )}
                {renderField(
                    language.FORM_TEXT.nationality,
                    actor?.nationationality
                )}
                {renderField(
                    language.FORM_TEXT.citizenships,
                    actor?.citizenship
                )}
                {renderField(
                    language.FORM_TEXT.cityOfResidence,
                    actor?.cityAccommodation
                )}
                {renderField(language.FORM_TEXT.agency, actor?.agency)}
            </div>

            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.externalData}
                </h2>
                {renderField(
                    language.FORM_TEXT.height,
                    actor?.height ? `${actor?.height} см.` : "—"
                )}
                {renderField(
                    language.FORM_TEXT.weight,
                    actor?.weight ? `${actor?.weight} кг.` : "—"
                )}
                {renderField(
                    language.FORM_TEXT.clothingSize,
                    actor?.clothingSize
                )}
                {renderField(language.FORM_TEXT.shoeSize, actor?.shoeSize)}
                {renderField(language.FORM_TEXT.hairLength, actor?.hairLength)}
                {renderField(language.FORM_TEXT.hairColor, actor?.hairColor)}
                {renderField(language.FORM_TEXT.eyeColor, actor?.eyeColor)}
                {renderField(language.FORM_TEXT.bodyPosition, actor?.bodyType)}
                {renderField(
                    language.FORM_TEXT.appearanceType,
                    actor?.typeOfAppearance
                )}
                {renderField(language.FORM_TEXT.features, actor?.peculiarities)}
            </div>

            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.skills}
                </h2>
                {renderListField(language.FORM_TEXT.sport, actor?.sports)}
                {renderListField(language.FORM_TEXT.dance, actor?.dancings)}
                {renderListField(
                    language.FORM_TEXT.musicalInstruments,
                    actor?.musicalInstruments
                )}
                {renderListField(language.FORM_TEXT.singing, actor?.singing)}
                {renderListField(
                    language.FORM_TEXT.foreignLanguages,
                    actor?.foreignLanguages
                )}
                {renderListField(
                    language.FORM_TEXT.drivingLicenses,
                    actor?.rights
                )}
            </div>

            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] min-w-[50%] sm:max-w-none sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.education}
                </h2>
                {actor?.educations?.length
                    ? actor.educations.map((education, index) => (
                          <div
                              key={index}
                              className="flex justify-between items-center gap-1 sm:gap-0"
                          >
                              <h2 className="text-[8px] sm:text-base min-w-[50%] sm:min-w-none text-grayDark_text">
                                  {education.startYear} -{" "}
                                  {education.graduationYear}
                              </h2>
                              <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                                  <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                      {education.university}
                                  </h2>
                                  <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                      {education.faculty}
                                  </h2>
                              </div>
                          </div>
                      ))
                    : "—"}
            </div>

            <div className="flex flex-col gap-[10px] sm:gap-5 w-full">
                <h2 className="text-[10px] min-w-[50%] sm:max-w-none sm:text-xl font-semibold text-black border-b border-gray_border sm:leading-10">
                    {language.FORM_TEXT.theaterWork}
                </h2>
                {actor?.theaters?.length
                    ? actor.theaters.map((theater, index) => (
                          <div
                              key={index}
                              className="flex justify-between items-center gap-1 sm:gap-0"
                          >
                              <h2 className="text-[8px] min-w-[50%] sm:min-w-none sm:text-base text-grayDark_text">
                                  {theater.startYear} - {theater.graduationYear}
                              </h2>
                              <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                                  <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                      {theater.name}
                                  </h2>
                                  <h2 className="text-[8px] sm:text-base text-grayDark_text">
                                      {theater.performances}
                                  </h2>
                              </div>
                          </div>
                      ))
                    : "—"}
            </div>

            <div className="flex sm:flex-row flex-col gap-[10px] sm:gap-0 justify-between w-full border-b border-gray_border sm:leading-10">
                <h2 className="text-[10px] sm:text-xl min-w-[50%] sm:min-w-none font-semibold text-black">
                    {language.FORM_TEXT.comments}
                </h2>
                <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                        {actor?.additionalInformation || "—"}
                    </h2>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-[10px] sm:gap-0 w-full">
                <h2 className="text-[10px] sm:text-xl min-w-[50%] sm:min-w-none font-semibold text-black whitespace-pre-wrap">
                    {language.FORM_TEXT.additionalInfo}
                </h2>
                <div className="min-w-[50%] sm:max-w-none sm:min-w-[311px]">
                    <h2 className="text-[8px] sm:text-base text-grayDark_text">
                        {actor?.comments || "—"}
                    </h2>
                </div>
            </div>
        </>
    );
};
