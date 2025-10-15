import { ReducerData } from "./Components/Services/Reducer/Reducer";
import { createStore } from 'redux';

const Store = createStore(ReducerData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
