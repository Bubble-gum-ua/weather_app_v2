import axios from "axios";


const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
})

const API_KEY = "e52f6e745ca76353e86b7276db7daaf4";


export const weatherApi = {
    getCityData(name) {
        return instance.get(`weather?appid=${API_KEY}&units=metric&q=${name}`)
            .then(res => res.data)
    },
}


export const getWeatherIcons = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}