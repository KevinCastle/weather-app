import React, { useEffect } from 'react'

const Weather = (props) => {
    return (
        <div className={props.style}>
            {props.hour && <div className="weather__hour">{props.hour.substring(11, 16)}</div>}
            <div className="weather__time">
                <img className="weather__time__icon" src={props.icon} />
                <p className="weather__time__description">{props.description}</p>
            </div>
            <p className="weather__temperature">
                {props.temperature}
                <span className="weather__symbol">°C</span>
            </p>
            <div className="weather__details">
                <div>
                    <h5>RealFeel:</h5>
                    <p>
                        {props.feels}
                        <span className="weather__symbol">°C</span>
                    </p>
                </div>
                <div>
                    <h5>Humedad:</h5>
                    <p>
                        {props.humidity}
                        <span className="weather__symbol">%</span>
                    </p>
                </div>
                <div>
                    <h5>Viento:</h5>
                    <p>
                        {props.wind}
                        <span className="weather__symbol">km/h</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Weather
