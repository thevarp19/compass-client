import { actorApi } from "@/lib/api/actor/actor";
import { authApi } from "@/lib/api/auth/auth";
import FormikSlice from "@/lib/features/formik/FormikSlice";
import tokenSlice from "@/lib/features/token/tokenSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [actorApi.reducerPath]: actorApi.reducer,
            [authApi.reducerPath]: authApi.reducer,
            tokenSlice: tokenSlice,
            FormikSlice: FormikSlice,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(
                actorApi.middleware,
                authApi.middleware
            ),
    });
};
