//rootReducer
import { combineReducers } from "redux";
import darkModeReducer from "./isDarkMode";

const rootReducer = combineReducers({ darkModeReducer });

export default rootReducer;
