import React from "react";
import "./GraphChart.css"


export const GraphChart = (props) => {
    function roundData(value) {
        return Math.round(value)
    }
    const temp = roundData(props.temp);
    let truePosition = (temp-5) * (-1);
    const tempDescription = props.description;

    return (
            <div className="graphBody" style={{top: truePosition}} data-title={temp+"°C" + tempDescription}>
               -
            </div>
    )
}