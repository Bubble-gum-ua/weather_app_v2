import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {ActualDate} from "../Tools/Date";
import {getWeatherIcons, weatherApi} from "../Api/Api";
import windIco from "../Assets/windIco.png";
import humidityIco from "../Assets/humidity.png";
import pressureIco from "../Assets/pressureIco.png";
import temperatureIco from "../Assets/temperatureIco.png"
import "./DetailPage.css"
import {Button, Grid, makeStyles} from "@material-ui/core";
import {Clear} from "@material-ui/icons";
import {GraphChart} from "./GraphChart/GraphChart";
import {useDispatch} from "react-redux";
import {getHourlyData} from "../Redux/CardReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
        borderBottom: "1px solid",
        borderLeft: "1px solid",
        position: "relative",
        padding: "15px 5px 15px 0"

    },
    chart: {
        paddingRight: "25px !important"
    }

}));

export const DetailPAge = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const backToMain = () => {
        history.push(`/`)
    }

    const classes = useStyles();
    const nameFromLink = useParams();
    const [city, setCity] = useState('')

    useEffect(() => {
        if (city) {
            dispatch(getHourlyData(city.coord.lat, city.coord.lon))
        }
    }, [city, dispatch])

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

    let hoursCut = (props.hourlyData[0]?.hourly.length > 24
        ? props.hourlyData[0]?.hourly.splice(24)
        : props.hourlyData[0]?.hourly
    )

    let hourlyTemp = hoursCut?.map(h =>
        <Grid item className={classes.chart} key={h.id}>
            <GraphChart temp={h.temp} dt={h.dt} description={h.weather[0].description}/>
        </Grid>
    )

    return (
        <div className="detailPageWrapp">
            <div>
              <span className="detailPageHeader">
                  <ActualDate/>
                     <Button
                         startIcon={<Clear/>}
                         onClick={backToMain}
                     >
                         Close
                     </Button>
              </span>
                <h1> {city.name}</h1>
            </div>
            <div className="tempBlock">
                <div> LOW: {roundData(city.main.temp_max)} °C</div>
                <div className="mainTempCount"> {roundData(city.main.temp)} °C</div>
                <div> HIGH: {roundData(city.main.temp_min)} °C</div>
            </div>
            <div className="weatherVisual">
                <img src={ico} alt="weatherIco"/>
                <div className="weatherDescription"> {city.weather[0].description} </div>
            </div>
            <div className="detailBox">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src={humidityIco} alt="humidityIco"/>
                        HUMIDITY: {city.main.humidity}%
                    </Grid>
                    <Grid item xs={3}>
                        <img src={temperatureIco} alt="temperatureIco"/>FEELS LIKE: {roundData(city.main.feels_like)} °C
                    </Grid>
                    <Grid item xs={3}>
                        <img src={windIco} alt="windIco"/>
                        SPEED: {city.wind.speed} M/S, DEG: {city.wind.deg}
                    </Grid>
                    <Grid item xs={3}>
                        <img src={pressureIco} alt="pressureIco"/>PRESSURE: {city.main.pressure}
                    </Grid>
                </Grid>
            </div>
            <div className="graphChart">
                <div className="chartTitle">
                    HOURLY TEMPERATURE GRAPHIC
                </div>
                <Grid container spacing={1} className={classes.root}>
                    {hourlyTemp}
                </Grid>
            </div>
        </div>
    )
}