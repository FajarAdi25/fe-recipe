import { createStore } from "redux";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store