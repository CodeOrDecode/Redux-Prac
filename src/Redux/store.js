import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { themereducer } from "./themereducer";
import logger from "redux-logger";

const rootreducer = combineReducers({
    themereducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(logger));

