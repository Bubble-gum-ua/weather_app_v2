import React from "react";
import './App.css';
import {MainBody} from "./Components/MainBodyComponent/MainBody";
import {useSelector} from "react-redux";

function App() {
    let city = useSelector(state => state.city.state.city)
    console.log(city)

    return (
        <div className="App">
            <MainBody city={city}/>

        </div>
    );
}

export default App;
