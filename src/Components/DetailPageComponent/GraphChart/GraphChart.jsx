import React from "react";
import "./GraphChart.css"


export const GraphChart = (props) => {
    function roundData(value) {
        return Math.round(value)
    }
    const temp = roundData(props.temp);
    let rightPosition = (temp-5) * (-1)
    return (
            <div className="graphBody" style={{top: rightPosition}} data-title={temp+"°C"}>
               -
            </div>
    )
}