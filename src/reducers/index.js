import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})


