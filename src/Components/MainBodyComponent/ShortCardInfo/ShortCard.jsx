import React from "react";
import Paper from "@material-ui/core/Paper";
import {Grid, makeStyles} from "@material-ui/core";
import {ActualDate} from "../../Tools/Date";
import "./ShortCard.css";
import windIco from "../../Assets/windIco.png"
import humidityIco from "../../Assets/humidity.png"
import {getWeatherIcons} from "../../Api/Api";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginTop: "15px",
        background: "linear-gradient(to right, #FFFFFF, #C5CED3)",
        maxWidth: "400px",
        maxHeight: "200px"
    },
}));

export const ShortCard = (props) => {
    const classes = useStyles();
    let city = props.city;

    function roundData(value) {
        return Math.round(value)
    }

    let ico = getWeatherIcons(city.weather[0].icon)

    return (
        <div className="shortCardWrapper">
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <div className="dateContainer">
                            {ActualDate()}
                        </div>
                        <div>
                            <h2> {city.name} </h2>
                        </div>
                        <div className="tempContent">
                             <span className="tempValue">
                                 {roundData(city.main.temp)} °
                             </span>
                            <span className="tempDescription">
                                  {city.weather[0].description}
                              </span>
                        </div>
                        <div className="additionalParams">
                             <span className="windContainer">
                                 <img src={windIco} alt="windIco"/>
                                 {city.wind.speed} mps
                              </span>
                            <span className="humidityContainer">
                                  <img src={humidityIco} alt="humidityIco"/>
                                {city.main.humidity} %
                              </span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={ico} alt="weatherIco"/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}