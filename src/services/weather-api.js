const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '06dfafdfdba20a4051a82d26036578ff';

export function getWeather() {
    return fetch(BASE_URL + '?q=Omaha&units=imperial&appid=' + API_KEY)
    .then(res => res.json());
}