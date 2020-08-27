import React from 'react'
import Weather from './Weather'

const Forecast = (props) => {
    return (
        <div>
            {props.day.map((time) => 
                <Weather 
                    key={time.dt}
                    hour={time.dt_txt}
                    style="weather-card--forecast"
                    temperature={time.main.temp}
                    feels={time.main.feels_like}
                    humidity={time.main.humidity}
                    description={time.weather[0].description}
                    wind={time.wind.speed}
                    icon={`http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                />)}
        </div>
    )
}

export default Forecast
