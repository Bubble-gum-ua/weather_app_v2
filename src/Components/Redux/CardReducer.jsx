import React from "react";

const ADD_CITY = "ADD_CITY";
const UPDATE_BODY = "UPDATE_BODY";

const initialState = {
    city: {
        name: ""
    }
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY: {
            return {
                ...state.state,
                city: [action.name, ...state.state.city]

            }
            console.log(state)
        }
        case  UPDATE_BODY: {
            return {
                ...state.state,
                city: [...state.state.city]
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