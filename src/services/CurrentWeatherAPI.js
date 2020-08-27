import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from '../components/Weather';
import Moment from 'react-moment';

const CurrentWeatherAPI = (props) => {

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [feels, setFeels] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0)
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [isFetched, setIsFetched] = useState(false);


    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${props.appid}&lang=es`)
            .then(res => {
                const data = res.data;
                setCity(data.name);
                setCountry(data.sys.country);
                setTemperature(data.main.temp);
                setFeels(data.main.feels_like);
                setHumidity(data.main.humidity);
                setWind(data.wind.speed);
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
                setIsFetched(data.weather[0].icon);
            })
    }, []);


    return (
        <div>
            {isFetched &&
                <div className="weather-card--current__containter">
                    <p>{city}, {country}</p>
                    <p><Moment locale="es" format="dddd Do MMM YYYY" /></p>
                    <p><Moment format="hh:mm a" interval={30000} /></p>
                    <Weather
                        style="weather-card--current__details"
                        temperature={temperature}
                        feels={feels}
                        humidity={humidity}
                        wind={wind}
                        description={description}
                        icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    />
                </div>
            }
        </div>
    )
}

export default CurrentWeatherAPI

