import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducres/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))