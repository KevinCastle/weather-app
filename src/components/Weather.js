import React from 'react'

const Weather = (props) => {
    return (
        <div>
            <p>{props.description}</p>
            <p>{props.temperature} °C</p>
            <p>{props.feels} °C</p>
            <p>{props.humidity}%</p> 
            <img src={props.icon} />
        </div>
    )
}

export default Weather
