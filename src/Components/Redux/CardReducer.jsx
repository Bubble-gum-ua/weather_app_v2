import React from "react";
import {weatherApi} from "../Api/Api";

const ADD_CITY = "ADD_CITY";
const REFRESH_CARD = "REFRESH_CARD";
const DELETE_CITY = "DELETE_CITY";

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
        case DELETE_CITY: {
            return {
                ...state,
                city: state.city.filter(el=> el.name !== action.name)

            }
        }
        case  REFRESH_CARD: {
            return {
                ...state.state,
                city: [...state.city]
            }
        }
        default:
            return state
    }
}


export const addCity = (city) => ({type: ADD_CITY, city});
export const deleteCity = (name) => ({type: DELETE_CITY, name});
export const refreshCard = (city) => ({type: REFRESH_CARD, city});


export const getCityData = (name,action) =>{
    return async (dispatch) =>{
        if (action === 'ADD'){
            let result = await weatherApi.getCityData(name);
            dispatch(addCity(result))
        } else if (action === "REFRESH") {
            let result = await weatherApi.getCityData(name);
            dispatch(refreshCard(result))
        }

    }
}