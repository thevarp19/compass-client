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
        const value = filters[filterKey];

        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item) params.append(filterKey, item);
            });
        } else if (value !== undefined && value !== "") {
            params.append(filterKey, value.toString());
        }
    });

    return axiosAuthorized.get<GetActorResponse[]>(
        `/user/actors?${params.toString()}`
    );
};

export function getActorsDetail(id: number) {
    return axiosAuthorized.get<GetActorDetailResponse>(`/user/actors/${id}`);
}
