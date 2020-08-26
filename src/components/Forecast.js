import React from 'react'
import Moment from 'react-moment'
import Weather from './Weather'

const Forecast = (props) => {
    console.log(props.day);
    return (
        <div>
            <Moment format="Do MMM">
                {props.day[0].dt_txt}
            </Moment>
            {props.day.map((time) => 
                <Weather 
                    key={time.dt}
                    temperature={time.main.temp}
                    feels={time.main.feels_like}
                    humidity={time.main.humidity}
                    description={time.weather[0].description}
                    icon={`http://openweathermap.org/img/w/${time.weather[0].icon}.png`}
                />)}
        </div>
    )
}

export default Forecast
