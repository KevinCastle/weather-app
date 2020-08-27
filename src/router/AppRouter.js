import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CurrentWeatherAPI from '../services/CurrentWeatherAPI';
import ForecastAPI from '../services/ForecastAPI';

const appid = "d5cb1eef04d398c4fb46388a05cece2c";

const AppRouter = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setIsFetched(true);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            {!latitude && <h1>Por favor, habilita la geolocalizacion</h1>}
            {isFetched &&
                <div>
                    <div className="container">
                        <Link to="/">
                            <CurrentWeatherAPI latitude={latitude} longitude={longitude} appid={appid} />
                        </Link>
                        <ForecastAPI latitude={latitude} longitude={longitude} appid={appid} />
                    </div>
                    <p className="container__footer">
                        Created by
                        <a target="_blank" href="https://kevincastle.github.io/Portfolio/"> Kevin Castillo </a>
                        | Weather data from
                        <a target="_blank" href="https://openweathermap.org"> OpenWeatherMap </a>
                    </p>
                </div>
            }

        </BrowserRouter>
    )
};

export default AppRouter;