import axios from 'axios';

const OPEN_MAP_API_KEY ='01cdf5812da9d77d03cdd56baf51ca71';
export const FETCH_WEATHER ='FETCH_WEATHER';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_MAP_API_KEY}`;

export function fetchWeather(city)
{
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //console.log("request ", request);
    return {type: FETCH_WEATHER,
            payload: request};
}
