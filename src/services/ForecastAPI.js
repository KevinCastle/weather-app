import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Forecast from '../components/Forecast';
import { Route, Switch, NavLink } from 'react-router-dom';
import Moment from 'react-moment';

const ForecastAPI = (props) => {

    const [isFetched, setIsFetched] = useState(false);
    const [ListDay, setListDay] = useState([]);


    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${props.appid}&lang=es`)
            .then(res => {
                const data = res.data;
                setDays(data.list);
                setIsFetched(true);

            })
    }, []);

    const setDays = (List) => {
        let dayList = [];
        dayList = List.map(day => {
            if (dayList.indexOf(day.dt_txt.substring(0, 10)) === -1)
                return day.dt_txt.substring(0, 10);
        });
        dayList = [...new Set(dayList)];

        const setterDay = dayList.map((date) => {
            let setterTime = List.filter(day => {
                if (day.dt_txt.substring(0, 10) === date) {
                    return day;
                }
            });
            return setterTime;
        });
        setListDay(setterDay);
    }



    return (
        <div className="forecast-container">
            <ul className="forecast-container__routes">
                {isFetched && ListDay.map((day) =>
                    <li key={day[0].dt_txt.substring(0, 10)}>
                        <NavLink
                            to={`/${day[0].dt_txt.substring(0, 10)}`}
                            activeClassName="forecast-container__routes--active">
                            {
                                <Moment locale="es" format="DD MMM">
                                    {day[0].dt_txt.substring(0, 10)}
                                </Moment>

                            }
                        </NavLink>
                    </li>
                )}
            </ul>
            <Switch>
                {ListDay.map((day, index) =>
                    <Route exact={true} path={`/${day[0].dt_txt.substring(0, 10)}`} key={index}>
                        <Forecast day={day} />
                    </Route>
                )}
            </Switch>
        </div>
    )
}

export default ForecastAPI
