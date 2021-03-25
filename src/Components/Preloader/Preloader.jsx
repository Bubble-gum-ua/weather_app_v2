import React from "react";
import preloader from "../Assets/preloader.svg";
import "./Preloader.css"


export const Preloader = ()=> {
    return <div className="mainPreloaderWrap">
        <img src={preloader} alt="preloader"/>
    </div>
}