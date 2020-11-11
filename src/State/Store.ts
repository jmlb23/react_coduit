import { applyMiddleware, createStore } from "redux";
import { persisStateMiddleware } from "./Middleware";
import { reducer } from "./Reducers";


export const AppStore = createStore(reducer, applyMiddleware(persisStateMiddleware))