import { getWeather } from '../../services/weather-api';

function HomePage(props) {
    return (
        <div>
            HomePage
            <button onClick={getWeather}>Give me Weather!</button>
         
    </div>
);
}

export default HomePage;