import React, { useEffect, useState } from 'react';
import Search from './Search';
import SunRiseSet from './SunRiseSet';
import WeatherWeekList from './WeatherWeekList';
import "./HomePage.css";
import getFormattedWeatherData from "./API/weather";
import HourlyChart from './HourlyChart';
import GoogleMap from './GoogleMap';


const HomePage = () => {

    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState();

    
    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units: "metric" }).then(
                (data) => {
                    setWeather(data);
                }
            );
        };
        
        fetchWeather();

        }, [query]);


    console.log("weather",weather)
    console.log("query", query)
    return (
        <div>
            <div className="home_top">
                <div className="card">
    
                    <Search weather={weather} setQuery={setQuery}/>
                    
                    {weather && (
                        <div>
                            <WeatherWeekList weather={weather} />
                            <HourlyChart  weather={weather} />
                            <GoogleMap weather={weather} />
                            <SunRiseSet weather={weather}/>
                        </div>
                    )}
                </div>
            </div>
        
        
        
        </div>
    )
}

export default HomePage