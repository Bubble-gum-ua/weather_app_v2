import React, {useState} from "react";
import {useParams} from "react-router";
import {ActualDate} from "../Tools/Date";
import {getWeatherIcons} from "../Api/Api";
import windIco from "../Assets/windIco.png";
import humidityIco from "../Assets/humidity.png";
import pressureIco from "../Assets/pressureIco.png";
import temperatureIco from "../Assets/temperatureIco.png"
import "./DetailPage.css"

export const DetailPAge = (props) => {
    const nameFromLink = useParams();
    const [city, setCity] = useState('')

    if (city.length === 0) {
        for (let i = 0; i < props.city.length; i++) {
            if (props.city[i].name === nameFromLink.name) {
                return setCity(props.city[i])
            }
        }
    }
    const ico = getWeatherIcons(city.weather[0].icon);

    function roundData(value) {
        return Math.round(value)
    }

    return (
        <div className="detailPageWrapp">
            <div>
                <ActualDate/> - TODAY
                <h1> {city.name}</h1>
            </div>
            <div>
                <span> LOW {roundData(city.main.temp_max)} °C</span>
                <span> {roundData(city.main.temp)} °C</span>
                <span> HIGH {roundData(city.main.temp_min)} °C</span>
            </div>
            <div>
                <img src={ico} alt="weatherIco"/>
                <div> {city.weather[0].description} </div>
            </div>
            <div className="detailBox">
                <img src={humidityIco} alt="humidityIco"/>
                <span> HUMIDITY {city.main.humidity}% </span>
                <span>
                    <img src={temperatureIco} alt="temperatureIco"/>FEELS LIKE {roundData(city.main.feels_like)} °C
                </span>
                <img src={windIco} alt="windIco"/>
                <span> SPEED {city.wind.speed} </span>
                <span> DEG {city.wind.deg} </span>
                <span>
                    <img src={pressureIco} alt="pressureIco"/>PRESSURE {city.main.pressure}
                </span>
            </div>
        </div>
    )
}