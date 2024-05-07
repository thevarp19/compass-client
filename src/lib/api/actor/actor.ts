import { baseURL } from "@/config";
import { getBearerToken } from "@/utils/token/Token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const actorApi = createApi({
    reducerPath: "actor",
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (builder) => ({
        createActor: builder.mutation({
            query: (formData) => ({
                url: "/user/profile/actor/edit",
                method: "POST",
                body: formData,
                headers: {
                    Authorization: getBearerToken(),
                },
            }),
        }),
    }),
});

export const { useCreateActorMutation } = actorApi;
