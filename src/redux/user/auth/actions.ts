import jwtService from "@/lib/jwt";
import { LoginResponse } from "@/modules/auth/types";
import { LOGIN_SUCCESS, LoginSuccessAction, LogoutAction } from "./types";

export const loginSuccess = (data: LoginResponse): LoginSuccessAction => {
    // console.log("loginSuccess", data);

    jwtService.saveJwt({
        access: data.access,
        refresh: data.refresh,
    });
    return {
        type: LOGIN_SUCCESS,
    };
};

export const logout = (): LogoutAction => {
    jwtService.removeJwt();

    return { type: "LOGOUT" };
};
