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
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [isFetched, setIsFetched] = useState(false);


    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${props.appid}`)
            .then(res => {
                const data = res.data;
                setCity(data.name);
                setCountry(data.sys.country);
                setTemperature(data.main.temp);
                setFeels(data.main.feels_like);
                setHumidity(data.main.humidity);
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
                setIsFetched(data.weather[0].icon);
            })
    }, []);


    return (
        <div>
            {isFetched &&
                <div>
                    <h2>{city}</h2>
                    <h2>{country}</h2>
                    <h2><Moment format="dddd Do MMM YYYY" /></h2>
                    <h2><Moment format="hh:mm a" interval={30000} /></h2>
                    <Weather
                        temperature={temperature}
                        feels={feels}
                        humidity={humidity}
                        description={description}
                        icon={`http://openweathermap.org/img/w/${icon}.png`}
                    />
                </div>
            }
        </div>
    )
}

export default CurrentWeatherAPI

