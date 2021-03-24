import React, {useEffect} from "react";
import './App.css';
import {MainBody} from "./Components/MainBodyComponent/MainBody";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {DetailPAge} from "./Components/DetailPageComponent/DetailPage";
import {getCityData} from "./Components/Redux/CardReducer";

function App() {
    let city = useSelector(state => state.city.city)
    let hourlyData = useSelector(state => state.city.hourlyData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (city.length === 0) {
            let data = JSON.parse(localStorage.getItem("name"))
            if (data != null) {
                for (let i = 0; i < data.length; i++) {
                    dispatch(getCityData(data[i], 'ADD'))
                }
            }
        }
    }, [dispatch, city.length])


    function fd() {
        if (city.length > 0) {
            return <DetailPAge city={city} hourlyData={hourlyData}/>
        }
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path="/"><MainBody city={city}/> </Route>
                <Route path="/:name"> {fd()}</Route>
            </Switch>
        </div>
    );
}

export default App;
