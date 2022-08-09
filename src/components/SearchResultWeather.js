import React from 'react';
import './SearchResultWeather.scss';

const SearchResultWeather = ({weather}) => {
    if (!weather) {
        return null
    };
    return(
        <div className="weather-wrap">
            <div className = 'weatherTitle'>
                {weather.city_name}, {weather.country_code} local weather:
            </div>
            <div className = 'weatherInfo'>
                <div className="weather-icon">
                    <img src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} alt="weather icon" />
                </div>
                <div className="weather-details">
                    <div className="weather-main">
                        {weather.weather.description}
                    </div>
                    <div className="weather-temperature">
                        {weather.temp}
                    </div>  
                </div>
            </div>
            
        </div>
    )
};

export default SearchResultWeather;