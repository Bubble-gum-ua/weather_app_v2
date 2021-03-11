import React from "react";

const ADD_CITY = "ADD_CITY";
const UPDATE_BODY = "UPDATE_BODY";

const initialState = {
    city: {
        name: "Kiev"
    }
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY: {
            return {
                ...state,
                city: [action.city, state.city]
            }
        }
        case  UPDATE_BODY: {
            return {
                ...state,
                city: [...state.city]
            }
        }
        default:
            return {
                state
            }
    }
}

export const addCity = (name) => ({type: ADD_CITY, name});
export const updateBody = (city) => ({type: UPDATE_BODY, city});