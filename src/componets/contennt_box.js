import React from 'react'

export const Weather = (props) => {

    const { weather, dateNow, error, titles } = props

    if (error) {
        return (
            <div className="weather-box">
                {/* Произошла ошибка: {error} */}
            </div>
        )
    }

    function doFirstSymbolUpper(text) {
        if (text) {
            return text[0].toUpperCase() + text.slice(1)
        }
    }

    return (
        < div className="">
            <div className="location-box">
                <div className="location">
                    {weather ? (titles.city + ": " + weather.name + ", " + weather.sys.country) : "City: loading..."}
                </div>
                <div className="date">
                    {dateNow ? (titles.date + ": " + dateNow) : "Date: loading..."}
                </div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {titles.temperature + ":"}
                    <br />{weather ? (Math.round(weather.main.temp) + " °C") : "Temp: loading..."}
                </div>
                <div className="weather">
                    {weather ? (titles.weather + ": " + doFirstSymbolUpper(weather.weather[0].description)) : "Weather: loading..."}
                </div>
            </div>
        </div >
    );
}