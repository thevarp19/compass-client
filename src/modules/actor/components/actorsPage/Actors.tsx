"use client";
import { SearchInput } from "@/components/shared/search-input/SearchInput";
// import { actors } from "@/lib/const/actors";
import { Loading } from "@/components/shared/loading/Loading";
import { useDebounce } from "@/hooks/useDebounce";
import { initialFilters } from "@/utils/actorFilter/initialData";
import { FC, useState } from "react";
import { useGetActors } from "../../queries";
import { ActorFilters } from "../../types";
import { ActorFilter } from "../actorFilter/ActorFilter";
import { ActorGrid } from "../actorGrid/ActorGrid";
import { ActorList } from "../actorList/ActorList";
import { ACTORS } from "./string";

export const Actors: FC = () => {
    const [view, setView] = useState("grid");
    const [filters, setFilters] = useState<ActorFilters>(initialFilters);

    const debouncedSearch = useDebounce(filters.search, 1000);
    const debouncedAgeMin = useDebounce(filters.age_min, 1000);
    const debouncedAgeMax = useDebounce(filters.age_max, 1000);
    const debouncedPhotoMin = useDebounce(filters.userPhotoCount_min, 1000);
    const debouncedPhotoMax = useDebounce(filters.userPhotoCount_max, 1000);
    const debouncedVideoMin = useDebounce(filters.userVideoCount_min, 1000);
    const debouncedVideoMax = useDebounce(filters.userVideoCount_max, 1000);
    const debouncedWeightMin = useDebounce(filters.weight_min, 1000);
    const debouncedWeightMax = useDebounce(filters.weight_max, 1000);
    const debouncedHeightMin = useDebounce(filters.height_min, 1000);
    const debouncedHeightMax = useDebounce(filters.height_max, 1000);
    const { data: actors, isLoading } = useGetActors({
        ...filters,
        search: debouncedSearch,
        age_min: debouncedAgeMin,
        age_max: debouncedAgeMax,
        userPhotoCount_min: debouncedPhotoMin,
        userPhotoCount_max: debouncedPhotoMax,
        userVideoCount_min: debouncedVideoMin,
        userVideoCount_max: debouncedVideoMax,
        weight_min: debouncedWeightMin,
        weight_max: debouncedWeightMax,
        height_min: debouncedHeightMin,
        height_max: debouncedHeightMax,
    });

    const handleSearchChange = (newSearch: string): void => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: newSearch,
        }));
    };
    if (isLoading) {
        return <Loading className="h-screen" />;
    }
    return (
        <div className="bg-gray flex flex-col gap-10 justify-between p-4 pb-12 sm:pb-0 sm:px-20 sm:py-10 md:px-[146px] md:py-[80px] w-full h-full">
            <div className="flex justify-between items-start">
                <h2 className="text-black text-[15px] sm:text-[32px] font-medium leading-[130%] whitespace-nowrap">
                    {ACTORS.title}
                </h2>
                <SearchInput
                    value={filters.search}
                    onSearchChange={handleSearchChange}
                    placeholder="Поиск..."
                />
            </div>
            <div className="flex justify-between sm:justify-around gap-[10px] sm:gap-10">
                {actors?.length === 0 ? (
                    <div className="flex justify-center items-center min-w-[830px] w-full h-max">
                        <h2 className="text-[12px] sm:text-2xl font-medium text-center text-black w-64">
                            {ACTORS.no_data}
                        </h2>
                    </div>
                ) : (
                    <>
                        {view === "grid" ? (
                            <ActorGrid actors={actors || []} />
                        ) : (
                            <ActorList actors={actors || []} />
                        )}
                    </>
                )}
                <ActorFilter
                    view={view}
                    setView={setView}
                    filters={filters}
                    setFilters={setFilters}
                />
            </div>
        </div>
    );
};
