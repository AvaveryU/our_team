import { combineReducers } from "redux";
import { userReducer } from "./users";

export const rootReducer = combineReducers({
    users: userReducer
});