import { getBearerToken } from "@/utils/token/Token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const actorApi = createApi({
    reducerPath: "actor",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    endpoints: (builder) => ({
        createActor: builder.mutation({
            query: (formData) => ({
                url: "/actor",
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
