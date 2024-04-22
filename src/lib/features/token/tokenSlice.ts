import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface TokenState {
    accessToken: string;
    refreshToken: string;
}

const initialState: TokenState = {
    accessToken: "",
    refreshToken: "",
};

interface SetTokenPayload {
    token: string;
    type: "access" | "refresh";
    cookieName: string;
}

const tokenExpiry: { [key: string]: number } = {
    access: 0.25, // Access token expiration in hours (15 minutes)
    refresh: 168, // Refresh token expiration in hours (7 days)
};

export const tokenSlice = createSlice({
    name: "tokenSlice",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<SetTokenPayload>) => {
            const { token, type, cookieName } = action.payload;
            const expireHours = tokenExpiry[type];
            const expirationDate = new Date();
            expirationDate.setTime(
                expirationDate.getTime() + expireHours * 3600000
            );
            Cookies.set(cookieName, token, {
                secure: true,
                sameSite: "Strict",
                expires: expirationDate,
            });
            // Update state with new token values
            if (type === "access") {
                state.accessToken = token;
            } else if (type === "refresh") {
                state.refreshToken = token;
            }
        },
    },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
