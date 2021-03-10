import React from "react";
import {weatherApi} from "../Api/Api";

const ADD_CITY = "ADD_CITY";

let initialState = {
    city: []
}


export const CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY: {
            return {
                ...state,
                city: [action.card, ...state.city]
            }
        }
        default:
            return state;
    }
}

export const addCity = (card) => ({type: ADD_CITY, card})


export const getCityInfo = (name, action) => {
    return async (dispatch, getState) => {
        try {
            let result = await weatherApi.getCityData(name)
            if (action === "ADD_CITY") {
                dispatch(addCity(result))
                console.log(result)
                debugger;
            }
        } catch (err) {
            dispatch("")
        }
    }
}