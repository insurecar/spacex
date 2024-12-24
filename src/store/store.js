import { createStore, combineReducers, applyMiddleware } from "redux";
import lg from "redux-logger";
import { thunk } from "redux-thunk";
import { listOfHistoryReducer } from "./reducers";

const rootReducer = combineReducers({ listOfHistoryReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk, lg));
