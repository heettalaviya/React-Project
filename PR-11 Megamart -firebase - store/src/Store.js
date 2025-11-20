import { thunk } from "redux-thunk";
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from "./Components/Services/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;
