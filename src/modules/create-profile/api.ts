import { axiosAuthorized } from "@/lib/axios";

// export function getSuppliesByDate(startDate: string, endDate: string) {
//     return axiosAuthorized.get<GetSuppliesByDate[]>(
//         `/api/supplies?start-date=${startDate}&end-date=${endDate}`
//     );
// }

// export function getSupplyById(id: number) {
//     return axiosAuthorized.get<GetSupplyById[]>(`/api/supplies/detail/${id}`);
// }

export function createActor(data: any) {
    return axiosAuthorized.post(`/user/profile/actor/edit`, data);
}
export function createDirector(data: any) {
    return axiosAuthorized.post(`/user/profile/director/edit`, data);
}
