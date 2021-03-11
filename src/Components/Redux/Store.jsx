import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {cardReducer} from "./CardReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    city: cardReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;