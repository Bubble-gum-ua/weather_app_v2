import React from "react";
import {weatherApi} from "../Api/Api";

const ADD_CITY = "ADD_CITY";
const REFRESH_CARD = "REFRESH_CARD";
const DELETE_CITY = "DELETE_CITY";
const ADD_CHART_DATA = "ADD_CHART_DATA";

const initialState = {
    city: [],
    hourlyData:[]
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
        case  ADD_CHART_DATA: {
            return {
                ...state,
                hourlyData: [action.hourlyData, ...state.hourlyData]
            }
        }

        default:
            return state
    }
}


export const addCity = (city) => ({type: ADD_CITY, city});
export const deleteCity = (name) => ({type: DELETE_CITY, name});
export const refreshCard = (city) => ({type: REFRESH_CARD, city});
export const addHourly = (hourlyData) => ({type: ADD_CHART_DATA, hourlyData})

export const getCityData = (name,action) =>{
    return async (dispatch,getState) =>{
        if (action === 'ADD'){
            let result = await weatherApi.getCityData(name);
            const duplicateCityEntered = getState().city.city.find(el => el.id === result.id)
            duplicateCityEntered ? dispatch(refreshCard(result)) : dispatch(addCity(result))

        } else if (action === "REFRESH") {
            let result = await weatherApi.getCityData(name);
            dispatch(refreshCard(result))
        }

    }
}

export const getHourlyData = (lat,lon) =>{
    return async (dispatch) =>{
        let result = await weatherApi.getHourlyWeatherData(lat,lon);
        dispatch(addHourly(result))
    }
}