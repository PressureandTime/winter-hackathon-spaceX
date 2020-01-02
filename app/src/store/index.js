import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import launchesReducer from "./reducer/launchesReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk, logger];

const store = createStore(
  combineReducers({ launchesReducer }),
  applyMiddleware(...middlewares)
);

export default store;
