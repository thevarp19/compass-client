import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../auth/api";
import { getActors, getActorsDetail } from "./api";
import {
    ActorFilters,
    GetActorDetailResponse,
    GetActorResponse,
} from "./types";

export const useGetActors = (filters: ActorFilters) => {
    return useQuery<GetActorResponse[], Error>({
        queryKey: ["actors", filters],
        queryFn: async () => {
            const { data } = await getActors(filters);
            return data;
        },

        enabled: !!filters,
    });
};

export const useGetActorDetail = (id: number) => {
    return useQuery<GetActorDetailResponse>({
        queryKey: ["actor", id],
        queryFn: async () => {
            const { data } = await getActorsDetail(id);
            return data;
        },
    });
};
export const useGetProfile = () => {
    return useQuery<GetActorDetailResponse>({
        queryKey: ["profile"],
        queryFn: async () => {
            const { data } = await getProfile();
            return data;
        },
    });
};
