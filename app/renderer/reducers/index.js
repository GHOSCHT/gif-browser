//rootReducer
import { combineReducers } from "redux";
import darkModeReducer from "./isDarkMode";
import searchReducer from "./search";

const rootReducer = combineReducers({ darkModeReducer, searchReducer });

export default rootReducer;
