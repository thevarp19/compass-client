import { combineReducers } from "redux";
import { userAuthReducer } from "./auth/reducer";

export const userRootReducer = combineReducers({
    auth: userAuthReducer,
});
