import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import {Button, Grid, makeStyles} from "@material-ui/core";
import {ActualDate} from "../../Tools/Date";
import "./ShortCard.css";
import windIco from "../../Assets/windIco.png"
import humidityIco from "../../Assets/humidity.png"
import {getWeatherIcons} from "../../Api/Api";
import DeleteIcon from '@material-ui/icons/Delete';
import {Refresh} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deleteCity, getCityData} from "../../Redux/CardReducer";
import {useHistory} from "react-router";

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
        maxHeight: "200px",
    },
    clickZone: {
        cursor: "pointer"
    },
    buttons: {
        textAlign: "right"
    }
}));

export const ShortCard = (props) => {
    const classes = useStyles();
    let city = props.city;
    const dispatch = useDispatch();

    function roundData(value) {
        return Math.round(value)
    }

    useEffect(() => {
        if (localStorage.length > 0) {
            let d = JSON.parse(localStorage.getItem("name"))
            if (d.length > 0) {
                let res = d.indexOf(city.name)
                if (res >= 0) {
                } else {
                    d.push(city.name)
                    localStorage.setItem("name", JSON.stringify(d))
                }
            } else {
                d.push(city.name)
                localStorage.setItem("name", JSON.stringify(d))
            }
        }
    }, [city.name])

    const deleteCityCard = () => {
        dispatch(deleteCity(city.name))
        let d = JSON.parse(localStorage.getItem("name"))
        d = d.filter(function (item) {
            return item !== city.name
        })
        console.log(d)
        localStorage.setItem("name", JSON.stringify(d))
    }
    const refreshCard = () => {
        dispatch(getCityData(city.name, "REFRESH"))
    }

    let ico = getWeatherIcons(city.weather[0].icon)
    const history = useHistory();
    const detailPageSwitch = () => {
        history.push(`/${city.name}`)
    }
    return (
        <div className="shortCardWrapper">
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={8} onClick={detailPageSwitch} className={classes.clickZone}>
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
                                 {roundData(city.wind.speed)} mps
                              </span>
                            <span className="humidityContainer">
                                  <img src={humidityIco} alt="humidityIco"/>
                                {city.main.humidity} %
                              </span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={ico} alt="weatherIco"/>
                        <div className={classes.buttons}>
                            <Button
                                variant="text"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon/>}
                                onClick={deleteCityCard}
                            >
                            </Button>
                            <Button
                                variant="text"
                                color="primary"
                                className={classes.button}
                                startIcon={<Refresh/>}
                                onClick={refreshCard}
                            >
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}