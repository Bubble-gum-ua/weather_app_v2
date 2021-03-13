import React from "react";
import {weatherApi} from "../Api/Api";

const ADD_CITY = "ADD_CITY";
const UPDATE_BODY = "UPDATE_BODY";

const initialState = {
    city: []
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY: {
            return {
                ...state,
                city: [action.city, ...state.city]

            }
        }
        case  UPDATE_BODY: {
            return {
                ...state.state,
                city: [...state.state.city]
            }
        }
        default:
            return state
    }
}


export const addCity = (city) => ({type: ADD_CITY, city});
export const updateBody = (city) => ({type: UPDATE_BODY, city});


export const getCityData = (name) =>{
    return async (dispatch) =>{
        let result = await weatherApi.getCityData(name);
        dispatch(addCity(result))
    }
}