import React, {useEffect} from "react";
import './App.css';
import {MainBody} from "./Components/MainBodyComponent/MainBody";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {DetailPAge} from "./Components/DetailPageComponent/DetailPage";
import {getCityData, getHourlyData} from "./Components/Redux/CardReducer";

function App() {
    let city = useSelector(state => state.city.city)
    let hourlyData = useSelector(state => state.city.hourlyData)
    const dispatch = useDispatch()

    //here we add data from local storage when we reload main page

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

    //here we do onecall api call

    useEffect(() => {
        if (city) {
            for(let i=0; i< city.length; i++){
                dispatch(getHourlyData(city[i].coord.lat, city[i].coord.lon))
            }

        }
    }, [city, dispatch])

    // checking data before render

    function fd() {
        if (city.length > 0 && hourlyData.length > 0 ) {
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
