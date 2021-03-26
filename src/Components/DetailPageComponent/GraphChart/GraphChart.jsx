import React from "react";
import "./GraphChart.css"


export const GraphChart = (props) => {

    function roundData(value) {
        return Math.round(value)
    }

    let hourlyForecast = new Date(props.dt * 1000);
    let hour = hourlyForecast.getHours()
    const temp = roundData(props.temp);

    //here we change position for each item of graph

    let truePosition = (temp - 5) * (-1);
    const tempDescription = props.description;

    return (
        <div className="graphBody"
             style={{top: truePosition}}
             data-title={temp + "°C" + " " + tempDescription + " " + "Time:" + hour + "h"}>
            -
        </div>
    )
}