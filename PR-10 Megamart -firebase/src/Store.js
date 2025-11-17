import { thunk } from "redux-thunk";
import { applyMiddleware, compose, createStore } from 'redux';
import MenReducer from "./Components/Services/Reducer/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(MenReducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;
