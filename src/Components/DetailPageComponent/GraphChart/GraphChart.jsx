import React from "react";
import "./GraphChart.css"


export const GraphChart = (props) => {
    const temp = props.temp;
    return (
        <div className="graphChart">
            <div className="graphBody" style={{top: temp}}>
                {temp}
            </div>
        </div>
    )
}