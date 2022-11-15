import React from 'react';


import cloud from "../ICON/cloud_sunny.png";
import rain from "../ICON/rain.png";
import sunny from "../ICON/sunny.png";

import "./HourlyChart.css";

import {
    ResponsiveContainer,
    Tooltip,
    Legend,
    XAxis,
    AreaChart,
    Area,
    CartesianGrid,
  } from "recharts";





const HourlyChart = ({
    weather,
    weather: {  main, name, temp, timezone },
  }) => {

    return (
        <div className="MainHr">
            <div className="HrTemp">
                <h1 >{Math.floor(temp)} °C</h1>
                <img className="HrChartImg"
                        src={
                          main  === "Clear"
                          ? sunny
                          :main  === "Clouds" 
                          ? cloud
                          :rain
                        }
                        alt={main}
                      />
                      <div className="HrTimezone">
                        <p>{name} {timezone}</p>
                      </div>
            </div>


            {/* Chart */}

            
            
            
            <div className="ChartMain">
                <ResponsiveContainer width="100%">
                    <AreaChart
                        // width={650}
                        // height={250}
                        data={weather.hourly}
                        // margin={{ top: 20, right: 2, left: 20 }}
                    >   
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0D47A1" stopOpacity={.8}/>
                          <stop offset="95%" stopColor="#0D47A1" stopOpacity={.2}/>
                        </linearGradient>

                    </defs>
                          <CartesianGrid strokeDasharray="2" />
                        <XAxis dataKey="title" interval={'preserveStartEnd'} />
                        
                        <Tooltip />
                        <Legend />
                        <Area 
                         type="monotone" 
                         dataKey="temp" 
                         activeDot={{r:7}}
                        stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"

                         />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        
        
{/* 
            <AreaChart width={730} height={250} data={weather.hourly}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart> */}

        </div>
    )
}

export default HourlyChart;