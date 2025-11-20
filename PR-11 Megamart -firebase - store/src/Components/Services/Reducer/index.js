import { combineReducers } from "redux";
import MenReducer from "./Reducer";
import { authReducer } from "./authreducer";

export const rootReducer = combineReducers({
    MenReducer,
    authReducer
})