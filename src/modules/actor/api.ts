import { axiosAuthorized } from "@/lib/axios";
import {
    ActorFilters,
    GetActorDetailResponse,
    GetActorResponse,
} from "./types";

export const getActors = async (filters: ActorFilters) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
        const filterKey = key as keyof ActorFilters;
        if (filters[filterKey] !== undefined && filters[filterKey] !== "") {
            params.append(filterKey, filters[filterKey]?.toString() ?? "");
        }
    });
    return axiosAuthorized.get<GetActorResponse[]>(
        `/user/actors?${params.toString()}`
    );
};

export function getActorsDetail(id: number) {
    return axiosAuthorized.get<GetActorDetailResponse>(`/user/actors/${id}`);
}
