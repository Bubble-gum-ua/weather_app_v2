import React from "react";
import './App.css';
import {MainBody} from "./Components/MainBodyComponent/MainBody";
import {useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {DetailPAge} from "./Components/DetailPageComponent/DetailPage";

function App() {
    let city = useSelector(state => state.city.city)
    let hourlyData = useSelector(state => state.city.hourlyData)

    return (
        <div className="App">
            <Switch>
                <Route exact path="/"><MainBody city={city}/> </Route>
                <Route path="/:name"><DetailPAge city={city} hourlyData={hourlyData}/> </Route>
            </Switch>
        </div>
    );
}

export default App;
