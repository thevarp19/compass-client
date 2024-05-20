"use client";
import { MultiSelectInput } from "@/components/shared/multi-select/MultiSelectInput";
import { useLanguage } from "@/context/LanguageProvider";
import {
    agencies,
    appearanceTypes,
    bodyTypes,
    citizenships,
    dances,
    drivingLicense,
    eyeColors,
    features,
    foreignLanguages,
    formatOptions,
    hairColors,
    hairLengths,
    kazakhstanCities,
    musicalInstruments,
    singing,
    sports,
} from "@/modules/create-profile/const/data";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { ActorFilters } from "../../types";

export interface ActorFilterProps {
    view: string;
    setView: (view: string) => void;
    filters: ActorFilters;
    setFilters: React.Dispatch<React.SetStateAction<ActorFilters>>;
}

export const ActorFilter: FC<ActorFilterProps> = ({
    view,
    setView,
    filters,
    setFilters,
}) => {
    const { language } = useLanguage();
    const handleResetFilter = () => {
        setView("grid");
        setFilters({
            isCompassActor: undefined,
            search: "",
            sortBy: "",
            gender: "",
            age_max: undefined,
            age_min: undefined,
            weight_min: undefined,
            weight_max: undefined,
            height_min: undefined,
            height_max: undefined,
            userVideoCount_min: undefined,
            userVideoCount_max: undefined,
            userPhotoCount_min: undefined,
            userPhotoCount_max: undefined,
            citizenship: [],
            // specialization: [],
            cityAccommodation: [],
            // legalStatus: [],
            agency: [],
            hairColor: [],
            sport: [],
            dancing: [],
            right: [],
            foreignLanguage: [],
            singing: [],
            musicalInstrument: [],
            hairLength: [],
            eyeColor: [],
            bodyType: [],
            peculiarities: [],
            typeOfAppearance: [],
        });
    };

    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] =
        useState<boolean>(false);

    useEffect(() => {
        setIsAdvancedSearchOpen(() => {
            return JSON.parse(
                localStorage.getItem("isAdvancedSearchOpen") || "false"
            );
        });
    }, []);
    useEffect(() => {
        localStorage.setItem(
            "isAdvancedSearchOpen",
            JSON.stringify(isAdvancedSearchOpen)
        );
    }, [isAdvancedSearchOpen]);
    const hideAdvancedSearch = () => {
        setIsAdvancedSearchOpen(false);
    };
    const showAdvancedSearch = () => {
        setIsAdvancedSearchOpen(true);
    };
    const handleMultiSelectChange = (name: string, value: string[]) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSortByChange = (newSortBy: string): void => {
        setFilters((prev) => ({ ...prev, sortBy: newSortBy }));
    };
    const handleGenderToggle = (selectedGender: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            gender: prevFilters.gender === selectedGender ? "" : selectedGender,
        }));
    };
    const handleIsCompassToggle = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            isCompassActor: !prevFilters.isCompassActor,
        }));
    };

    const handleMinMaxChange = (filterName: string, value: string) => {
        const parsedValue = parseInt(value, 10);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: isNaN(parsedValue) ? undefined : parsedValue,
        }));
    };

    return (
        <div
            className={`w-full max-w-[100px] min-[375px]:max-w-[130px] sm:max-w-[278px] h-max flex border-[1px] border-gray_border ${
                isAdvancedSearchOpen && "pb-5"
            }  rounded-[5px] flex-col gap-[10px] sm:gap-5 text-black`}
        >
            <div
                className="flex gap-[5px] justify-center items-center w-full h-max py-[6px] px-[13px] sm:py-[11px] sm:px-[64px] border-b-[1px] border-gray_border cursor-pointer"
                onClick={handleResetFilter}
            >
                <h2 className="text-[7px] sm:text-sm whitespace-nowrap">
                    {language.ACTOR_FILTER.reset_filter}
                </h2>
                <Image
                    src={"/icons/cross-X.svg"}
                    width={14}
                    height={14}
                    alt={"cross"}
                    className="w-[7px] h-[7px] sm:w-[14px] sm:h-[14px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 px-[5px] sm:px-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                        {language.ACTOR_FILTER.view}
                    </h2>
                    <div className="flex gap-[4px] sm:gap-[7px] sm:w-2/3 min-w-[42px] sm:min-w-[102px]">
                        <div className="border-[1px] rounded-[2px] border-gray_text p-1 ">
                            <Image
                                src={`/icons/grid${
                                    view === "grid" ? "-active" : ""
                                }.svg`}
                                width={17}
                                height={17}
                                alt={"cross"}
                                onClick={() => setView("grid")}
                                className="w-[7px] h-[7px] sm:w-[17px] sm:h-[17px] cursor-pointer"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                        <div className="border-[1px] rounded-[2px] border-gray_text p-1">
                            <Image
                                src={`/icons/list${
                                    view === "grid" ? "" : "-active"
                                }.svg`}
                                width={17}
                                height={17}
                                alt={"cross"}
                                onClick={() => setView("list")}
                                className="w-[7px] h-[7px] sm:w-[17px] sm:h-[17px] cursor-pointer"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <h2 className="text-[7px] sm:text-sm sm:leading-[130%] w-full">
                        {language.ACTOR_FILTER.sort}
                    </h2>
                    <div className="flex sm:w-2/3 min-w-[42px] sm:min-w-[102px]">
                        <div className="flex flex-col  w-full">
                            <div
                                className={`border-x-[1px] border-t-[1px] text-center border-${
                                    filters.sortBy === ""
                                        ? "button_color border-b-[1px]"
                                        : "gray_text"
                                } rounded-t-[3px] text-[5px] font-light sm:text-[12px] py-[2px] sm:py-[4px] sm:px-[4px]`}
                                onClick={() => {
                                    handleSortByChange("");
                                }}
                            >
                                {language.ACTOR_FILTER.relevant}
                            </div>
                            <div
                                className={`border-[1px]  text-center border-${
                                    filters.sortBy === "name"
                                        ? "button_color border-[1px]"
                                        : "gray_text"
                                } text-[5px] font-light sm:text-[12px] py-[2px] sm:py-[4px] sm:px-[4px]`}
                                onClick={() => {
                                    handleSortByChange("name");
                                }}
                            >
                                {language.ACTOR_FILTER.alphabet}
                            </div>
                            <div
                                className={`border-x-[1px] border-b-[1px] text-center border-${
                                    filters.sortBy === "age"
                                        ? "button_color border-t-[1px]"
                                        : "gray_text"
                                } rounded-b-[3px] font-light text-[5px] sm:text-[12px] py-[2px] sm:py-[4px] sm:px-[4px]`}
                                onClick={() => {
                                    handleSortByChange("age");
                                }}
                            >
                                {language.ACTOR_FILTER.by_age}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:gap-5 px-[5px] sm:px-5">
                <div
                    className="flex justify-between items-center"
                    onClick={hideAdvancedSearch}
                >
                    <h2 className="font-medium text-[8px] sm:text-base text-black">
                        {language.ACTOR_FILTER.main_info}
                    </h2>
                    {isAdvancedSearchOpen && (
                        <Image
                            src={`/icons/up.svg`}
                            width={10}
                            height={10}
                            alt={"cross"}
                            className="w-[7px] h-[7px] sm:w-[14px] sm:h-[14px] cursor-pointer"
                            style={{
                                objectFit: "contain",
                                objectPosition: "center",
                            }}
                        />
                    )}
                </div>
                <div className="flex">
                    <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                        {language.ACTOR_FILTER.gender}
                    </h2>
                    <div className="flex w-2/3 max-w-[102px]">
                        <div
                            className={`flex items-center border-[1px] rounded-s-[3px] text-[5px] sm:text-sm font-light px-[4px] sm:px-[10px] py-[3px] sm:py-1 text-center border-${
                                filters.gender === "MALE"
                                    ? "button_color"
                                    : "gray_text border-0 border-y-[1px] border-s-[1px] border-e-[0px]"
                            } ${filters.gender === "" ? "border-e-[1px]" : ""}`}
                            onClick={() => {
                                handleGenderToggle("MALE");
                            }}
                        >
                            {language.ACTOR_FILTER.male}
                        </div>
                        <div
                            className={`flex items-center border-y-[1px] border-r-[1px] rounded-e-[3px] text-[5px] sm:text-sm font-light px-[4px] sm:px-[10px] py-[3px] sm:py-1 text-center border-${
                                filters.gender === "FEMALE"
                                    ? "button_color border-[1px]"
                                    : "gray_text"
                            }`}
                            onClick={() => {
                                handleGenderToggle("FEMALE");
                            }}
                        >
                            {language.ACTOR_FILTER.female}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                        {language.ACTOR_FILTER.age}
                    </h2>
                    <div className="flex w-2/3 max-w-[102px] gap-[2px] items-center">
                        <input
                            className="w-[20px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                            type="number"
                            placeholder="0"
                            onChange={(e) =>
                                handleMinMaxChange("age_min", e.target.value)
                            }
                            value={filters.age_min || ""}
                        />
                        <div className="w-[2px] h-[1px] bg-gray_border"></div>
                        <input
                            className="w-[20px] sm:w-[48px] h-[14px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                            type="number"
                            placeholder="100"
                            onChange={(e) =>
                                handleMinMaxChange("age_max", e.target.value)
                            }
                            value={filters.age_max || ""}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-[5px] sm:px-5">
                <button
                    className={`bg-gray text-[7px] sm:text-sm border-[1px] w-full ${
                        filters.isCompassActor
                            ? "border-button_color bg-gray_border"
                            : "border-gray_border"
                    }  rounded-[3px] p-1 leading-[130%]`}
                    onClick={handleIsCompassToggle}
                >
                    {language.ACTOR_FILTER.actors_compass}
                </button>
            </div>
            {isAdvancedSearchOpen && (
                <div className="flex flex-col gap-[10px] sm:gap-5 px-[5px] sm:px-5">
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.cityOfResidence}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.cityAccommodation}
                            options={formatOptions(kazakhstanCities)}
                            onChange={(value) =>
                                handleMultiSelectChange(
                                    `cityAccommodation`,
                                    value
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.nationality}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.citizenship}
                            options={formatOptions(citizenships)}
                            onChange={(value) =>
                                handleMultiSelectChange(`citizenship`, value)
                            }
                        />
                    </div>
                    {/* <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.specialization}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.specialization}
                            options={formatOptions(specializations)}
                            onChange={(value) =>
                                handleMultiSelectChange(`specialization`, value)
                            }
                        />
                    </div> */}
                    {/* <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.legalStatus}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.legalStatus}
                            options={formatOptions(legalStatuses)}
                            onChange={(value) =>
                                handleMultiSelectChange(`legalStatus`, value)
                            }
                        />
                    </div> */}

                    {/* MEDIAA */}
                    <h2 className="text-[8px] sm:text-base font-semibold text-black">
                        {language.ACTOR_FILTER.media}
                    </h2>
                    <div className="flex">
                        <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                            {language.ACTOR_FILTER.quantityPhoto}
                        </h2>
                        <div className="flex w-2/3 max-w-[90px] sm:max-w-[102px] gap-[2px] items-center">
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                placeholder="0"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "userPhotoCount_min",
                                        e.target.value
                                    )
                                }
                                value={filters.userPhotoCount_min || ""}
                            />
                            <div className="w-[2px] h-[1px] bg-gray_border"></div>
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                placeholder="100"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "userPhotoCount_max",
                                        e.target.value
                                    )
                                }
                                value={filters.userPhotoCount_max || ""}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                            {language.ACTOR_FILTER.quantityVideo}
                        </h2>
                        <div className="flex w-2/3 max-w-[90px] sm:max-w-[102px] gap-[2px] items-center">
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                placeholder="0"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "userVideoCount_min",
                                        e.target.value
                                    )
                                }
                                value={filters.userVideoCount_min || ""}
                            />
                            <div className="w-[2px] h-[1px] bg-gray_border"></div>
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                placeholder="100"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "userVideoCount_max",
                                        e.target.value
                                    )
                                }
                                value={filters.userVideoCount_max || ""}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.agency}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.agency}
                            options={formatOptions(agencies)}
                            onChange={(value) =>
                                handleMultiSelectChange(`agency`, value)
                            }
                        />
                    </div>
                    <h2 className="text-[8px] sm:text-base font-semibold text-black">
                        {language.ACTOR_FILTER.externalData}
                    </h2>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-sm text-black">
                            {language.ACTOR_FILTER.hairLength}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.hairLength}
                            options={formatOptions(hairLengths)}
                            onChange={(value) =>
                                handleMultiSelectChange(`hairLength`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.hairColor}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.hairColor}
                            options={formatOptions(hairColors)}
                            onChange={(value) =>
                                handleMultiSelectChange(`hairColor`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.eyeColor}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.eyeColor}
                            options={formatOptions(eyeColors)}
                            onChange={(value) =>
                                handleMultiSelectChange(`eyeColor`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.appearanceType}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.typeOfAppearance}
                            options={formatOptions(appearanceTypes)}
                            onChange={(value) =>
                                handleMultiSelectChange(
                                    `typeOfAppearance`,
                                    value
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.bodyPosition}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.bodyType}
                            options={formatOptions(bodyTypes)}
                            onChange={(value) =>
                                handleMultiSelectChange(`bodyType`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.features}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.peculiarities}
                            options={formatOptions(features)}
                            onChange={(value) =>
                                handleMultiSelectChange(`peculiarities`, value)
                            }
                        />
                    </div>
                    <div className="flex">
                        <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                            {language.ACTOR_FILTER.height}
                        </h2>
                        <div className="flex w-2/3 max-w-[90px] sm:max-w-[102px] gap-[2px] items-center">
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "height_min",
                                        e.target.value
                                    )
                                }
                                value={filters.height_min || ""}
                            />
                            <div className="w-[2px] h-[1px] bg-gray_border"></div>
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "height_max",
                                        e.target.value
                                    )
                                }
                                value={filters.height_max || ""}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <h2 className="text-[7px] sm:text-sm leading-[130%] w-full">
                            {language.ACTOR_FILTER.weight}
                        </h2>
                        <div className="flex w-2/3 max-w-[90px] sm:max-w-[102px] gap-[2px] items-center">
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "weight_min",
                                        e.target.value
                                    )
                                }
                                value={filters.weight_min || ""}
                            />
                            <div className="w-[2px] h-[1px] bg-gray_border"></div>
                            <input
                                className="w-[20px] h-[14px] sm:w-[48px] sm:h-[24px] border border-gray_border text-[5px] sm:text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                                type="number"
                                onChange={(e) =>
                                    handleMinMaxChange(
                                        "weight_max",
                                        e.target.value
                                    )
                                }
                                value={filters.weight_max || ""}
                            />
                        </div>
                    </div>
                    <h2 className="text-[8px] sm:text-base font-semibold text-black">
                        {language.ACTOR_FILTER.skills}
                    </h2>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.sport}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.sport}
                            options={formatOptions(sports)}
                            onChange={(value) =>
                                handleMultiSelectChange(`sport`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.dance}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.dancing}
                            options={formatOptions(dances)}
                            onChange={(value) =>
                                handleMultiSelectChange(`dancing`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.musicalInstruments}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.musicalInstrument}
                            options={formatOptions(musicalInstruments)}
                            onChange={(value) =>
                                handleMultiSelectChange(
                                    `musicalInstrument`,
                                    value
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.singing}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.singing}
                            options={formatOptions(singing)}
                            onChange={(value) =>
                                handleMultiSelectChange(`singing`, value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.foreignLanguages}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.foreignLanguage}
                            options={formatOptions(foreignLanguages)}
                            onChange={(value) =>
                                handleMultiSelectChange(
                                    `foreignLanguage`,
                                    value
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[7px] sm:text-sm text-black">
                            {language.ACTOR_FILTER.drivingLicenses}
                        </h2>
                        <MultiSelectInput
                            maxTagCount="responsive"
                            mode="multiple"
                            className="min-w-[90px] sm:min-w-[237px]"
                            value={filters.right}
                            options={formatOptions(drivingLicense)}
                            onChange={(value) =>
                                handleMultiSelectChange(`right`, value)
                            }
                        />
                    </div>
                </div>
            )}
            <div
                className={`${
                    isAdvancedSearchOpen ? "hidden" : "flex"
                }  justify-center items-center border-t-[1px] gap-1 border-gray_border py-[6px] sm:py-[11px] px-[7px] sm:px-[54px]`}
                onClick={showAdvancedSearch}
            >
                <h2 className="text-[7px] sm:text-sm font-normal leading-[130%]">
                    {language.ACTOR_FILTER.advanced_search}
                </h2>
                <Image
                    src={"/icons/down.svg"}
                    width={8}
                    height={5}
                    alt={"down arrow"}
                    className="w-[4px] sm:w-[8px] h-[3px] sm:h-[5px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
        </div>
    );
};
