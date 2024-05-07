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
import ActorGrid from "../actorGrid/ActorGrid";
import { ActorList } from "../actorList/ActorList";
import { ACTORS } from "./string";

export const Actors: FC = () => {
    const [view, setView] = useState("grid");
    const [filters, setFilters] = useState<ActorFilters>(initialFilters);

    const debouncedSearch = useDebounce(filters.search, 1000);
    const debouncedAgeMin = useDebounce(filters.age_min, 1000);
    const debouncedAgeMax = useDebounce(filters.age_max, 1000);

    const { data: actors, isLoading } = useGetActors({
        ...filters,
        search: debouncedSearch,
        age_min: debouncedAgeMin,
        age_max: debouncedAgeMax,
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
        <div className="bg-gray flex flex-col gap-10 justify-between p-4 sm:px-20 sm:py-10 md:px-[146px] md:py-[80px]">
            <div className="flex flex-col sm:flex-row justify-between items-start">
                <h2 className="text-black text-xl sm:text-2xl md:text-[32px] font-medium leading-[130%]">
                    {ACTORS.title}
                </h2>
                <SearchInput
                    value={filters.search}
                    onSearchChange={handleSearchChange}
                    placeholder="Поиск..."
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-10">
                {actors?.length === 0 ? (
                    <div className="flex justify-center items-center min-w-[830px] w-full">
                        <h2 className="text-2xl font-medium text-center text-black w-64">
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
