import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {CardReducer} from "./CardReducer";

let reducers = combineReducers({
    city: CardReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;