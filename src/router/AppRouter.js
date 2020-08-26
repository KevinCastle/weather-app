import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
                    <CurrentWeatherAPI latitude={latitude} longitude={longitude} appid={appid} />
                    <ForecastAPI latitude={latitude} longitude={longitude} appid={appid} />
                </div>
            }

        </BrowserRouter>
    )
};

export default AppRouter;