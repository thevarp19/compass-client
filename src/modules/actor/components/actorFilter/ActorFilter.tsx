"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { ActorFilters } from "../../types";
import { ACTOR_FILTER } from "./string";

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
    const handleResetFilter = () => {
        setView("grid");
        setFilters({
            search: "",
            sortBy: "",
            gender: "",
            age_max: undefined,
            age_min: undefined,
        });
    };

    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
    const hideAdvancedSearch = () => {
        setIsAdvancedSearchOpen(false);
    };
    const showAdvancedSearch = () => {
        setIsAdvancedSearchOpen(true);
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

    const handleMinMaxChange = (filterName: string, value: string) => {
        const parsedValue = parseInt(value, 10);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: isNaN(parsedValue) ? undefined : parsedValue,
        }));
    };

    return (
        <div className="w-full h-max flex border-[1px] border-gray_border rounded-[5px] flex-col gap-5 text-black">
            <div
                className="flex gap-[5px] justify-center items-center w-full h-max py-[11px] px-[64px] border-b-[1px] border-gray_border cursor-pointer"
                onClick={handleResetFilter}
            >
                <h2 className="text-sm leading-[130%]">
                    {ACTOR_FILTER.reset_filter}
                </h2>
                <Image
                    src={"/icons/cross-X.svg"}
                    width={14}
                    height={14}
                    alt={"cross"}
                    className="w-[14px] h-[14px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="flex flex-col gap-5 px-5">
                <div className="flex justify-between">
                    <h2 className="text-sm leading-[130%] w-full">
                        {ACTOR_FILTER.view}
                    </h2>
                    <div className="flex gap-[7px] w-2/3 min-w-[102px]">
                        <div className="border-[1px] rounded-[2px] border-gray_text p-1 ">
                            <Image
                                src={`/icons/grid${
                                    view === "grid" ? "-active" : ""
                                }.svg`}
                                width={17}
                                height={17}
                                alt={"cross"}
                                onClick={() => setView("grid")}
                                className="w-[17px] h-[17px] cursor-pointer"
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
                                className="w-[17px] h-[17px] cursor-pointer"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <h2 className="text-sm leading-[130%] w-full">
                        {ACTOR_FILTER.sort}
                    </h2>
                    <div className="flex w-2/3 min-w-[102px]">
                        <div className="flex flex-col">
                            <div
                                className={`border-x-[1px] border-t-[1px] text-center border-${
                                    filters.sortBy === ""
                                        ? "button_color border-b-[1px]"
                                        : "gray_text"
                                } rounded-t-[3px] text-[12px] p-[4px]`}
                                onClick={() => {
                                    handleSortByChange("");
                                }}
                            >
                                {ACTOR_FILTER.relevant}
                            </div>
                            <div
                                className={`border-[1px]  text-center border-${
                                    filters.sortBy === "name"
                                        ? "button_color border-[1px]"
                                        : "gray_text"
                                } text-[12px] p-[4px]`}
                                onClick={() => {
                                    handleSortByChange("name");
                                }}
                            >
                                {ACTOR_FILTER.alphabet}
                            </div>
                            <div
                                className={`border-x-[1px] border-b-[1px] text-center border-${
                                    filters.sortBy === "age"
                                        ? "button_color border-t-[1px]"
                                        : "gray_text"
                                } rounded-b-[3px] text-[12px] py-[4px]`}
                                onClick={() => {
                                    handleSortByChange("age");
                                }}
                            >
                                {ACTOR_FILTER.by_age}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 px-5">
                <h2 className="font-medium text-black">
                    {ACTOR_FILTER.main_info}
                </h2>
                <div className="flex">
                    <h2 className="text-sm leading-[130%] w-full">
                        {ACTOR_FILTER.gender}
                    </h2>
                    <div className="flex w-2/3 max-w-[102px]">
                        <div
                            className={`border-[1px] rounded-s-[3px] py-1 text-xs font-light px-[10px] text-center border-${
                                filters.gender === "MALE"
                                    ? "button_color"
                                    : "gray_text border-0 border-y-[1px] border-s-[1px] border-e-[0px]"
                            } ${filters.gender === "" ? "border-e-[1px]" : ""}`}
                            onClick={() => {
                                handleGenderToggle("MALE");
                            }}
                        >
                            {ACTOR_FILTER.male}
                        </div>
                        <div
                            className={`border-y-[1px] border-r-[1px] rounded-e-[3px] py-1 text-xs font-light px-[10px] text-center border-${
                                filters.gender === "FEMALE"
                                    ? "button_color border-[1px]"
                                    : "gray_text"
                            }`}
                            onClick={() => {
                                handleGenderToggle("FEMALE");
                            }}
                        >
                            {ACTOR_FILTER.female}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <h2 className="text-sm leading-[130%] w-full">
                        {ACTOR_FILTER.age}
                    </h2>
                    <div className="flex w-2/3 max-w-[102px] gap-[2px] items-center">
                        <input
                            className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
                            type="number"
                            placeholder="0"
                            onChange={(e) =>
                                handleMinMaxChange("age_min", e.target.value)
                            }
                            value={filters.age_min || ""}
                        />
                        <div className="w-[2px] h-[1px] bg-gray_border"></div>
                        <input
                            className="w-[48px] h-[24px] border border-gray_border text-[12px] text-center rounded-[3px] outline-grayDark-text text-black"
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
            <div className="flex justify-center px-5">
                <button className="bg-gray text-sm border-[1px] w-full border-gray_border rounded-[3px] p-1 leading-[130%]">
                    {ACTOR_FILTER.actors_compass}
                </button>
            </div>
            <div className="flex justify-center items-center border-t-[1px] gap-1 border-gray_border py-[11px] px-[54px]">
                <h2 className="text-sm font-normal leading-[130%]">
                    {ACTOR_FILTER.advanced_search}
                </h2>
                <Image
                    src={"/icons/down.svg"}
                    width={8}
                    height={5}
                    alt={"down arrow"}
                    className="w-[8px] h-[5px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
        </div>
    );
};
