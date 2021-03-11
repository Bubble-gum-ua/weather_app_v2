import React from "react";
import {weatherApi} from "../Api/Api";

const ADD_CITY = "ADD_CITY";

const initialState = {
    city: []
}
console.log(initialState)

export const CardReducer = (state = initialState, action,result) => {
    switch (action) {
        case ADD_CITY: {
            return {
                ...state,
                city: [result, ...state.city]
            }
        }
        default:
            return state;
    }
}

export const addCity = (result) => ({type: ADD_CITY, result})


export const getCityInfo = (name,action) => {
    return async (dispatch) => {
        try {
            let result = await weatherApi.getCityData(name)
            if (action === "ADD_CITY"){
                dispatch(addCity(result))
                console.log(result)
                debugger;
            }


        } catch (err) {
            dispatch("")
        }
    }
}
console.log(initialState)