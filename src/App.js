import React from "react";
import './App.css';
import {MainBody} from "./Components/MainBodyComponent/MainBody";
import {useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {DetailPAge} from "./Components/DetailPageComponent/DetailPage";

function App() {
    let city = useSelector(state => state.city.city)

    return (
        <div className="App">
            <Switch>
                <Route exact path="/"><MainBody city={city}/> </Route>
                <Route path="/:name"><DetailPAge city={city}/> </Route>
            </Switch>
        </div>
    );
}

export default App;
