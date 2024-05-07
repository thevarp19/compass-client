import { isUserAuthorized, isUserHasProfile } from "@/lib/jwt/decode";
import * as actionTypes from "./types";

const INITIAL_STATE = {
    isLoggedIn: isUserAuthorized(),
    isHasProfile: isUserHasProfile(),
};

export const userAuthReducer = (
    state = INITIAL_STATE,
    action: actionTypes.UserAuthActions
): typeof INITIAL_STATE => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
