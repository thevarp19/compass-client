import { combineReducers } from "@reduxjs/toolkit";
import { userRootReducer } from "./user/reducers";

export const rootReducer = combineReducers({
    user: userRootReducer,
});
