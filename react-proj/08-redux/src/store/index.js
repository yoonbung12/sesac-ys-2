import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import bankReducer from "./bankReducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   isData: isDataReducer,
   money: bankReducer,

});

export default rootReducer;