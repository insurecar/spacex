import { createStore, combineReducers, applyMiddleware } from "redux";
import lg from "redux-logger";
import { thunk } from "redux-thunk";
import { listOfHistoryReducer, contentReducer } from "./reducers";

const rootReducer = combineReducers({ listOfHistoryReducer, contentReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
