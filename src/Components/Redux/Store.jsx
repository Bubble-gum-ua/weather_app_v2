import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardReducer} from "./CardReducer";
import thunk from "redux-thunk";
import {loadReducer} from "./loadReducer";

let reducers = combineReducers({
    city: cardReducer,
    loading: loadReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;