import React from 'react'
import "./SunRiseSet.css"
import {formatToLocalTime} from "./API/weather"
import { SunRiseSetChart } from './SunRiseSetChart'
const SunRiseSet = ({
    weather: { sunrise, sunset, humidity, pressure ,timezone},


}) => {

    return (
        <div>
            <div>
                <div className="PressHum">
                    <div>
                        <span className="Bold">Pressure</span>
                        <span>{pressure} hpa</span>
                    </div>
                    <div>
                        <span className="Bold">Humidity</span>
                        <span>{humidity} %</span>
                    </div>
                </div>

                <div className="SunTime">
                    <div>
                        <span className="Bold">Sunrise</span>
                        <span>{formatToLocalTime(sunrise, timezone, "h:mm")}am</span>
                    </div>
                    <div>
                        <span className="Bold">Sunset</span>
                        <span>{formatToLocalTime(sunset, timezone, "h:mm")}pm</span>
                    </div>
                </div>
            </div>
            <div className="weather_curve">
            <SunRiseSetChart />
            </div>
        </div>
    )
}

export default SunRiseSet;